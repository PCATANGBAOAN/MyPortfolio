import React from "react";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  function sendEmail(e) {
    toast.configure()
    e.preventDefault();
    const notify = () => {
      toast.success("Thank you for contacting me, Please expect my reply within the day!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    }
    const notifyErr = () => {
      toast.success("Thank you for contacting me, Please expect my reply within the day!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    }
 
    emailjs.sendForm('gmail', 'gmailtemp', e.target, 'user_LGBiRCQrrQWCA5th2HdQt')
      .then((result) => {
        notify();
      }, (error) => {
        notifyErr();
      });
    e.target.reset();
  }
  return (
    <div>
      <div className="Container">
        <form className="needs-validation" onSubmit={(sendEmail)}>
          <div className="form-group row">
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Name" name="name"  required/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input type="text" className="form-control" name="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <textarea className="form-control" name="message" placeholder="Drop me your thoughts!" required/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="submit" className="btn btn-dark submitbtn" name="subject" value="Send Message" />
            </div>         
          </div>
        </form>

      </div>
    </div>
  )
}


