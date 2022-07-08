from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS

import json
import sqlite3 as sql

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello World!"


@app.route('/chambre/<id>', methods=['GET'])
def ma_fonction(id):
    print(id)
    con = sql.connect("hotelcaraibes")
    con.row_factory = sql.Row
    cur = con.cursor()
    cur.execute("select * from chambre where id=:id", {"id": id})
    data = []
    rows = cur.fetchall();
    for row in rows:
        data.append(list(row))
    if len(data) != 0:
        return jsonify(data)
    else:
        return json.dumps({'error': str(data[0])})
    conn.close()

if __name__ == '__main__':
    app.run(debug=True)
