import React from "react";
import emailjs from 'emailjs-com';
import { Form, FormLabel } from 'react-bootstrap'


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'gmailtemp', e.target, 'user_LGBiRCQrrQWCA5th2HdQt')
      .then((result) => {
        alert('Thank you for reaching me out!');
      }, (error) => {
      
      });
      e.target.reset();
  }
  return (
    <div>
      <div className="Container">
        <form className="" onSubmit={(sendEmail)}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="email" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Message</label>
            <div className="col-sm-10">
              <textarea className="form-control" name="message" placeholder="Message" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Subject</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="subject" placeholder="Subject" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input type="submit" className="btn btn-dark" name="subject" value="Send Message" />
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}


