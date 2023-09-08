import React from 'react';

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px', /* Adjust based on your design preference */
};

const spanStyle: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <span style={spanStyle}>Our Website</span>
      <span>|</span>
      <span style={spanStyle}>License</span>
      <span>|</span>
      <span style={spanStyle}>Join Discord</span>
    </footer>
  );
};

export default Footer;
