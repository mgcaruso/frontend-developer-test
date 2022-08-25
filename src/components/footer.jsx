import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import transpLogo from '../assets/logo-app-transparent.png'
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer-box w-full'>
            <div className='upper-footer'>
                <div className='first column'>
                    <img className="h-[4rem]" src={transpLogo} alt="Logo" />
                </div>
                <div className='second column'>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Employment</a></li>
                        <li><a href="#">Cookies preferences</a></li>
                    </ul>
                </div>
                <div className='third column'>
                    <ul>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href='mailto:simpleandquick@gmail.com'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='divider-box'>
                <div className='divider mb-3'></div>
            </div>
            <div className="lower-footer">
                <div className="icon-box">
                    <a href='#' className='border b-white rounded-full mx-2 '>
                        <BsFacebook className='icon' />
                    </a>
                    <a href='#' className='border b-white rounded-full mx-2 '>
                        <BsTwitter className='icon' />
                    </a>
                    <a href='#' className='border b-white rounded-full mx-2 '>
                        <BsLinkedin className='icon'  />
                    </a>
                    <a href='#' className='border b-white rounded-full mx-2 '>
                        <BsInstagram className='icon'/>
                    </a>
                </div>
                <p className='text-sm my-2'>©Copyright All rights reserved</p>
            </div>
        </div>
    )
}
