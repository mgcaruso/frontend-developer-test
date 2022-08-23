import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/contentCategory.css'
import data from '../content.json'
import Carousel from 'react-grid-carousel'
import { Link as LinkRouter } from 'react-router-dom'
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
            <div style={{ backgroundImage: `url(${categoryObj[0].picture})`, backgroundPosition: "center", backgroundSize: "cover" }} className='category-banner'>
                <h4 className='z-40 text-white text-3xl'>{category}</h4>
                {/* <video className="absolute h-[20rem] w-[100%] object-cover object-top" src={"https://www.dropbox.com/6eda38b6-b2e0-4f18-bb8b-5220ad171c3e"} loop autoPlay ></video> */}
            </div>
            <div className='videos-box w-full flex flex-col'>
                <h3>Explore videos in the {category} category:</h3>
                <div className='videos w-full flex gap-1 flex-wrap justify-center items-center'>
                    <Carousel style={{
                        height: "12rem",
                        width: "100%"
                    }} cols={3} rows={1} gap={40} loop>
                        {filtered.map((item, i) => {
                            return (
                                <Carousel.Item
                                    style={{
                                        height: "12rem"
                                    }}>
                                    <LinkRouter to={item.videoId}>
                                        <img width="100%" style={{
                                            height: "12rem",
                                            objectFit: "cover"
                                        }} src={item.thumbnail} />
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
