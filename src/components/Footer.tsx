import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center bg-white ">
      © {new Date().getFullYear()} PLUMS. All rights reserved.
    </footer>
  );
};

export default Footer;
