import React from "react";

interface ModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal = ({ onCancel, onConfirm }: ModalProps) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
};
export default Modal;
