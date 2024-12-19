import Header from "@/components/Header";

import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import PopUp from "@/components/PopUp";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isPopUp, setIsPopUp] = useState(false);
  return (
    <>
      <section className="my-5">
        <div className="d-flex justify-content-center mb-5 mb-md-0">
          <Link href={"/"}>
            <img src="./images/logo.png" alt="" className="logo" />
          </Link>
        </div>
        <div
          className="container about_heading"
          style={{ justifyContent: "center" }}
        >
          <img
            src="/images/doctor-icon.png"
            alt="doctor"
            className="img-fluid"
          />
          <h2>Are You A Doctor?</h2>
        </div>
        <div className="container-fluid pb-5">
          <div className="row align-items-center rev_mob">
            <div className="col-12 col-md-6 about_text pt-md-0 pt-3">
              <h2>
                We’ve made everything <br />
                simple for you
              </h2>
              <p>Digitize your clinic today!</p>
              {/* <button onClick={() => setIsPopUp(true)} className="about_button">
                Register now
              </button> */}
              <a href="#registerform" className="about_button">
                Register now
              </a>
            </div>
            <div className="col-12 col-md-6">
              <img src="/images/about.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <PopUp isPopUp={isPopUp} setIsPopUp={setIsPopUp} /> */}
      <Footer setIsPopUp={setIsPopUp} />
    </>
  );
}
