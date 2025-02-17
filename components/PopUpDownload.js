import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PopUpDownload = ({ isPopUp, setIsPopUp }) => {
  return (
    <>
      {isPopUp && (
        <div
          className="popup_overlay download"
          onClick={(e) => {
            if (e.target.classList.contains("popup_overlay")) {
              setIsPopUp(false);
            }
          }}
        >
          <div className="form_popup">
            <form className="form_box">
              <div className="close" onClick={() => setIsPopUp(false)}>
                <IoMdCloseCircleOutline />
              </div>
              <div style={{ width: "100%" }}>
                <div className="icon_box">
                  <h5>Download now</h5>
                  <div className="store_logo">
                    <a href="https://apps.apple.com/in/app/jeevone/id6471591844" target="_blank">
                      <img src="./images/app-store.png" alt="Jeevone Appstore" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.jeevone.consumerapp&pcampaignid=web_share" target="_blank">
                      <img src="./images/play-store.png" alt="Jeevone Playstore" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpDownload;
