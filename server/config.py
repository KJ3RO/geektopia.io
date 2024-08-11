from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# app instance
app = Flask(__name__)
CORS(app)

# app configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///geektopia.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# creates database instance
db = SQLAlchemy(app)