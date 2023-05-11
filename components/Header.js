import React from "react";
import {
  faChevronDown,
  faHandshake,
  faRightToBracket,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <nav className="container navbar">
        <div>
          <img src="./images/logo.png" alt="" className="logo" />
        </div>

        <div className="dropdown_button">
          <a href="#" className="btn" id="btn">
            <span className="me-2"> Signup / Login </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>

          <div className="dropdown" id="dropdown">
            <a href="#create">
              <FontAwesomeIcon icon={faUserDoctor} />
              <span>Doctor Login</span>
            </a>
            <a href="#draft">
              <FontAwesomeIcon icon={faRightToBracket} />
              <span>User Login</span>
            </a>
            <a href="#move">
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
