import requests
import json
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    supports_credentials=True
)


@app.route("/")
def fetchData():
    response = requests.get('https://meigen.doodlenote.net/api/json.php')
    json_data = json.loads(response.text)
    return json_data[0]

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)
