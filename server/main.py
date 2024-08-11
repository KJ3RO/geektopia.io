from flask import request, jsonify
from config import app, db
from models import Hackathon, Participant

@app.route('/api/hackathons', methods=['GET'])

def get_hackathons():
  hackathons = Hackathon.query.all()
  json_hackathons = list(map(lambda x: x.to_json(), hackathons))
  return jsonify({"hackathons": json_hackathons})


@app.route('/api/participants', methods=['GET'])

def get_participants():
  participants = Participant.query.all()
  json_participants = list(map(lambda x: x.to_json(), participants))
  return jsonify({"participants": json_participants})


def create_participant():
  first_name = request.json['participantFirstname']
  last_name = request.json['participantLastname']
  email = request.json['participantEmail']
  
  if not first_name or not last_name or not email:
    return (jsonify({"message": "Please provide vaild information"}), 400)
  
  new_participant = Participant(first_name=first_name, last_name=last_name, email=email)
  
  try:
    db.session.add(new_participant)
    db.session.commit()
  except Exception as e:
    return (jsonify({"message": str(e)}), 400)
  
  return jsonify({"message": "Participant created successfully"}), 201


@app.route('/api/update_participants/<int:user_id>', methods=['PATCH'])

def update_participant(user_id):
  participant = Participant.query.get(user_id) # find user by id
  
  if not participant:
    return (jsonify({"message": "Participant not found"}), 404)
  
  data = request.json
  participant.first_name = data.get('participantFirstname', participant.first_name)
  participant.last_name = data.get('participantLastname', participant.last_name)
  participant.email = data.get('participantEmail', participant.email)
  
  db.session.commit()
  
  return jsonify({"message": "Participant updated successfully"}), 200


@app.route('/api/delete_participants/<int:user_id>', methods=['DELETE'])

def delete_participant(user_id):
  participant = Participant.query.get(user_id)
  
  if not participant:
    return (jsonify({"message": "Participant not found"}), 404)
  
  db.session.delete(participant)
  db.session.commit()
  
  return jsonify({"message": "Participant deleted successfully"}), 200


if __name__ == '__main__':
  with app.app_context():
    db.create_all() # create all models in our database
    
  app.run(debug=True, port=8080) # delete debug=True in production, 5000 has error with CORS