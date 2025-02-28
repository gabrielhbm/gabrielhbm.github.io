import React from 'react';
import '../styles/fixedLogo.css';

const FixedLogo = () => {
  return (
    <div className="fixed-logo">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
    </div>
  );
};

export default FixedLogo;