import React from "react";
import ContactFormPhoto from "../../asset/Contact_Form_Img.png";

function ContactForm() {
  return (
    <section className="contactForm" id="contact_form">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center">
            <h2 className="ContactFormTitle">Say Hello!</h2>
            <p className="contactform_Empathy">Empathy in action. Connect with us and help us make a positive impact.</p>
            <hr className="contactform_Line"></hr>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-3" 
                  placeholder="Name*"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-2"
                  placeholder="Email*"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Mobile No*"
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control mt-2"
                  placeholder="Message*"
                />
              </div>
              <button className="contactsubmitBtn btn btn-danger mt-3" type="button">Submit </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-3">
            <img
              src={ContactFormPhoto}
              className="img-fluid"
              alt="contactformImg"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
