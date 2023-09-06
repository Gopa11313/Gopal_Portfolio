import React, { useState } from 'react';

function NavPopUp() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-header">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
          </div>
          <div className="modal-content">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div className="modal-footer">
            &copy; 2023 Your Company Name
          </div>
        </div>
      )}
    </div>
  );
}

export default NavPopUp;
