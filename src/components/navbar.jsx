import React from 'react'
import '../styles/navbar.css'
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import UnknownUser from '../assets/unknown_user.jpg'
import userActions from '../redux/actions/userActions';


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
        dispatch(userActions.userSignOut());
        navigate("/");
        toast.success("You have signed out!");
    }

    return (
        <>
            <div className='container-box'>
                <div className='menu-mobile'>
                    {open ? <BiX onClick={() => setOpen(false)} color="white" size={25} /> : <BiMenu onClick={() => setOpen(true)} color="white" size={25} />}
                    <div>
                        <img className="avatar h-[2.7rem] w-[2.7rem] rounded-full object-cover" src={loggedUser?.avatar || UnknownUser} alt={loggedUser ? "userAvatar" : "unknown user"} />
                    </div>
                </div>
                <div className='menu-desktop'>
                    {
                        links.map((link, i) => {
                            return (
                                link.name === "Sign Out" ?
                                    <button className='mx-4' key={i} onClick={loggedUser && link.name !== "Home" && handleSignOut}>
                                        {link.name}
                                    </button>
                                    :
                                    <LinkRouter className="mx-4" key={i} to={link.to}>{link.name}</LinkRouter>
                            )
                        })
                    }

                    <div>
                        <img className="avatar h-[2.3rem] w-[2.3rem] rounded-full object-cover" src={loggedUser?.avatar || UnknownUser} alt="Unknown_user" />
                    </div>
                </div>
            </div>
            {open &&
                <div className='burger-menu'>
                    {links.map((link, i) => <LinkRouter className="link burger-link my-3" key={i} to={link.to}>{link.name}</LinkRouter>)}
                </div>
            }
        </>

    )
}
