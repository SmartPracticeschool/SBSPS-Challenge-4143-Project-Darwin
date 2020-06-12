
import os
from os.path import join, dirname
from dotenv import load_dotenv

try:
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(dotenv_path)
    ADMIN_KEY = str(os.environ.get("ADMIN_KEY"))
except:
    ADMIN_KEY = str(os.environ.get("ADMIN_KEY"))
