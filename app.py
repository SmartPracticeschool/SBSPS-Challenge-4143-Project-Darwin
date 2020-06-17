# -- all imports ---------
# from k3y5 import ADMIN_KEY
import resume_vault
import database
import json
# ------------------------

# -- flask init -----------------------------------------------------------
from flask import Flask, render_template, request
app = Flask(__name__, static_folder="static/", template_folder='templates/')
#--------------------------------------------------------------------------

# --- Public Routes ----------
@app.route('/', methods=['GET'])
def homePage():
    return 'Hello World!'

@app.route('/darwin/<jobID>', methods=['GET'])
def darwin(jobID):
    return render_template('darwin.html', jobName=jobID)
# ----------------------------

# --- Admin Routes -----------
@app.route('/admin', methods=['GET'])
def adminLogin():
    return 'You will enter key here'

@app.route('/admin/<key>', methods=['GET'])
def adminDashboard(key):
    if key == ADMIN_KEY:
        return 'Logged in with ' + key
    else:
        return 'Log in Failed with ' + key
# ----------------------------

# --- Public API Services -----------
@app.route('/newUser', methods=['POST'])
def newUser():
    req = json.loads(request.data)
    candidate_id = database.add_candidate(req)
    if resume_vault.upload_item(str(candidate_id), 'data_src\\resume\\mihir_resume.pdf'):
        return "Uploaded New User and Resume"
    else:
        return "That's sad man.."
# -----------------------------------

# --- Private API Services ----------
# @app.route('/newJob/<key>', methods=['POST'])

# @app.route('/getAllJobs/<key>', methods=['GET'])

# @app.route('/getCandidatesForJobId/<key>', methods=['GET'])

# @app.route('/getDashboard')
# -----------------------------------

if __name__ == '__main__':
    app.run()