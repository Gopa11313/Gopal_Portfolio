import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavPopUp from "./NavPopUp";
import MyCss from "../styles/MyCss.css";
function NavigationComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal,setShowModal] = useState(false)
  useEffect(() => {
    const initialMenuVisibility = isHamburgerMenuVisible();
    console.log("this is visibility: " + initialMenuVisibility);
    if(initialMenuVisibility){
        setIsOpen(false);
    }
    else{
        setIsOpen(!isOpen);
    }
  },[]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowModal()
  
  };
  function isHamburgerMenuVisible() {
    const hamburgerMenu = document.querySelector(".hamburgur"); 
    if (hamburgerMenu) {
      const computedStyle = window.getComputedStyle(hamburgerMenu);
      return computedStyle.getPropertyValue("display") !== "none"; 
    }
    return false; 
  }

  return (
    <nav>
      <div className="navbar">
        <ul>
          <Link to="/" className="logo">
            Gopal
          </Link>
        </ul>
          <ul className="menu">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">My Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

        <ul className="hamburgur" onClick={toggleMenu}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#ffffff"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavigationComponent;
