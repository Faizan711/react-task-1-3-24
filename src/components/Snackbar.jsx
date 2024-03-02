import React, { useState, useEffect } from 'react';
import '../App.css'

function Snackbar({ message }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(true);
  }, [message]);

  return (
    isOpen && (
      <div className="snackbar">
        <span>{message}</span>
        <button onClick={handleClose}>Close</button>
      </div>
    )
  );
}

export default Snackbar;