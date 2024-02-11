import React, { useState } from "react";
import "./Modal.css";
export const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "modal"}>
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our modal body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <h2>Footer</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
