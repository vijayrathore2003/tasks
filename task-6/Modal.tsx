import type React from 'react';
import './modal.css'


type propType = {
  open: boolean, 
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

function Modal({ open, onClose, children }: propType) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={()=> onClose}>
      <div className="modal w-fit" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.Header = function ModalHeader({ children }: {children: React.ReactNode}) {
  return <div className="modal-header">{children}</div>;
};

type ModalBodyType = {
  children: React.ReactNode, 
  className: string
}

Modal.Body = function ModalBody({ children, className }: ModalBodyType) {
  return <div className={`modal-body ${className}`}>{children}</div>;
};

Modal.Footer = function ModalFooter({ children }: {children: React.ReactNode}) {
  return <div className="modal-footer w-full">{children}</div>;
};

export default Modal;
