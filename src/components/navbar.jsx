import React from 'react'
import '../styles/navbar.css'
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const links = [
        { name: "Home", to: "/" },
        { name: "Log In", to: "/login" }
    ];

    return (
        <>
            <div className='container-box'>
                <div className='menu-mobile'>
                    {open ? <BiX onClick={() => setOpen(false)} color="black" size={25} /> : <BiMenu onClick={() => setOpen(true)} color="black" size={25} />}
                </div>
                <div className='menu-desktop'>
                    {links.map((link, i) => <LinkRouter className="link" key={i} to={link.to}>{link.name}</LinkRouter>)}
                </div>
            </div>
            {open &&
                <div className='burger-menu'>
                    {links.map((link, i) => <LinkRouter className="link burger-link" key={i} to={link.to}>{link.name}</LinkRouter>)}
                </div>}
        </>

    )
}
