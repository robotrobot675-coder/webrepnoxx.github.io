"""REPNOXX Cloud Sync Server — deploy to PythonAnywhere (free)
   
   Steps:
   1. Create free account at pythonanywhere.com
   2. Go to Web tab → Add a new web app → Manual config → Python 3.10
   3. Upload this file as /home/yourusername/mysite/flask_app.py
   4. In Web tab → WSGI configuration file, point to this file
   5. Reload → done!
"""

import os, json, hashlib
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

SYNC_DIR = os.path.join(os.path.dirname(__file__), "sync_data")
os.makedirs(SYNC_DIR, exist_ok=True)

def hash_email(email):
    return hashlib.sha256(email.strip().lower().encode()).hexdigest()[:16]

@app.route("/api/sync/upload", methods=["POST", "OPTIONS"])
def sync_upload():
    if request.method == "OPTIONS":
        return cors_response(jsonify({"ok": True}))
    data = request.get_json(silent=True)
    if not data:
        return cors_response(jsonify({"error": "invalid JSON"}), 400)
    email = data.get("email", "").strip()
    password = data.get("password", "")
    payload = data.get("data", {})
    if not email or not password:
        return cors_response(jsonify({"error": "email and password required"}), 400)
    user_file = os.path.join(SYNC_DIR, hash_email(email) + ".json")
    if os.path.exists(user_file):
        with open(user_file) as f:
            existing = json.load(f)
        if existing.get("password") != password:
            return cors_response(jsonify({"error": "wrong password"}), 401)
    stored = {"email": email, "password": password, "data": payload,
              "updatedAt": datetime.now().isoformat()}
    with open(user_file, "w") as f:
        json.dump(stored, f, indent=2)
    return cors_response(jsonify({"ok": True, "updatedAt": stored["updatedAt"]}))

@app.route("/api/sync/download")
def sync_download():
    email = request.args.get("email", "").strip()
    password = request.args.get("password", "")
    if not email or not password:
        return cors_response(jsonify({"error": "email and password required"}), 400)
    user_file = os.path.join(SYNC_DIR, hash_email(email) + ".json")
    if not os.path.exists(user_file):
        return cors_response(jsonify({"error": "no data found for this email"}), 404)
    with open(user_file) as f:
        stored = json.load(f)
    if stored.get("password") != password:
        return cors_response(jsonify({"error": "wrong password"}), 401)
    return cors_response(jsonify({"ok": True, "data": stored.get("data", {}),
                                  "updatedAt": stored.get("updatedAt")}))

def cors_response(resp, status=200):
    resp = jsonify(resp.get_json()) if hasattr(resp, 'get_json') else resp
    resp.status_code = status
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return resp

@app.after_request
def add_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
