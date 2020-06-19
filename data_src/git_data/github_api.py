import os
import sys
sys.path.insert(1, os.path.join(os.path.dirname(os.path.realpath(__file__)), '..\\..\\'))
from k3y5 import DEV_GIT_KEY
import requests
import json
import itertools  
import collections 
import numpy as np
# from rank_bm25 import BM25Okapi

def apiToJson(url):
    payload = ''
    headers = {
        'Authorization': 'Bearer ' + DEV_GIT_KEY,
        'Content-Type': 'application/json'
    }
    response = requests.request("GET", url, headers=headers, data = payload)
    v = json.loads(response.text)
    
    return (json.loads(response.text), response.headers)

def getUserGitData(user):
    try:
        repoList = apiToJson("https://api.github.com/users/" + user + "/repos")[0]
        repoLangData = []
        repoContriData = []
        for i in range (len(repoList)):
            repoLangData.append (apiToJson(repoList[i]['languages_url'])[0])
            repoContriData.append (apiToJson(repoList[i]["contributors_url"])[0])
        thisUserResponse = apiToJson("https://api.github.com/users/"+user+"/events")
        thisUser = thisUserResponse[0]
        thisUserHeader = thisUserResponse[1]
        if not (len(thisUser)>0):
            print("Invalid Username")
            return None
        else:
            last_event_url = thisUserHeader['Link'].split(', ')[1].split('>')[0][1:]
            last_page_num = int(last_event_url.split('=')[-1])
            lastPageActivity = apiToJson(last_event_url)[0]
            thisUserContri = len(lastPageActivity) + (30 * (last_page_num - 1))
            
    except:
        print("ERR Fetching GitHub API Data")
        return None
    try:
        sumThisUserCommits = 0
        sumCommitPercent = 0
        allLangList = []
        for i in range(len(repoList)):
            
            languageDict = repoLangData[i]
            langList = list(languageDict.keys())
            for lang in langList:
                allLangList.append(lang)
            allLangList = list(set(allLangList))

            this_contri = repoContriData[i]
            allCommits = 0 
            this_userCommits=0
            for j in range(len(this_contri)):
                allCommits = allCommits + this_contri[j]["contributions"]
                if this_contri[j]["login"] == user:
                    this_userCommits = this_contri[j]["contributions"]
                    sumThisUserCommits = sumThisUserCommits + this_contri[j]["contributions"] 
                
            commit_percent = (this_userCommits / allCommits) * 100
            sumCommitPercent = sumCommitPercent + commit_percent

        gitStats = {
            'avgContri': (sumCommitPercent / len(repoList)),
            'langList': allLangList,
            'recentContri': thisUserContri
        }

        return gitStats
    
    except:
        print("Invalid Username")
        return None
    
def gitDistance(user1, user2):
    stat1 = getUserGitData(user1)
    stat2 = getUserGitData(user2)
    # corpus = [
    #     'Python'
    # ]

    # bm25 = BM25Okapi(corpus)
    # query = 'Python'

    # doc_scores = bm25.get_scores(query)
    # print(doc_scores)
    score = {
        "avgContri": abs(stat1['avgContri'] - stat2['avgContri']),
        "recentContri": abs(stat1['recentContri'] - stat2['recentContri'])
    }
    return (score['avgContri']/10 + score['recentContri']/100)/2

# print(gitDistance('mihirs16', 'hritikbhandari'))