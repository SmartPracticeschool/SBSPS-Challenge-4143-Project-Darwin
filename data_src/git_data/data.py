import requests
import json


def apiToJson(url):
  payload = ''
  headers = {
    'Authorization': 'Bearer c0f6bcd5ba44d9cb6715d9bab9bc6e19072d5c89',
    'Content-Type': 'application/json'
  }
  response = requests.request("GET", url, headers=headers, data = payload)
  return json.loads(response.text)

def getUserGitData(user):
  repoList = apiToJson("https://api.github.com/users/" + user + "/repos")

  repoLangData = []
  repoContriData = []
  for i in range (len(repoList)):
    repoLangData.append (apiToJson(repoList[i]['languages_url']))
    repoContriData.append (apiToJson(repoList[i]["contributors_url"]))

  sumCommitPercent = 0
  allLangList = []
  for i in range(len(repoList)):
    
    print(repoList[i]['name'])

    languageDict = repoLangData[i]
    langList = list(languageDict.keys())
    for lang in langList:
      allLangList.append(lang)

    this_contri = repoContriData[i]
    allCommits = 0 
    this_userCommits=0
    for j in range(len(this_contri)):
      allCommits = allCommits + this_contri[j]["contributions"]
      if this_contri[j]["login"] == user:
        this_userCommits = this_contri[j]["contributions"]
        
    commit_percent = (this_userCommits / allCommits) * 100
    sumCommitPercent = sumCommitPercent + commit_percent
  listOfLang = list(set(allLangList))

  for i in range (len(repoList)):
    print(repoList[i]['name'])
    langValDict = {'lang': [], 'loc': []}
    for l in listOfLang:
      langValDict['lang'].append(l)
      try:
        langValDict['loc'].append(repoLangData[i][l])
      except:
        langValDict['loc'].append(0)
    print(langValDict)

  print(sumCommitPercent / len(repoList))
  

getUserGitData('mihirs16')