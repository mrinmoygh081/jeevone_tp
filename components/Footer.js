import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer({ setIsPopUp }) {
  const [form, setForm] = useState({
    myself: "Partner",
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async () => {
    setIsLoading(true);
    const { myself, name, email, phone } = form;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      myself,
      name,
      phone,
      email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/send`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result?.message);
        setForm({
          myself: "Doctor",
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => alert("Something went wrong!"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="footer_text">
              <div className="footer_logo">
                <img src="./images/footer_logo.png" alt="" />
              </div>
              {/* <div className="footer_list">
                <div className="about_list">
                  <h6>About Us</h6>
                  <ul>
                    <li>
                      <a href="#download_btns">Jeevone Story</a>
                    </li>
                    <li>
                      <a href="/terms">Terms of usage</a>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy Policy</Link>
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
                      <span onClick={() => setIsPopUp(true)}>
                        Schedule a Demo
                      </span>
                    </li>
                    <li>
                      <span onClick={() => setIsPopUp(true)}>Reach Us</span>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="footer_icon_list">
                <h6>Connect</h6>
                <div className="icon_list">
                  <div className="icon_shape_footer">
                    <a
                      href="https://www.facebook.com/people/Jeevone-Care/100095415790862/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </div>
                  <div className="icon_shape_footer">
                    <a href="https://www.instagram.com/jeevone_care/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className="form_box" id="registerform">
              <div style={{ width: "100%" }}>
                <h4>Reach Us</h4>
                <div className="from_row">
                  <div className="form_width">
                    <label htmlFor="name">I am a </label>
                    <select
                      name="myself"
                      id="myself"
                      className="form_ctr"
                      style={{ paddingTop: "8px" }}
                      onChange={handleChange}
                    >
                      <option value="Doctor" defaultValue={true}>
                        Doctor
                      </option>
                      <option value="Partner">Partner</option>
                      <option value="Consumer">Consumer</option>
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
                      value={form?.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="from_row">
                  <div className="form_width">
                    <label htmlFor="phone">Phone </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form_ctr"
                      placeholder="Enter Phone Number"
                      value={form?.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_width">
                    <label htmlFor="email">Email </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form_ctr"
                      placeholder="Enter Email ID"
                      value={form?.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="from_submit">
                  <button
                    type="button"
                    className="form_btn"
                    onClick={submitHandler}
                  >
                    {isLoading ? "Loading..." : "SUBMIT"}
                  </button>
                  {/* <p>Add pop up for OTP (for developer)</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p>Copyright © 2024 Jeevone</p>
    </footer>
  );
}

export default Footer;
