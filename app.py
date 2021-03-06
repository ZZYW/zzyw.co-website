import os, datetime
import re
import json
from flask import Flask, request, render_template, redirect, abort
from flask import jsonify
from unidecode import unidecode


# mongoengine database module
from flask.ext.mongoengine import MongoEngine
# connect('models')

app = Flask(__name__)   # create our flask app
# app.config['CSRF_ENABLED'] = False
# app.config['DEBUG'] = True

app.config.update(
    DEBUG=True,
    CSRF_ENABLED = False
)

app.config['SEND_FILE_MAX_AGE_DEFAULT']

# --------- Database Connection ---------
# MongoDB connection to MongoLab's database
app.config['MONGODB_SETTINGS'] = {'HOST':os.environ.get('MONGOLAB_URI'),'DB': 'zzywcowebsite'}
app.logger.debug("Connecting to MongoLabs")
db = MongoEngine(app) # connect MongoEngine with Flask App

# import data models
import models

# this is our main page
@app.route("/", methods=['GET'])
def index():
	return render_template("index.html")

# about page
@app.route("/archive",methods=['GET'])
def archive():
	return render_template("archive.html")

@app.after_request
def add_header(response):
    response.cache_control.max_age = 300
    return response


# start the webserver
if __name__ == "__main__":
	app.debug = True

	port = int(os.environ.get('PORT', 6000)) # locally PORT 5000, Heroku will assign its own port
	app.run(host='0.0.0.0', port=port)
