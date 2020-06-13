import os
from os.path import join, dirname
from dotenv import load_dotenv

try:
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(dotenv_path)
    ADMIN_KEY = str(os.environ.get("ADMIN_KEY"))
    API_KEY = str(os.environ.get('API_KEY'))
    API_SECRET_KEY = str(os.environ.get('API_SECRET_KEY'))
    ACCESS_TOKEN = str(os.environ.get('ACCESS_TOKEN'))
    ACCESS_TOKEN_SECRET = str(os.environ.get('ACCESS_TOKEN_SECRET'))
except:
    ADMIN_KEY = str(os.environ.get("ADMIN_KEY"))
    API_KEY = str(os.environ.get('API_KEY'))
    API_SECRET_KEY = str(os.environ.get('API_SECRET_KEY'))
    ACCESS_TOKEN = str(os.environ.get('ACCESS_TOKEN'))
    ACCESS_TOKEN_SECRET = str(os.environ.get('ACCESS_TOKEN_SECRET'))
