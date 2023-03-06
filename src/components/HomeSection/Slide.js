import React, { useState } from 'react'
import Data from './Data';

const Slide = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }



  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev'>
            <i className='fas fa-caret-left' onClick={nextSlide}></i>
          </button>
          <button className='next'>
            <i className='fas fa-caret-right' onClick={prevSlide}></i>
          </button>
        </div>
      

      {Data.map((slide, index) =>{
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide.images} alt='Home Image'/>}
          </div>
        )
      })

      }
      </section>
      <section className='slide-form'>
        <div className="container">
          <h2>Enjoy Your Holiday</h2>
          <span>Search and Book Hotel</span>

          <form action="">
            <input type="text" placeholder='Search City' name='' id='' />

              <div className="flex-space">
                <input type="date" placeholder='Check In' />
                <input type="date" placeholder='Check Out' />
              </div>
              <div className="flex-space">
                <input type="number" placeholder='Adult(s)(18+)' />
                <input type="number" placeholder='Children(0-17)' />
              </div>

              <input type="number" placeholder='Rooms' />
             <button className='secondary-btn' type='search'>SEARCH</button>
          </form>
        </div>

      </section>
    </>
  )
}

export default Slide;