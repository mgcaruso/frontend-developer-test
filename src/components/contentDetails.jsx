import React from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';
import { useParams } from 'react-router-dom';
import data from '../content.json';
import { Link as LinkRouter } from 'react-router-dom';
import '../styles/contentDetails.css'

export default function ContentDetails() {
    let { videoId } = useParams();
    let filteredObj = data.filter(item => item.videoId == videoId);
    let currentLocation = window.location.href.split("/")[3]
    let value = `https://drive.google.com/uc?export=download&id=${videoId}`
    return (
        <div>
            <div className="min-h-[80vh] flex w-full justify-center items-center">
                <div className='w-45'>
                    <ReactWebMediaPlayer
                        title={`Simple&Quick - ${filteredObj[0].videoTitle}`}
                        video={value}
                        thumbnail={filteredObj[0].thumbnail}
                        logo={{
                            img: "https://any-link.com/your-logo.png",
                            href: "https:/redirection-link.com"
                        }}
                    />
                </div>
                <div className='w-45 min-h-[20rem] flex flex-col justify-around items-center m-3 dropshadow-lg'>
                    Exclusive recipe brought to you by:
                    <img className="h-[8rem] w-[8rem] object-cover rounded-full" src={filteredObj[0].chefImg} alt={filteredObj[0].chefName} />
                    <h4>Chef: {filteredObj[0].chefName}</h4>

                </div>
            </div>
            <div className='flex justify-around items-center'>
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
