import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/home.css'
import data from '../content.json'
import { useDispatch, useSelector } from 'react-redux'
import categoriesActions from '../redux/actions/categoriesActions'
import banner from '../assets/banner.mp4'
import logo from '../assets/logo-app.png'

export default function Home() {
    const dispatch = useDispatch();
    let array = [];
    for (let object of data) {
        console.log(object.category)
        if (typeof object.category === typeof "string") {
            array.push(object.category)
        } else {
            for (let category of object.category) {
                array.push(category)
            }
        }
    }
    let unique = array.reduce((unique, index) => {
        if (!unique.some(obj => obj.name === index.name && obj.picture === index.picture)) {
            unique.push(index);
        }
        return unique;
    }, []);
    dispatch(categoriesActions.setCategories(unique))
    const loggedUser = useSelector(store => store.usersReducer.loggedUser)
    return (
        <div className='body min-h-[80vh]'>
            <div className='full-container h-full min-h-[23rem]'>
                <video className='video-banner' src={banner} autoPlay loop muted ></video>
                <div className='home-banner'>
                    <h1 className='title text-7xl text-red-900 flex flex-col dropshadow-lg mx-2'>
                        <span className='text-white'>Simple</span>
                        <span className='text-white'>&</span>
                        <span className='uppercase text-lime-700'>Quick</span>
                    </h1>
                    <h3 className='subtitle text-white text-2xl mt-3 mx-2'>Your favourite recipes in any device.</h3>
                </div>
            </div>
            <div className="streaming-box w-full h-[15rem] flex justify-center items-center bg-[#f9ffe1]">
                <img className="h-[12rem] w-[12rem]" src={logo} alt="logo" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-2xl'>The streaming service that will level up your cooking skills.</h3>
                    <h4 className='text-lg'>Enjoy exclusive recipes from the most awarded chefs in the world.</h4>
                </div>
            </div>
            <div className='hi-box w-full min-h-[8rem] flex justify-center items-center bg-black'>
                {loggedUser ?
                    <h3 className='text-white text-center text-2xl mt-3 mx-3'>Hi, <span className='text-green-600 font-bold'>{loggedUser.first_name}</span>! Explore our categories and find your recipe:</h3>
                    :
                    <div className="flex flex-col justify-center items-center">
                        <h3 className='text-white text-2xl mt-3 mx-3'>Hi, there! Please, <LinkRouter to='/logIn' className='font-bold underline'>log in</LinkRouter> to enjoy our content.</h3>
                    </div>
                }
            </div>
            {loggedUser &&
                <div className='categories-box bg-black flex w-full pb-4'>
                    {
                        unique.map((item, i) => {
                            return (
                                <LinkRouter key={i} to={item.name} className="category-card" style={{ backgroundImage: `url(${item.picture})` }}>
                                    <h4 className='card-text text-white text-center text-2xl h-full w-full flex justify-center items-center bg-black bg-opacity-60'>{item.name}</h4>
                                </LinkRouter>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
