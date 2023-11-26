import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PopUp = ({ isPopUp, setIsPopUp }) => {
  const [form, setForm] = useState({
    myself: "",
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

    await fetch(
      "https://jeevone-mail.onrender.com/api/v1/send/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        alert("Mail has been sent successfully");
        setForm({
          myself: "",
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => alert("Something went wrong!"));

    setIsLoading(false);
  };

  return (
    <>
      {isPopUp && (
        <div className="form_popup">
          <form className="form_box">
            <div className="close" onClick={() => setIsPopUp(false)}>
              <IoMdCloseCircleOutline />
            </div>
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
                    <option value="Partner" defaultValue={true}>
                      Partner
                    </option>
                    <option value="Consumer">Consumer</option>
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
      )}
    </>
  );
};

export default PopUp;
