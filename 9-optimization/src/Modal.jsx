import { createPortal } from "react-dom";

const Modal = ({ children, id, className }) => {
  return createPortal(
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 h-screen w-screen bg-gray-200/70 flex justify-center items-center ${className}`}
      id={id}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
