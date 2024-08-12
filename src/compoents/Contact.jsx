import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
const Contact = () => {
  return (
    <>
    <div className="Container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in-up"
      data-aos-duration="1000"
        >
        <a href='www.linkedin.com/in/zeeshan-asghar29898' target='_blank' className="items">
            <FaLinkedin className='icons' />
        </a>
        <a href='https://github.com/zeeshanmangat' className="items">
            <FaGithub className='icons'/>
        </a>
        <a href='https://www.facebook.com/zeeshan.mangat.71?mibextid=ZbWKwL' className="items">
            <FaFacebook className='icons'/>
        </a>
        <a href='mailto:zeeshanmangat237@gmail.com' className="items">
        <SiGmail className='icons'/>
        </a>
        <a href='03461014651' className="items">
            <IoIosContact className='icons'/>
        </a>
        </div>
    </div>
    </>
  )
}

export default Contact
