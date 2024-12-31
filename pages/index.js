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

export default function Home() {
  const [isPopUp, setIsPopUp] = useState(false);
  return (
    <>
      <Header />
      <main>
        <section className="banner">
          <div className="banner_section bg_lifeline">
            <div className="content">
              <h1>LIFE SIMPLIFIED</h1>
              <p>A personalized platform that understands your needs</p>
            </div>
            {/* <div className="swiper"> */}
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {/* <div className="swiper-wrapper"> */}
              <SwiperSlide className="swiper-slide">
                {/* <div className="swiper-slide swiper-slide--one position-relative"> */}
                <img
                  src="/images/hero_slider/img1.png"
                  alt=""
                  className="banner_img"
                />
                {/* <div>
                  <h2>Medical Records</h2>
                  <p>Simple, Smart & Seamless</p>
                  <a href="#download_btns" target="_blank">
                    explore
                  </a>
                </div> */}
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/hero_slider/img2.png"
                  alt=""
                  className="banner_img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/hero_slider/img3.png"
                  alt=""
                  className="banner_img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/hero_slider/img4.png"
                  alt=""
                  className="banner_img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/hero_slider/img5.png"
                  alt=""
                  className="banner_img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/hero_slider/img6.png"
                  alt=""
                  className="banner_img"
                />
              </SwiperSlide>
            </Swiper>
            {/* </div> */}
          </div>
        </section>

        <section id="download_btns" className="float">
          <div className="icon_box">
            <h5>Download now</h5>
            <div className="store_logo">
              <a href="#download_btns">
                <img src="./images/app-store.png" alt="Jeevone Appstore" />
              </a>
              <a href="#">
                <img src="./images/play-store.png" alt="Jeevone Playstore" />
              </a>
            </div>
          </div>
        </section>

        <section className="container green_zone_section px-md-5">
          <div className="green_zone_shadow">
            <div className="text-center green_zone_heading">
              <h2>Are you in the green zone?</h2>
              <p>Find out now!</p>
              <hr className="w_90 mx-auto mb-5" />
            </div>
            <video width="100%" autoPlay muted loop>
              <source src="/images/video.mp4" type="video/mp4" />
            </video>
            {/* <img src="./images/video.gif" alt="" className="w-100" /> */}
          </div>
        </section>

        <section className="tab_section">
          <div className="container px-3 px-lg-5">
            <div className="row">
              <div className="col-12">
                <div className="section_links">
                  <div className="warpper">
                    <input
                      className="radio"
                      id="one"
                      name="group"
                      type="radio"
                    />
                    <input
                      className="radio"
                      id="two"
                      name="group"
                      type="radio"
                    />
                    <input
                      className="radio"
                      id="three"
                      name="group"
                      type="radio"
                      defaultChecked
                    />
                    <input
                      className="radio"
                      id="four"
                      name="group"
                      type="radio"
                    />
                    <input
                      className="radio"
                      id="five"
                      name="group"
                      type="radio"
                    />
                    <input
                      className="radio"
                      id="six"
                      name="group"
                      type="radio"
                    />
                    <div className="tabs">
                      <label className="tab" id="one-tab" htmlFor="one">
                        <img src="/images/icons/img6.png" alt="" />
                        <p>Weight</p>
                      </label>
                      <label className="tab" id="two-tab" htmlFor="two">
                        <img src="/images/icons/img5.png" alt="" />
                        <p>Suger Level</p>
                      </label>
                      <label className="tab" id="three-tab" htmlFor="three">
                        <img src="/images/icons/img4.png" alt="" />
                        <p>BMI</p>
                      </label>
                      <label className="tab" id="four-tab" htmlFor="four">
                        <img src="/images/icons/img3.png" alt="" />
                        <p>BP</p>
                      </label>
                      <label className="tab" id="five-tab" htmlFor="five">
                        <img src="/images/icons/img2.png" alt="" />
                        <p>Water Intake</p>
                      </label>
                      <label className="tab" id="six-tab" htmlFor="six">
                        <img src="/images/icons/img1.png" alt="" />
                        <p>Medication</p>
                      </label>
                    </div>
                    <div className="panels">
                      <div className="panel" id="one-panel">
                        <div className="panel-title">
                          <a href="#download_btns">
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <span className="px-2">Check Weight</span>
                        </div>
                        <p className="pl_30">What matters to you</p>
                      </div>
                      <div className="panel" id="two-panel">
                        <div className="panel-title">
                          <a href="#download_btns">
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <span className="px-2">Check Sugar Level</span>
                        </div>
                        <p className="pl_30">What matters to you</p>
                      </div>
                      <div className="panel" id="three-panel">
                        <div className="panel-title">
                          <a href="#download_btns">
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <span className="px-2">Track</span>
                        </div>
                        <p className="pl_30">What matters to you</p>
                      </div>
                      <div className="panel" id="four-panel">
                        <div className="panel-title">
                          <a href="#download_btns">
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <span className="px-2">Check BP</span>
                        </div>
                        <p className="pl_30">What matters to you</p>
                      </div>
                      <div className="panel" id="five-panel">
                        <div className="panel-title">
                          <a href="#download_btns">
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <span className="px-2">Check Water Intake</span>
                        </div>
                        <p className="pl_30">What matters to you</p>
                      </div>
                      <div className="panel" id="six-panel">
                        <div className="panel-title">
                          <a href="#download_btns">
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                          <span className="px-2">Medication</span>
                        </div>
                        <p className="pl_30">What matters to you</p>
                      </div>
                    </div>
                  </div>
                  <div className="section_links_btn">
                    <a href="#download_btns" className="tab_button">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my_corner d-sm-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 text-center">
                <div className="Reminder_box_heading">
                  <img
                    src="/images/my_corner_icon.png"
                    alt="testimonial"
                    className="img-fluid"
                    style={{ width: "30px", height: "30px", marginTop: "10px" }}
                  />
                  <div className="text-start">
                    <h2>My Corner</h2>
                    <p>Your interests in one place</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div className="text-center">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="my_corner_card_1">
                        <img src="/images/myCorner-1.png" alt="" />
                        <div className="card_text">
                          <h2>News heading here</h2>
                          <p>subcopy goes here subcopy goes here</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="my_corner_card_2">
                        <img src="/images/myCorner-2.png" alt="" />
                        <div className="card_text2">
                          <a href="#download_btns">Special Offer</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#download_btns" className="tab_button mt-25">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reminder_section">
          <div className="container long_card">
            <div>
              <div className="Reminder_box_heading">
                <img
                  src="/images/Reminders-icon.png"
                  alt="testimonial"
                  className="img-fluid"
                />
                <h2>Reminders</h2>
              </div>
              <p className="text-center">Keep yourself updated</p>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-md-3 col-6 reminder">
                  <a href="#download_btns">
                    <div className="Reminder_box">
                      <img src="/images/Appointments.png" alt="" />
                    </div>
                    <h6>Appointments</h6>
                  </a>
                </div>
                <div className="col-md-3 col-6 reminder">
                  <a href="#download_btns">
                    <div className="Reminder_box">
                      <img src="/images/Re-order-Medicines.png" alt="" />
                    </div>
                    <h6>Re-order Medicines</h6>
                  </a>
                </div>
                <div className="col-md-3 col-6 reminder">
                  <a href="#download_btns">
                    <div className="Reminder_box">
                      <img
                        src="/images/Vaccinations.png"
                        alt=""
                        style={{ transform: "translateX(6px)" }}
                      />
                    </div>
                    <h6>Vaccinations</h6>
                  </a>
                </div>
                <div className="col-md-3 col-6 reminder">
                  <a href="#download_btns">
                    <div className="Reminder_box">
                      <img src="/images/Renewals.png" alt="" />
                    </div>
                    <h6>Renewals</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shop_section mb-5">
          <div className="mb-5">
            <div className="shop_box_heading">
              <img
                src="/images/shop-icon.png"
                alt="shop"
                className="shop-icon"
              />
              <h2>Shop</h2>
            </div>
            <p className="text-center">A store at your fingertips</p>
          </div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-4 card1 position-relative">
                <div>
                  <h2>Doctor Appointments</h2>
                  <p>
                    Stay in peak mental and physical condition with regular
                    appointments
                  </p>
                </div>

                <div className="position-relative">
                  <div className="position-relative">
                    <img src="/images/doctor.png" alt="" />
                    <div className="overlay"></div>
                  </div>
                  <a href="#download_btns" className="card_button">
                    Book Now
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 card1 position-relative">
                <div>
                  <h2>Buy Medicines</h2>
                  <p>Your own digital pharmacy</p>
                </div>

                <div className="position-relative">
                  <div className="position-relative">
                    <img src="/images/medicines.png" alt="" />
                    <div className="overlay"></div>
                  </div>
                  <a href="#download_btns" className="card_button">
                    Book Now
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 card1 position-relative">
                <div>
                  <h2>Schedule Tests & Scans</h2>
                  <p>
                    Seamlessly schedule all types of scans and
                    <br />
                    diagnostic tests
                  </p>
                </div>

                <div className="position-relative">
                  <div className="position-relative">
                    <img src="/images/tests.png" alt="" />
                    <div className="overlay"></div>
                  </div>
                  <a href="#download_btns" className="card_button">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-12 col-md-6 col-lg-4 card1 position-relative">
                <div>
                  <h2>Home Care Facility</h2>
                  <p>Caring for all your needs from the comfort of your home</p>
                </div>

                <div className="position-relative">
                  <div className="position-relative">
                    <img src="/images/home-care.png" alt="" />
                    <div className="overlay"></div>
                  </div>
                  <a href="#download_btns" className="card_button">
                    Book Now
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 card1 position-relative">
                <div>
                  <h2>Medical Equipment for Hire</h2>
                  <p>Get the equipment you need easily and quickly</p>
                </div>

                <div className="position-relative">
                  <div className="position-relative">
                    <img src="/images/Medical-Equipment.png" alt="" />
                    <div className="overlay"></div>
                  </div>
                  <a href="#download_btns" className="card_button">
                    Book Now
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 card1 position-relative">
                <div>
                  <h2>Lifestyle</h2>
                  <p>Helping you stay active all the time</p>
                </div>

                <div className="position-relative">
                  <div className="position-relative">
                    <img src="/images/lifestyle.png" alt="" />
                    <div className="overlay"></div>
                  </div>
                  <a href="#download_btns" className="card_button">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container about_heading my-5">
            <img
              src="/images/doctor-icon.png"
              alt="doctor"
              className="img-fluid"
            />
            <h2>Are You A Doctor?</h2>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 about_text">
                <h2>
                  We’ve made everything <br />
                  simple for you
                </h2>
                <p>Digitize your clinic today!</p>
                <a href="#download_btns" className="about_button">
                  Register now
                </a>
              </div>
              <div className="col-12 col-md-6">
                <img src="/images/about.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="about_section">
          <h2>ABOUT US</h2>
          <div className="about_1st">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <h3>Beginning</h3>
                  <p className="firstparagrph">
                    Simple can be sophisticated.This idea marked the beginning
                    of an effort to create a platform that takes care of all
                    your health needs and requirements through an interface that
                    is modern and functional.
                  </p>
                  <p>
                    The genesis was the need for availability, accessibility,
                    and convenience which could be leveraged through technology
                    using integrated, innovative, and simple solutions that are
                    straightforward and easy to use.
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <img src="/images/The-begining.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="about_2st">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <img
                    src="/images/Vision 2.png"
                    alt=""
                    className="img_trans_x"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <h3>Vision</h3>
                  <p className="firstparagrph">
                    Our vision is to keep moving forward and keep evolving in
                    pursuit of genuinely human-centric solutions using
                    cutting-edge innovation.We want to be synonymous with
                    new-age ingenuity that enhances the lives of people around
                    the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about_2st">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <h3>solution</h3>
                  <p className="firstparagrph">
                    As technology becomes more sophisticated, the element of
                    simplicity slowly erodes. This is especially true in the
                    healthcare industry. We understand that you expect
                    simplicity, functionality, convenience, and style in a
                    single package. We are committed to solving this problem by
                    analysing our dynamic world and evaluating the elements of
                    life through a novel and creative pair of eyes.
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <img src="/images/solutions.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="about_2st">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <img src="/images/company.png" alt="" />
                </div>
                <div className="col-12 col-md-6">
                  <h3>Company</h3>
                  <p className="firstparagrph">
                    The culmination of this thought process was Jeevone;an
                    interconnected and integrated interface that enables
                    effective collaboration and communication for all the
                    stakeholders involved in the healthcare industry. It is a
                    small step in a massive endeavor to accomplish our mission
                    of transforming and streamlining the lives of millions of
                    individuals worldwide.
                  </p>
                  <p>
                    When designing Jeevone, we set out to streamline the most
                    mundane, yet important, aspects of healthcare by reducing
                    complexities and focusing on ease of use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about_2st">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-5">
                  <h3>design</h3>
                  <p className="firstparagrph">
                    Jeevone is designed for the world and is universal. This is
                    the first step in a journey of constant evolution and
                    innovation.At Jeevone, change is the only constant.
                  </p>
                </div>
                <div className="col-12 col-md-7">
                  <img
                    src="/images/design.png"
                    alt=""
                    className="img_trans_x_opp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="Creators_section">
          <div className="container">
            <h2>CREATORS CORNER</h2>
            <div className="creator_cards">
              <h3>Bridging the Road From Concept to Design</h3>
              <div className="creator_card_img">
                <img src="/images/creators/img1.png" alt="" />
              </div>
            </div>
            <div className="creator_cards creator_cards2 pt-5">
              <h3 className="pt-5">
                Bridging the Road From Design to Development
              </h3>
              <div className="creator_card_img">
                <img src="/images/creators/img2.png" alt="" />
              </div>
            </div>
            <div className="creator_cards creator_cards3 pt-5">
              <h3 className="pt-5">Connecting the Dots</h3>
              <div className="creator_card_img">
                <img src="/images/creators/img3.png" alt="" />
              </div>
            </div>
          </div>
        </section> */}

        <section className="testimonial">
          <div className="testimonial_heading">
            <img
              src="/images/testimonial.png"
              alt="testimonial"
              className="img-fluid"
            />
            <h2>Testimonials</h2>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 white_box"></div>
              <div className="col-8 blue_box"></div>
            </div>
          </div>
          <div className="container review_box">
            <div className="review_box_alignment">
              <div className="testimonial_box1">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="icon_shape icon_shape_res">
                  <a href="#download_btns">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </div>
              <div className="testimonial_box_blue">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="icon_shape">
                  <a href="#download_btns">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </div>
              <div className="testimonial_box2">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="icon_shape icon_shape_res">
                  <a href="#download_btns">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PopUp isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
      <Footer setIsPopUp={setIsPopUp} />
    </>
  );
}
