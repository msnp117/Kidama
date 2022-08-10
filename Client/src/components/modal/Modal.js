import { useEffect } from "react";
import ReactDOM from "react-dom";
import './modal.css'

const Modal = ({ open, children, onClose }) => {
  const portalNode = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(portalNode);

    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay position-fixed top-0 bottom-0 start-0 end-0">
        <div className="position-fixed top-50 start-50 translate-middle bg-light p-4">
          <button className="btn btn-transparent" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
          {children}
        </div>
      </div>
    </>,
    portalNode
  );
};

export default Modal;
