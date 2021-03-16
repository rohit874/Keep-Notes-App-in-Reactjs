import React, { useState } from 'react';
import Popup from './Popup';
 
function Model() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Model;