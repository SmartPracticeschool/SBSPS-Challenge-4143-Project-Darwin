import os
import sys
sys.path.insert(1, os.path.join(os.path.dirname(os.path.realpath(__file__)), '..\\..\\'))
from k3y5 import DEV_GIT_KEY
import requests
import json
import itertools  
import collections 
import numpy as np

def apiToJson(url):
    payload = ''
    headers = {
        'Authorization': 'Bearer ' + DEV_GIT_KEY,
        'Content-Type': 'application/json'
    }
    response = requests.request("GET", url, headers=headers, data = payload)
    v = json.loads(response.text)
    #print(v)
    return json.loads(response.text)

# def getUserGitData(user):
#     try:
#         repoList = apiToJson("https://api.github.com/users/" + user + "/repos")
#         repoLangData = []
#         repoContriData = []
#         for i in range (len(repoList)):
#             repoLangData.append (apiToJson(repoList[i]['languages_url']))
#             repoContriData.append (apiToJson(repoList[i]["contributors_url"]))
#     except:
#         print("ERR Fetching GitHub API Data")
#         return None
#     print(repoList[0])
    # sumThisUserCommits = 0
    # sumCommitPercent = 0
    # allLangList = []
    # for i in range(len(repoList)):
        
    #     languageDict = repoLangData[i]
    #     langList = list(languageDict.keys())
    #     for lang in langList:
    #         allLangList.append(lang)
    #     allLangList = list(set(allLangList))



        # this_contri = repoContriData[i]
        # allCommits = 0 
        # this_userCommits=0
        # for j in range(len(this_contri)):
        #     allCommits = allCommits + this_contri[j]["contributions"]
        #     if this_contri[j]["login"] == user:
        #         this_userCommits = this_contri[j]["contributions"]
        #         sumThisUserCommits = sumThisUserCommits + this_contri[j]["contributions"] 
            
        # commit_percent = (this_userCommits / allCommits) * 100
        # sumCommitPercent = sumCommitPercent + commit_percent

    # gitStats = {
    #     # 'score': sumThisUserCommits/len(repoList),
    #     'repoCount': len(repoList),
    #     'avgContri': (sumCommitPercent / len(repoList)),
    #     'langList': allLangList
    # }
    
    # return gitStats

def getUserGitData(user):
    try:
        thisUser = apiToJson("https://api.github.com/users/"+user+"/events")
        if not (len(thisUser)>0):
            print("Invalid Username")
            return None
    except:
        print("ERR Fetching GitHub API Data")
        return None
    try:
        #print(thisUser)
        activityTimeline = []
        for event in thisUser:
            activityTimeline.append(event["created_at"])
            
        return activityTimeline
    
    except:
        print("Invalid Username")
        return None
print(getUserGitData('mihirs16_'))