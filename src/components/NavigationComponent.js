import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavPopUp from "./NavPopUp";
import MyCss from "../styles/MyCss.css";
function NavigationComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowModal(!showModal);
  };
  const closeModal = () => {
    console.log("close " + showModal);
    setShowModal(!showModal);
  };
  const scrollToElement = (id) => {
    console.log("Here");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="navbar">
        <ul>
          <a className="nameLogo" onClick={scrollToElement("home")}>
            Gopal
          </a>
        </ul>
        <ul className="menu">
          <li>
            <a onClick={() => scrollToElement("abouot")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToElement("skill")}>Skill</a>
          </li>
          <li>
            <a onClick={() => scrollToElement("myProjects")}>My Project</a>
          </li>
          <li>
            <a onClick={() => scrollToElement("contact")}>Contact</a>
          </li>
        </ul>

        <ul className="hamburgur">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#17377D"
              class="bi bi-list"
              viewBox="0 0 16 16"
              onClick={toggleMenu}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </li>
        </ul>
      </div>
      {!showModal && <NavPopUp data={true} onClose={closeModal} />}
    </nav>
  );
}
export default NavigationComponent;
