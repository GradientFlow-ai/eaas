from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','application/json')
        self.end_headers()
        json_string = json.dumps("Hello World!")
        self.wfile.write(json_string.encode(encoding='utf_8'))

        return
