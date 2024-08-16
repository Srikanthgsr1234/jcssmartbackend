import React, { useState, useEffect } from 'react';
import { BsInstagram, BsTwitterX, BsFacebook, BsLinkedin } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import jcsGroupImage from '../Assets/jcsgr.png';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if the screen size is less than 850px
  const isMobile = windowWidth < 850;

  // Define styles for responsive adjustments
  const responsiveTextStyle = isMobile ? 'text-md' : 'text-lg';
  const responsiveIconStyle = isMobile ? 'w-8 h-8' : 'w-10 h-10';

  return (
    <div className="bg-blue-950 mt-16">
      <motion.div
        className="flex items-center justify-center pt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img className="h-20 w-auto rounded-lg" src={jcsGroupImage} alt="JCS Group" />
      </motion.div>
      
      <motion.div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center pt-8`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <NavLink to="/about-us" className={`px-6 text-white font-semibold ${responsiveTextStyle} ${isMobile ? 'pb-6' : ''}`}>
          About Us
        </NavLink>
        <NavLink to="/contact-us" className={`px-6 text-white font-semibold ${responsiveTextStyle} ${isMobile ? 'pb-6' : ''}`}>
          Contact Us
        </NavLink>
      </motion.div>

      <motion.div
        className="flex justify-center space-x-10 py-8 border-b border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="https://www.facebook.com/jcserviceshub" target="_blank" rel="noopener noreferrer" className="hover:text-[#2f29d6]">
          <BsFacebook className={`${responsiveIconStyle}`} />
        </a>
        <a href="https://www.instagram.com/jcs.hub/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d62976]">
          <BsInstagram className={`${responsiveIconStyle}`} />
        </a>
        <a href="https://www.linkedin.com/company/jcs-hub/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5]">
          <BsLinkedin className={`${responsiveIconStyle}`} />
        </a>
        <a href="https://x.com/jcshub?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#00acee]">
          <BsTwitterX className={`${responsiveIconStyle}`} />
        </a>
      </motion.div>
      
      <motion.div
        className="py-8 text-gray-300 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h1 className={`${responsiveTextStyle}`}>©2020 JCS Global. All Rights Reserved | Caution Notice</h1>
      </motion.div>
    </div>
  );
};

export default Footer;
