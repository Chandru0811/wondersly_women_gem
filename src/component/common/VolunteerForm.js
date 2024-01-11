import React from "react";
import VolunteerFormImg from "../../asset/joinvolunteers.jpeg";

function VolunteerForm() {
  return (
    <section className="volunteerForm">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center">
          {/* <h2 className="volunteerform_Heart">
              "Volunteers do not necessarily have the time, they just have the
              heart."
            </h2> */}
            <img
              src={VolunteerFormImg}
              className="img-fluid"
              alt="VolunteerForm_Img"
            />
            
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="volunteerFormTitle">Join Our Team!</h2>
            <p className="volunteerform_Embrace">
              Embrace the Power of Giving: Volunteer with Us
            </p>
            <hr className="volunteerform_Line" />
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

              <div className="form-group my-2 ms-2">
                <input type="radio" id="male" name="gender" value="Male" />
                &nbsp;
                <label htmlFor="male" className="radio_content">
                  Male
                </label>
                &nbsp;&nbsp;
                <input type="radio" id="female" name="gender" value="Female" />
                &nbsp;
                <label htmlFor="female" className="radio_content">
                  Female
                </label>
                &nbsp;&nbsp;
                <input type="radio" id="others" name="gender" value="Others" />
                &nbsp;
                <label htmlFor="others" className="radio_content">
                  Others
                </label>
              </div>

              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control mt-2"
                  placeholder="Message*"
                />
              </div>

              <button
                className="volunteersubmitBtn btn btn-danger mt-3"
                type="button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;
