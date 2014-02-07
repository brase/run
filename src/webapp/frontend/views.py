from flask import Blueprint, render_template, abort

#static_url_path needed cause of the following bug: https://github.com/mitsuhiko/flask/issues/348
frontend = Blueprint('frontend', __name__, template_folder = "templates", static_folder = "static", static_url_path='/%s' % __name__)

@frontend.route("/")
def home():
    return render_template('home.html')