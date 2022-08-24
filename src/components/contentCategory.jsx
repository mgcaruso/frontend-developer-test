import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/contentCategory.css'
import data from '../content.json'
import Carousel from 'react-grid-carousel'
import { Link as LinkRouter } from 'react-router-dom'
import { BsFillPlayCircleFill } from "react-icons/bs";


export default function ContentCategory() {

    let { category } = useParams();

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


    let categoryObj = unique.filter(item => item.name === category)
    console.log(data)

    let filtered = data.filter(item => {
        for (let categ of item.category) {
            if (categ.name === category) {
                return item
            }
        }
    })
    console.log(filtered)
    return (
        <div className='category-box'>
            <div className="category-banner" style={{ backgroundImage: `url(${categoryObj[0].picture})` }} >
                <h4 className='z-40 text-black text-3xl px-7 py-4 bg-white'>{category} recipes</h4>
            </div>
            {/* <div className='featuring-box'>
                <h4>Find recipes from the best chefs:</h4>
                {
                    data.map((item, i) => {
                        return (
                            <div>
                                <div className='h-[8rem] w-[8rem] rounded-full' style={{ backgroundImage: `url(${item.chefImg})`, backgroundPosition:"center", backgroundSize:"cover" }}>
                                </div>
                                <h5>{item.chefName}</h5>
                            </div>
                        )
                    })
                }
            </div> */}
            <div className='videos-box w-full flex flex-col bg-[#f9ffe1]'>
                <h3 className='my-3 text-xl text-center'>Explore videos in the {category} category:</h3>
                <div className='videos w-full flex gap-1 flex-wrap justify-center items-center'>
                    <Carousel style={{
                        height: "12rem",
                        width: "100%"
                    }} cols={3} rows={1} gap={40} loop autoplay={3000}>
                        {filtered.map((item, i) => {
                            return (
                                <Carousel.Item
                                    style={{
                                        height: "15rem"
                                    }}>
                                    <LinkRouter to={item.videoId}>
                                        <div className='container h-[12rem] '>
                                            <img className="image-carousel" height="100%" width="100%" src={item.thumbnail} alt={item.videoTitle} />
                                            <div className="centered flex flex-col">
                                                <h4 className='text-2xl my-1'>{item.videoTitle}</h4>
                                                <BsFillPlayCircleFill  color='white'/>
                                                <h6 className='text-sm my-1'>{item.chefName}</h6>
                                            </div>
                                        </div>
                                    </LinkRouter>
                                </Carousel.Item>

                            )

                        })

                        }
                    </Carousel>
                </div>
            </div>

        </div>
    )
}
