import os
from os.path import join, dirname
from dotenv import load_dotenv

try:
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(dotenv_path)
    ADMIN_KEY = str(os.environ.get("ADMIN_KEY"))
    TWITTER_API_KEY = str(os.environ.get('TWITTER_API_KEY'))
    TWITTER_API_SECRET_KEY = str(os.environ.get('TWITTER_API_SECRET_KEY'))
    TWITTER_ACCESS_TOKEN = str(os.environ.get('TWITTER_ACCESS_TOKEN'))
    TWITTER_ACCESS_TOKEN_SECRET = str(os.environ.get('TWITTER_ACCESS_TOKEN_SECRET'))
    IBM_API_KEY = str(os.environ.get('IBM_API_KEY'))
    IBM_URL = str(os.environ.get('IBM_URL'))
    DEV_GIT_KEY = str(os.environ.get('DEV_GIT_KEY'))
except:
    ADMIN_KEY = str(os.environ.get("ADMIN_KEY"))
    TWITTER_API_KEY = str(os.environ.get('TWITTER_API_KEY'))
    TWITTER_API_SECRET_KEY = str(os.environ.get('TWITTER_API_SECRET_KEY'))
    TWITTER_ACCESS_TOKEN = str(os.environ.get('TWITTER_ACCESS_TOKEN'))
    TWITTER_ACCESS_TOKEN_SECRET = str(os.environ.get('TWITTER_ACCESS_TOKEN_SECRET'))
    IBM_API_KEY = str(os.environ.get('IBM_API_KEY'))
    IBM_URL = str(os.environ.get('IBM_URL'))
    DEV_GIT_KEY = str(os.environ.get('DEV_GIT_KEY'))