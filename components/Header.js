import React from "react";
import {
  faChevronDown,
  faHandshake,
  faRightToBracket,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useRef, useState } from "react";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);

  return (
    <header>
      <nav className="container navbar">
        <div>
          <img src="./images/logo.png" alt="" className="logo" />
        </div>

        <div className="dropdown_button">
          {/* <button
            onClick={() => setShowDropdown((b) => !b)}
            className="btn"
            ref={dropdown}
          >
            <span className="me-2"> Signup / Login </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={showDropdown ? "arrow" : ""}
            />
          </button> */}

          <div className={"dropdown " + (showDropdown ? "show" : "")}>
            <a href="#download_btns">
              <FontAwesomeIcon icon={faUserDoctor} />
              <span>Doctor Login</span>
            </a>
            <a href="#download_btns">
              <FontAwesomeIcon icon={faRightToBracket} />
              <span>User Login</span>
            </a>
            <a href="#download_btns">
              <FontAwesomeIcon icon={faHandshake} />
              <span>Partners Login</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
