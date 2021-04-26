import aiml
from flask import Flask, render_template
import os

kernel = aiml.Kernel()

kernel.learn('std-startup.xml')
kernel.respond('load aiml b')

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/<query>')
def api(query):
	return kernel.respond(query)

if __name__ == '__main__':
	app.run(debug=True)