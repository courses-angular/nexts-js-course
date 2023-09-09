import React, { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";

interface TodoProps {
  id?: number;
  text: string;
}

const Todo = ({ text }: TodoProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal onCancel={handleCloseModal} onConfirm={handleCloseModal} />
      )}
      {showModal && <Overlay onClick={handleCloseModal} />}
    </div>
  );
};
export default Todo;
