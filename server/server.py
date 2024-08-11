from flask import Flask, jsonify

# app instance
app = Flask(__name__)

# route
@app.route('/api/home', methods=['GET'])

def return_home():
    return jsonify({
        'message': 'Welcome to the home page'
    })

if __name__ == '__main__':
    app.run(debug=True) # delete debug=True in production
