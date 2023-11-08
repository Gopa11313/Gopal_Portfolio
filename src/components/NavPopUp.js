import React, { useEffect, useState } from "react";
import MyCss from "../styles/MyCss.css";
import { Link } from "react-router-dom";
function NavPopUp({ data, onClose }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(data);
  }, []);

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#ffffff"
              class="bi bi-x-square-fill"
              viewBox="0 0 16 16"
              onClick={onClose}
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          </div>
          <div className="modal-content">
            <ul>
              <li>
                <a to="/about" onClick={onClose}>
                  About
                </a>
              </li>
              <li>
                <a to="/project" onClick={onClose}>
                  My Project
                </a>
              </li>
              <li>
                <a to="/contact" onClick={onClose}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="modal-footer">&copy; 2023 Your Company Name</div>
        </div>
      )}
    </div>
  );
}

export default NavPopUp;
