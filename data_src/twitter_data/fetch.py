import os
import sys
sys.path.insert(1, os.path.join(os.path.dirname(os.path.realpath(__file__)), '..\\..\\'))
import time
from pandas import DataFrame
import tweepy
import json
from k3y5 import TWITTER_API_KEY,TWITTER_API_SECRET_KEY,TWITTER_ACCESS_TOKEN,TWITTER_ACCESS_TOKEN_SECRET,IBM_API_KEY,IBM_URL
from ibm_watson import PersonalityInsightsV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

# loading keys from json file
MAX_TWEET = 100

# connecting to twitter api
auth = tweepy.OAuthHandler(TWITTER_API_KEY,TWITTER_API_SECRET_KEY)
auth.set_access_token(TWITTER_ACCESS_TOKEN,TWITTER_ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

authenticator = IAMAuthenticator(IBM_API_KEY)
PI = PersonalityInsightsV3( 
    version='2020-06-15',
    authenticator=authenticator
    )
PI.set_service_url(IBM_URL)

def limit_handled(cursor,list_name):
    while True:
        try:
            yield cursor.next()

        # catch the api rate limit exception and wait for 15 minutes
        except tweepy.RateLimitError:
            print(f"\nData points in list = {len(list_name)}")
            print("Hit Twitter API rate limit.")
            for i in range(3,0,-1):
                print(f"Wait for {i*5} mins.")
                time.sleep(5*60)
        
        # catch other api exceptions
        except tweepy.error.TweepError:
            print("\n Caught TweepError exception")

# this function outputs the csv file for all the tweets received
def get_all_tweets_df(username):
    all_tweets = []
    
    # requesting the most recent tweets(200 max)
    new_tweets = api.user_timeline(screen_name=username,count=MAX_TWEET)
    all_tweets.extend(new_tweets)

    # saving the id of the oldest tweet fetched
    oldest = all_tweets[-1].id - 1

    # to get tweets until there are none left
    while len(new_tweets)>0:
        print(f"getting tweets before {oldest}")

        # requesting tweets and saving new tweets to all tweets
        new_tweets = api.user_timeline(screen_name = username,count=MAX_TWEET,max_id = oldest) 
        # max_id is to return tweets with an id less than or equal to specified id
        all_tweets.extend(new_tweets) # adds all the iterms in iterable list unlike append

        # updating the id of the oldest tweet
        oldest = all_tweets[-1].id - 1
        print(f"...{len(all_tweets)} tweets downloaded so far")

    # transforming the tweets to 2D array
    out_tweets = [[tweet.id_str,tweet.created_at,tweet.text,
                  tweet.favorite_count,tweet.in_reply_to_screen_name,tweet.retweeted]for tweet in all_tweets]

    # converting list of list to dataframe
    data = DataFrame(out_tweets,columns=['id','created_at','text','likes','in reply to','retweeted'])
    data.to_csv(f'{username}_tweets.csv',index=False)

    pass

'''
returns the tweets in a dictionary format containing a list of dictionary formatted tweets

dictionary = {
    'contentItems':[
        {
            'content': tweets text,
            'contenttype': 'text/plain',
            'id': tweets id,
            'created':tweets creation date,
            'language':'en'
        }
    ]
}
'''
def get_all_tweets_dic(username):
    all_tweets = []
    tweet_dic = {
        'contentItems':[]
    }
    
    # requesting the most recent tweets(200 max)
    try:
        new_tweets = api.user_timeline(screen_name=username,count=MAX_TWEET)
        all_tweets.extend(new_tweets)
    except tweepy.error.TweepError:
        print("Username doesn't exist or the API or ACCESS tokens is wrong")

    '''while len(new_tweets)>0:
        print(f"getting tweets before {oldest}")

        # requesting tweets and saving new tweets to all tweets
        new_tweets = api.user_timeline(screen_name = username,count=MAX_TWEET,max_id = oldest) 
        # max_id is to return tweets with an id less than or equal to specified id
        all_tweets.extend(new_tweets) # adds all the iterms in iterable list unlike append

        # updating the id of the oldest tweet
        oldest = all_tweets[-1].id - 1
        print(f"...{len(all_tweets)} tweets downloaded so far")'''

    # appending the tweets into the list on contentItems
    for tweet in all_tweets:
        td = {
            'content':tweet.text,
            'contenttype':'text/plain',
            'id':tweet.id_str,
            'created':tweet.created_at,
            'language':'en'
        }
        tweet_dic['contentItems'].append(td)
        
    return json.dumps(tweet_dic,indent=2,default=str)

# pushes the dictionary created into the personality insights to get the results
def get_persona(dic):
    profile = PI.profile(
        dic,
        'application/json',
        raw_scores=True,
        consumption_preferences=True).get_result()

    return json.dumps(profile, indent=2)

username = '@sidtweetsnow'
tw_dic = get_all_tweets_dic(username)
persona = get_persona(tw_dic)

print(persona)