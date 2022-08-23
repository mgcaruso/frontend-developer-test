import React from 'react'
import '../styles/navbar.css'
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import toast, { Toast } from 'react-hot-toast';

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const loggedUser = useSelector(store => store.usersReducer.loggedUser)

    const links = [
        { name: "Home", to: "/" },
        { name: !loggedUser ? "Log In" : "Sign Out", to: !loggedUser ? "/login" : "/" }
    ]

    const handleSignOut = () => {

        dispatch({
            type: 'USER',
            payload: null
        })
        localStorage.removeItem('user')
        navigate("/");
        toast.success("You have signed out!")
    }


    return (
        <>
            <div className='container-box'>
                <div className='menu-mobile'>
                    {open ? <BiX onClick={() => setOpen(false)} color="black" size={25} /> : <BiMenu onClick={() => setOpen(true)} color="black" size={25} />}
                </div>
                <div className='menu-desktop'>
                    {links.map((link, i) =>
                        <LinkRouter className="link" key={i} to={link.to}>
                            <button onClick={loggedUser && handleSignOut}>
                                {link.name}
                            </button>
                        </LinkRouter>
                    )}
                </div>
            </div>
            {open &&
                <div className='burger-menu'>
                    {links.map((link, i) => <LinkRouter className="link burger-link" key={i} to={link.to}>{link.name}</LinkRouter>)}

                </div>
            }
        </>

    )
}
