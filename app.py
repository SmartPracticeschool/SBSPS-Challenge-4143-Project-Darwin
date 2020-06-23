import flask
import flask_login
from k3y5 import ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_KEY

app = flask.Flask(__name__)
login_manager = flask_login.LoginManager()
login_manager.init_app(app)

# ---- flask login setup ----------------------------------
app.secret_key = ADMIN_KEY
users = {ADMIN_USERNAME: {'password': ADMIN_PASSWORD}}

class User(flask_login.UserMixin):
    pass

@login_manager.user_loader
def user_loader(email):
    if email not in users:
        return
    user = User()
    user.id = email
    return user

@login_manager.request_loader
def request_loader(request):
    email = request.form.get('email')
    if email not in users:
        return
    user = User()
    user.id = email
    user.is_authenticated = request.form['password'] == users[email]['password']
    return user
# -----------------------------------------------------

# ---- public services --------------------------------
@app.route('/', methods=['GET'])
def homepage():
    return flask.render_template('homepage.html')
# -----------------------------------------------------

# ---- admin services ---------------------------------
@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if flask.request.method == 'GET':
        return flask.render_template('admin_login.html')

    email = flask.request.form['email']
    if email in list(users.keys()):
        if flask.request.form['password'] == users[email]['password']:
            user = User()
            user.id = email
            flask_login.login_user(user)
            return flask.redirect(flask.url_for('billboard'))
    return flask.redirect(flask.url_for('admin'))

@app.route('/billboard')
@flask_login.login_required
def billboard():
    return flask.render_template('job_billboard.html')

# @app.route('/applicants/<jobid>')
# @flask_login.login_required
# def protected():
#     return flask.render_template('job_billboard.html', jobid=jobid)

@app.route('/logout')
def logout():
    flask_login.logout_user()
    return flask.redirect(flask.url_for('admin'))

@login_manager.unauthorized_handler
def unauthorized_handler():
    return flask.redirect(flask.url_for('admin'))
# -------------------------------------------------------

if __name__ == "__main__":
    app.run()