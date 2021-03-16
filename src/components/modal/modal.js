import React, { useEffect } from "react";

const Modal = ({ isShown, closeModal, children }) => {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      closeModal();
    }
  };

  if (!isShown) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="modal-footer">
          <button onClick={closeModal} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
