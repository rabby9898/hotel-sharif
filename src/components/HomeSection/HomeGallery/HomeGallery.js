import React from 'react';
import Data from './Data';
import './HomeGallery.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HomeGallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };
  return (
    <>
        <section className="collection">
            <div className="container top">
              <Slider {...settings}>
                {Data.map((value) =>{
                    return(
                        <div className="box">
                            <img src={value.cover} alt="" />
                        </div>
                    )
                })}
                </Slider>
            </div>
        </section>
    </>
  )
}

export default HomeGallery;