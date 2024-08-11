from config import db

class Hackathon(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  hackathon_name = db.Column(db.String(100), nullable=False)
  hackathon_description = db.Column(db.String(10000), nullable=False)
  hackathon_date = db.Column(db.String(100), nullable=False)
  hackathon_location = db.Column(db.String(100), nullable=False)
  
  def to_json(self):
    return {
      'id': self.id,
      'hackathonName': self.hackathon_name,
      'hackathonDescription': self.hackathon_description,
      'hackathonDate': self.hackathon_date,
      'hackathonLocation': self.hackathon_location
    }

class Participant(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  participant_firstname = db.Column(db.String(100), nullable=False)
  participant_lastname = db.Column(db.String(100), nullable=False)
  participant_email = db.Column(db.String(100), nullable=False)
  
  def to_json(self):
    return {
      'id': self.id,
      'participantFirstname': self.participant_firstname,
      'participantLastname': self.participant_lastname,
      'participantEmail': self.participant_email
    }