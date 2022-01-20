import time
from flask import Flask

import numpy as np


app = Flask(__name__, static_folder="../build", static_url_path="/")


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file("index.html")


@app.route("/api/time")
def get_current_time():
    return {"time": time.time()}


@app.route("/api/random")
def getRandomNumber():
    return {"number": np.random.uniform()}
