import React, { FC } from "react";

type AlertProps = {
    message: string,
    onClose: () => void
}

const Alert: FC<AlertProps> = ({message, onClose}) => {
    return (
        <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="">
          <p className="">{message}</p>
        </header>
        <footer className="modal-card-foot">
          <button className="button" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
    );
}

export default Alert;