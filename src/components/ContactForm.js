import React from "react";
import "./ContactForm.css";
import contactImage from "../images/contact.png";
function ContactForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img className="contactImage" src={contactImage} alt="" />
        </div>
        <div className="col-md-6">
          {" "}
          <form action="">
            <div className="row">
              <label>
                <input
                  className="contactInput"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </label>
            </div>

            <div className="row">
              <label>
                <input
                  className="contactInput"
                  type="text"
                  name="mail"
                  placeholder="Mail"
                />
              </label>
            </div>
            <div className="row">
              <label>
                <input
                  className="contactInput"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </label>
            </div>
            <div className="row">
              <label>
                <textarea
                  className="contactTxt"
                  type="message"
                  placeholder="Message"
                />
              </label>
            </div>
            <div className="row">
              <label>
                {" "}
                <button className="btnContact">Send Message</button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
