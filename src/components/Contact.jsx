import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";




const Contact = () => {
  return (
    <>
      <div className='container contact' id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icon'
        data-aos= "zoom-in"
        data-aos-duration="1000"
        >
          <a href='' target='blank' className='items'>
            <FaInstagram className='icons' />
          </a>
          <a href='' target='blank' className='items'>
            <CiFacebook className='icons' />
          </a>
          <a href='' target='blank' className='items'>
            <CiLinkedin className='icons' />
          </a>
          <a href='' target='blank' className='items'>
            <FaXTwitter className='icons' />
          </a>
          <a href='' target='blank' className='items'>
            <FaSquareGithub className='icons' />
          </a>
          <a href='' target='blank' className='items'>
            <SiGmail className='icons' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
