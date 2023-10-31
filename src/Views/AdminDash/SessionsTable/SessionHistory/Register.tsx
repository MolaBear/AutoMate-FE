import React from 'react';
 
function SessionRegister() {
  const openPdfInNewWindow = () => {
    const pdfPath = '/PowerSkills.pdf';
 
    const newWindow = window.open(pdfPath, '_blank');
 
    if (newWindow) {
      newWindow.focus(); // Focus on the new window
    } else {
      alert('The popup was blocked by your browser. Please allow popups and try again.');
    }
  };
 
  return (
    <div>
      <button onClick={openPdfInNewWindow}>View Register</button>
    </div>
  );
}
 
export default SessionRegister;