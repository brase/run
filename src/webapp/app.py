#from frontend import app
#app.run(debug=True)

from flask import Flask
from frontend import frontend

app = Flask(__name__)
app.register_blueprint(frontend)

if(__name__ == "__main__"):
   app.run(debug=True)