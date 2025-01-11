import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { registerEnquiryHandler } from "@/services/APIs";

const PopUp = ({ isPopUp, setIsPopUp }) => {
  let initialValue = {
    myself: "Doctor",
    name: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value || "" });
  };

  const submitHandler = async () => {
    setIsLoading(true);
    const { name, email, phone } = form;
    if (
      !name ||
      name === "" ||
      !email ||
      email === "" ||
      !phone ||
      phone === ""
    ) {
      setIsLoading(false);
      return toast.error("Please enter all required fields.");
    }
    let res = await registerEnquiryHandler(form);
    if (res?.status) {
      swal({
        title: "Thank You!",
        text: res?.message,
        icon: "success",
      });
      setForm(initialValue);
    } else {
      swal({
        title: "Sorry for the inconvience!",
        text: res?.message,
        icon: "failure",
      });
    }
    setIsLoading(false);
    setIsPopUp({ val: false, name: "" });
  };

  return (
    <>
      {isPopUp.val && (
        <div
          className="popup_overlay"
          onClick={(e) => {
            if (e.target.classList.contains("popup_overlay")) {
              setIsPopUp({ val: false, name: "" });
            }
          }}
        >
          <div className="form_popup">
            <form className="form_box">
              <div
                className="close"
                onClick={() =>
                  setIsPopUp({
                    val: false,
                    name: "",
                  })
                }
              >
                <IoMdCloseCircleOutline />
              </div>
              <div style={{ width: "100%" }}>
                <h4>{isPopUp.name ? isPopUp.name : "Reach Us"}</h4>
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
                    disabled={isLoading}
                    onClick={submitHandler}
                  >
                    {isLoading ? "Loading..." : "SUBMIT"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
