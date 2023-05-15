import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="footer_text">
              <div className="footer_logo">
                <img src="./images/footer_logo.png" alt="" />
              </div>
              <div className="footer_list">
                <div className="about_list">
                  <h6>About Us</h6>
                  <ul>
                    <li>Jeevone Story</li>
                    <li>Creators Corner</li>
                  </ul>
                </div>
                <div className="contact_list">
                  <h6>Contact Us</h6>
                  <ul>
                    <li>Training (Coming Soon)</li>
                    <li>Schedule a Demo</li>
                    <li>Reach Us</li>
                  </ul>
                </div>
              </div>
              <div className="footer_icon_list">
                <h6>Connect</h6>
                <div className="icon_list">
                  <div className="icon_shape_footer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </div>
                  <div className="icon_shape_footer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="icon_shape_footer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <div className="icon_shape_footer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className="form_box">
              <div style={{ width: "100%" }}>
                <h4>Reach Us</h4>
                <div className="from_row">
                  <div className="form_width">
                    <label htmlFor="name">I am a </label>
                    <select
                      name="cars"
                      id="cars"
                      className="form_ctr"
                      style={{ paddingTop: "8px" }}
                    >
                      <option value="Partner" selected="true">
                        Partner
                      </option>
                      <option value="Patient">Patient</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>
                  <div className="form_width">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form_ctr"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="from_row">
                  <div className="form_width">
                    <label htmlFor="name">Phone </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form_ctr"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div className="form_width">
                    <label htmlFor="name">Email </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form_ctr"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="from_submit">
                  <button className="form_btn">SUBMIT</button>
                  <p>Add pop up for OTP (for developer)</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p>Copyright © 2023 Jeevone</p>
    </footer>
  );
}

export default Footer;
