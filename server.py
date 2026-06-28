#!/usr/bin/env python3
"""REPNOXX Sync Server - serves static files + cloud sync API"""

import os, json, hashlib, mimetypes, urllib.parse, sys, traceback, ctypes
from http.server import HTTPServer, BaseHTTPRequestHandler
from datetime import datetime

# Prevent Windows sleep while server is running (no admin needed)
ES_CONTINUOUS = 0x80000000
ES_SYSTEM_REQUIRED = 0x00000001
ctypes.windll.kernel32.SetThreadExecutionState(ES_CONTINUOUS | ES_SYSTEM_REQUIRED)

PORT = 3000
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SYNC_DIR = os.path.join(SCRIPT_DIR, "sync_data")
LOG_FILE = os.path.join(SCRIPT_DIR, "server.log")
os.makedirs(SYNC_DIR, exist_ok=True)

def log(msg):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line, flush=True)
    with open(LOG_FILE, "a") as f:
        f.write(line + "\n")

def hash_email(email):
    return hashlib.sha256(email.strip().lower().encode()).hexdigest()[:16]

class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        # --- Cloud Sync Download ---
        if path == "/api/sync/download":
            qs = urllib.parse.parse_qs(parsed.query)
            email = qs.get("email", [None])[0]
            password = qs.get("password", [None])[0]
            if not email or not password:
                self.send_json({"error": "email and password required"}, 400)
                return
            user_file = os.path.join(SYNC_DIR, hash_email(email) + ".json")
            if not os.path.exists(user_file):
                log(f"PULL fail: no data for {email}")
                self.send_json({"error": "no data found for this email"}, 404)
                return
            with open(user_file, "r") as f:
                stored = json.load(f)
            if stored.get("password") != password:
                log(f"PULL fail: wrong password for {email}")
                self.send_json({"error": "wrong password"}, 401)
                return
            log(f"PULL ok: {email}")
            self.send_json({"ok": True, "data": stored.get("data", {}),
                            "updatedAt": stored.get("updatedAt")})
            return

        # --- Serve static files ---
        if path == "/" or path == "":
            path = "/indexrg.html"
        file_path = os.path.join(os.path.dirname(__file__), path.lstrip("/"))
        if not os.path.exists(file_path) or os.path.isdir(file_path):
            self.send_error(404, "Not Found")
            return
        ctype, _ = mimetypes.guess_type(file_path)
        self.send_response(200)
        self.send_header("Content-Type", ctype or "application/octet-stream")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        with open(file_path, "rb") as f:
            self.wfile.write(f.read())

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        # --- Cloud Sync Upload ---
        if self.path == "/api/sync/upload":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length) if length else b"{}"
            try:
                payload = json.loads(body)
            except json.JSONDecodeError:
                self.send_json({"error": "invalid JSON"}, 400)
                return
            email = payload.get("email", "").strip()
            password = payload.get("password", "")
            data = payload.get("data", {})
            if not email or not password:
                self.send_json({"error": "email and password required"}, 400)
                return
            # Check existing password if data already stored
            user_file = os.path.join(SYNC_DIR, hash_email(email) + ".json")
            if os.path.exists(user_file):
                with open(user_file, "r") as f:
                    existing = json.load(f)
                if existing.get("password") != password:
                    log(f"PUSH fail: wrong password for {email}")
                    self.send_json({"error": "wrong password"}, 401)
                    return
                log(f"PUSH update: {email} ({sum(len(json.dumps(v)) for v in data.values())} bytes)")
            else:
                log(f"PUSH new: {email}")
            # Store
            stored = {"email": email, "password": password, "data": data,
                      "updatedAt": datetime.now().isoformat()}
            with open(user_file, "w") as f:
                json.dump(stored, f, indent=2)
            self.send_json({"ok": True, "updatedAt": stored["updatedAt"]})
            return

        self.send_error(404)

    def send_json(self, obj, status=200):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(obj).encode())

    def log_message(self, fmt, *args):
        pass  # quiet

if __name__ == "__main__":
    log(f"REPNOXX Server starting on http://localhost:{PORT}")
    log(f"Sync data dir: {SYNC_DIR}")
    try:
        HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
    except Exception as e:
        log(f"FATAL: {e}\n{traceback.format_exc()}")
        raise
