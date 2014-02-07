from flask import Blueprint, render_template, abort

frontend = Blueprint('frontend', __name__, template_folder = "templates")

@frontend.route("/")
def home():
    return render_template('home.html')