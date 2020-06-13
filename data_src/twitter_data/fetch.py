import os
import sys
sys.path.insert(1, os.path.join(os.path.dirname(os.path.realpath(__file__)), '..\\..\\'))
from pandas import DataFrame
import tweepy
import time
from dotenv import load_dotenv
from k3y5 import API_KEY,API_SECRET_KEY,ACCESS_TOKEN,ACCESS_TOKEN_SECRET

# loading keys from json file
MAX_TWEET = 100

# connecting to twitter api
auth = tweepy.OAuthHandler(API_KEY,API_SECRET_KEY)
auth.set_access_token(ACCESS_TOKEN,ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

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

def get_all_tweets(username):
    all_tweets = []
    
    # requesting the most recent tweets(200 max)
    new_tweets = api.user_timeline(screen_name=username,count=MAX_TWEET)
    all_tweets.extend(new_tweets)

    '''
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
        print(f"...{len(all_tweets)} tweets downloaded so far")'''

    # transforming the tweets to 2D array
    out_tweets = [[tweet.id_str,tweet.created_at,tweet.text,
                  tweet.favorite_count,tweet.in_reply_to_screen_name,tweet.retweeted]for tweet in all_tweets]

    # converting list of list to dataframe
    data = DataFrame(out_tweets,columns=['id','created_at','text','likes','in reply to','retweeted'])
    data.to_csv(f'{username}_tweets.csv',index=False)

    pass

username = ['@Soccermatics']
for u in username:
    get_all_tweets(u)