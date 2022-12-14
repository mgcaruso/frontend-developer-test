import React from 'react'
import '../styles/contentCategory.css'
import data from '../content.json'
import Carousel from 'react-grid-carousel'
import { useParams } from 'react-router-dom'
import { Link as LinkRouter } from 'react-router-dom'
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function ContentCategory() {

    let { category } = useParams();
    let array = [];
    //en este caso (línea 15 a 37), utilizamos los métodos planteados a continuación debido a que la información esta contenida en un archivo JSON. En una situación real, se haría una consulta a una base de datos, a un controlador que realizara el filtro y devolviera, por ejemplo un array con los objetos filtrados por categoría, en lugar de hacer este proceso en el frontend (y en cada componente en el que necesitáramos filtrar).  
    for (let object of data) {
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
    let filtered = data.filter(item => {
        for (let categ of item.category) {
            if (categ.name === category) {
                return item
            }
        }
    })
    return (
        <div className='category-box'>
            <div className="category-banner" style={{ backgroundImage: `url(${categoryObj[0].picture})` }} >
                <h4 className='mx-2 text-center z-40 text-black text-5xl px-7 py-4 bg-white'>{category} recipes</h4>
                <LinkRouter to="/" >
                    <div className="flex px-3 py-2 bg-white items-center justify-between my-2">
                        <BsArrowLeft size={18} />
                        <p className='text-lg text-[#222] my-2'>Back to categories</p>
                    </div>
                </LinkRouter>
            </div>
            <div className='videos-box w-full flex flex-col bg-[#f9ffe1]'>
                <h3 className='my-3 text-xl text-center'>Explore videos in the {category} category:</h3>
                <div className='videos my-5 w-full flex gap-1 flex-wrap justify-center items-center'>
                    <Carousel style={{
                        height: "12rem",
                        width: "100%"
                    }} cols={3} rows={1} gap={40} loop autoplay={3000}
                    mobileBreakpoint={200}
                    responsiveLayout={[
                        {
                            breakpoint: 576,
                            cols: 1,
                            rows: 2,
                            gap: 5
                        },
                        {
                            breakpoint: 768,
                            cols: 2,
                            rows: 2,
                            gap: 5
                        },
                        {
                            breakpoint: 992,
                            cols: 2,
                            rows: 2,
                            gap: 5
                        },
                        {
                            breakpoint: 1200,
                            cols: 2,
                            rows: 2,
                            gap: 10
                        },
                        {
                            breakpoint: 1400,
                            cols: 2,
                            rows: 2,
                            gap: 15,
                        }
                    ]}
                    >
                        {filtered.map((item, i) => {
                            return (
                                <Carousel.Item
                                    key={i}
                                    className="carousel-box rounded-full"
                                    style={{
                                        height: "12rem",
                                        width:"50%",
                                        margin:0
                                    }}>
                                    <LinkRouter to={item.videoId}>
                                        <div className='container'>
                                            <img className="image-carousel" height="100%" width="100%" src={item.thumbnail} alt={item.videoTitle} />
                                            <div className="centered flex flex-col">
                                                <h4 className='text-2xl my-1'>{item.videoTitle}</h4>
                                                <BsFillPlayCircleFill color='white' />
                                                <h6 className='text-sm my-1'>{item.chefName}</h6>
                                            </div>
                                        </div>
                                    </LinkRouter>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>

        </div>
    )
}
