import React from 'react';
import '../styles/logIn.css'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { motion } from "framer-motion"
import { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import userActions from '../redux/actions/userActions';
import users from '../users.json'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault()
        const loggedUser = {
            email: e.target[0].value,
            password: e.target[1].value
        };

        let responseUser = users.filter(user => user.email === loggedUser.email && user.password === loggedUser.password) //en este caso, haremos las validaciones desde el frontend debido a la carencia de un backend. Idealmente, las respuestas de validación deberían obtenerse desde los controladores.
        console.log(responseUser)
        if (responseUser.length > 0) {
            toast.success(`Welcome, ${responseUser[0].first_name}!`)
            dispatch(userActions.userSignIn(responseUser[0]));
            navigate("/")
        } else {
            toast.error("Revise the provided information.")
        }

    }

    const loggedUser = useSelector(store => store)
    console.log(loggedUser)


    const [password, setPassword] = useState("")
    const [showInput, setShowInput] = useState(false);
    const showPassword = () => {
        setShowInput(!showInput)
    }



    const green = "#4d7c0f"
    return (
        <div className='container-max min-h-[80vh] w-full flex items-center justify-center'>
            <div className="body min-h-full flex items-center justify-center py-3 sm:px-6 lg:px-5">
                <motion.div animate={{ opacity: [0, 1] }} className="sign-in-card box-shadow py-5 px-8 space-y-5 rounded-lg">
                    <h2 className="heading mt-1 text-center text-3xl font-extrabold text-white">Log in</h2>



                    <div className="line-box flex items-center flex-col my-5">
                        <h4 className='mx-1 text-slate-200 my-2 text-center'>Welcome to Simple&Quick.</h4>
                        <p className='mx-1 text-slate-200 my-2 text-center'>Please, log in to enjoy our content!</p>
                        <div style={{ width: "100%", height: "1px" }} className="line my-5"></div>
                    </div>

                    <form onSubmit={handleSignIn} className="form" action="#" method="POST">
                        <div className="rounded-md ">
                            <div className="input-box w-full bg-[rgba(0,0,0,0)] border-b-2 border-[#f9ffe1] placeholder-slate-900 focus:outline-none focus:border-[#4d7c0f] flex justify-between items-center">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email address"
                                    className="w-full bg-transparent input"
                                />
                                <EmailIcon sx={{ color: green, width: ".8em" }} />
                            </div>
                            <div className="input-box w-full bg-[rgba(0,0,0,0)] border-b-2 border-[#f9ffe1] placeholder-slate-900 focus:outline-none  focus:border-[#4d7c0f] flex justify-between mb-4 items-center">
                                <label htmlFor="email-address" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onKeyUp={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type={showInput ? 'text' : 'password'}
                                    autoComplete="password"
                                    required
                                    placeholder="Password"
                                    className="w-full bg-transparent input"
                                />
                                {!password ? <KeyIcon sx={{ color: green, width: ".8em" }} /> :

                                    <span onClick={() => showPassword()}>
                                        {showInput ? <VisibilityOffIcon sx={{ color: green, width: ".8em", cursor: "pointer" }} /> : <RemoveRedEyeIcon sx={{ color: green, width: ".8em", cursor: "pointer" }} />}
                                    </span>
                                }
                            </div>
                        </div>

                        <div className="remember-me flex items-center justify-between flex-col pt-2">
                            <button type="submit" value="submit" className="btn btn2 btn-5 hover-border-11 sign-in-btn">
                                <span className='btn2'>Sign In</span>
                            </button>
                            <div className='flex flex-wrap justify-center items-center'>
                                <p className='text-sm mr-2 text-white'>Not registered yet?</p>
                                <p style={{ color: green }} className="font-bold text-center">Create an account <a href="#"><span className='underline'>here</span></a>!</p>
                                {/* CALL TO ACTION FOR FUTURE SIGN UP PAGE */}
                            </div>
                        </div>
                    </form>

                </motion.div>
            </div>
        </div>
    )
}