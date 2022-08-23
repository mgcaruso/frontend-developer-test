import React from 'react'
import '../styles/home.css'
import ReactWebMediaPlayer from 'react-web-media-player';

export default function Home() {
    let categories = [
        {
            category: "Vegetarian",
            picture: 'https://i.imgur.com/nGNEKvP.jpg'
        },
        {
            category: "Sweet",
            picture: 'https://i.imgur.com/TkcN9SO.jpg'
        },
        {
            category: "Salty",
            picture: 'https://i.imgur.com/09MeOo4.jpg'
        },
        {
            category: "Asian",
            picture: 'https://i.imgur.com/Lyg3Xhi.jpg'
        },
        {
            category: "Argentinian",
            picture: 'https://i.imgur.com/H2MyQnt.jpg'
        }
    ]
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
            <div className='categories-box flex w-full'>


                {
                    categories.map((item, index) => {
                        return (
                            <div className="category-card" style={{ backgroundImage: `url(${item.picture})` }}>
                                <h4 className='card-text text-white text-center text-2xl h-full w-full flex justify-center items-center bg-black bg-opacity-60'>{item.category}</h4>
                            </div>
                        )
                    })
                }

            </div>


            <div>

                <ReactWebMediaPlayer
                    title="Simple & Quick - Exclusive recipes"
                    video="https://drive.google.com/uc?export=download&id=1k6g5BPiQFJVoSsO0A3u02db7bUvlI8a9"
                    thumbnail="https://any-link.com/video-thumbnail.jpg"
                    logo={{
                        img: "https://any-link.com/your-logo.png",
                        href: "https:/redirection-link.com"
                    }}
                />
            </div>


        </>


    )
}
