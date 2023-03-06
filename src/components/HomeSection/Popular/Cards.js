import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PopularData from './PopData';
import Slider from "react-slick";


const SampleNextArrow = (props) =>{
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) =>{
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}

const Cards = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
      return (
        
        <>
          <Slider {...settings}>
            {PopularData.map((value) => {
              return (
                <>
                  <div className='cards'>
                    <div className='item'>
                      <div className='imgae'>
                        <img src={value.image} alt='' />
                        <i className='fas fa-map-marker-alt'>
                          <label>{value.country}</label>
                        </i>
                      </div>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='far fa-star'></i>
                        <i className='far fa-star'></i>
                      </div>
                      <div className='details'>
                        <h2>{value.name}</h2>
                        <div className='boarder'></div>
                        <h3>
                          {value.price} / <span>Per night</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </Slider>
        </>
      )
}

export default Cards