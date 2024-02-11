import React, { useState } from "react";
import { Modal } from "./Modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={handleToggle}>open Modal</button>
      {showModal && (
        <Modal
          body={<div>cutomized body</div>}
          header={<div>cutomized Header</div>}
          footer={<div>cutomized Footer</div>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalTest;
