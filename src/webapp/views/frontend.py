from flask import render_template, flash, redirect, session, url_for, request, g

from webapp import app, db, lm, oid


@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html", title = 'Home')

@app.route('/ausschreibung')
def ausschreibung():
    return render_template("ausschreibung.html")