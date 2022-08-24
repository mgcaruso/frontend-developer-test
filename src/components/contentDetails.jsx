import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../content.json';
import { Link as LinkRouter } from 'react-router-dom';
import '../styles/contentDetails.css'


export default function ContentDetails() {
    let { videoId } = useParams();
    let filteredObj = data.filter(item => item.videoId == videoId);
    let currentLocation = window.location.href.split("/")[3]

    return (
        <div className='body-details grow flex flex-col justify-center items-center'>

            <div className="h-full flex w-full justify-center items-center ">
                <div className='inner-box p-8 flex items-center justify-center'>

                    <div className='w-45 h-[18rem]'>
                        <video className='h-[18rem] object-cover' src={filteredObj[0].videoUrl} controls={true} autoplay />

                    </div>
                    <div className='w-45 min-h-[19.8rem] px-4 rounded-md flex flex-col justify-around items-center m-3 dropshadow-lg bg-white'>
                        <h4 className='text-xl'>Exclusive recipe by:</h4>
                        <img className="h-[8rem] w-[8rem] object-cover rounded-full" src={filteredObj[0].chefImg} alt={filteredObj[0].chefName} />
                        <h4>Chef: {filteredObj[0].chefName}</h4>

                    </div>
                </div>
            </div>
            <div className='btn-navigation flex my-3 w-full justify-around'>
                <LinkRouter className='btn-link' to={`/${currentLocation}`}>
                    <p>Back to {currentLocation}</p>
                </LinkRouter>
                <LinkRouter className='btn-link' to={"/"}>
                    <p>Explore all categories</p>
                </LinkRouter>

            </div>
        </div>
    )
}
