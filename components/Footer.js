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
                    <li>
                      <a href="#download_btns">Jeevone Story</a>
                    </li>
                    <li>
                      <a href="#download_btns">Terms of usage</a>
                    </li>
                    <li>
                      <a href="#download_btns">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#download_btns">Refund Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="contact_list">
                  <h6>Contact Us</h6>
                  <ul>
                    <li>
                      <a href="#download_btns">Training (Coming Soon)</a>
                    </li>
                    <li>
                      <a href="#download_btns">Schedule a Demo</a>
                    </li>
                    <li>
                      <a href="#download_btns">Reach Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_icon_list">
                <h6>Connect</h6>
                <div className="icon_list">
                  <div className="icon_shape_footer">
                    <a href="#download_btns">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </div>
                  <div className="icon_shape_footer">
                    <a href="#download_btns">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                  <div className="icon_shape_footer">
                    <a href="#download_btns">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                  <div className="icon_shape_footer">
                    <a href="#download_btns">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
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
                      <option value="Partner" defaultValue={true}>
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
                      placeholder="Enter Name"
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
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="form_width">
                    <label htmlFor="name">Email </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form_ctr"
                      placeholder="Enter Email ID"
                    />
                  </div>
                </div>

                <div className="from_submit">
                  <button className="form_btn">SUBMIT</button>
                  {/* <p>Add pop up for OTP (for developer)</p> */}
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
