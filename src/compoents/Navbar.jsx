import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoIosContact } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="Container nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left">Zeeshu Coder</div>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <div className={`nav_links ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="nav_item">Home</a>
        <a href="#experience" className="nav_item">Experience</a>
        <a href="#skills" className="nav_item">Skills</a>
        <a href="#project" className="nav_item">Project</a>
        <a href="#contact" className="nav_item">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;


