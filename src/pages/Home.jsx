import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/home.css'
import data from '../content.json'
import { useDispatch } from 'react-redux'
import categoriesActions from '../redux/actions/categoriesActions'

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



    return (
        <>
            <div className='full-container h-full'>
                <div className='home-banner'>
                    <h1 className='text-7xl text-red-900 flex flex-col dropshadow-lg'>
                        <span className='text-white'>Simple</span>
                        <span className='text-white'>&</span>
                        <span className='uppercase text-lime-700'>Quick</span>
                    </h1>
                    <h3 className='text-white text-2xl mt-3'>Exclusive recipes from the best chefs</h3>
                </div>
            </div>
            <div className='m-3 '>

                <h3 className='m-0 p-0 text-xl'>Explore our categories:</h3>
            </div>
            <div className='categories-box flex w-full'>

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





        </>


    )
}
