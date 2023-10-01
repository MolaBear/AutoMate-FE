// SignaturePopover.js
import React from 'react';
import { Popover } from 'react-bootstrap';
// import SignatureCanvas from 'react-signature-canvas';

function SignaturePopover({ show, onClose }) {
  const signatureRef = React.useRef();



  const handleSave = () => {
    onClose(); // Close the popover after saving
  };

  return (
    <Popover show={show} placement="top">
      
    </Popover>
  );
}

export default SignaturePopover;