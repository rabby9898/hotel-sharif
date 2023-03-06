import React from 'react';
import './About.css';

const AboutCard = () => {
  return (
    <>
        <div className="aboutCard mtop flex_space">
            <div className="row row1">
                <h4>About Us</h4>
                <h1>
                    We <span>Provide Solution</span> to grow your business
                </h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                <button className='secondary-btn'>
                    Explore More <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
            <div className='row image'>
                <img src="/images/about-img-1.jpg" alt="" />
                {/* <div className="control-btn">
                <button className="prev">
                 <i className="fas fa-play"></i>
                </button>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default AboutCard