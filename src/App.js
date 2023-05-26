import React, { useRef, useEffect, useState } from 'react';
//import "reset.css";
import "./App.scss";
import leftArrow from './assets/images/arrow-left.svg';
import rightArrow from './assets/images/arrow-right.svg';
import testimonials from './data/testimonialsData';

const App = () => {
let imageList = useRef(null);
let testimonialList = useRef(null);

useEffect(()=> {
  console.log(imageList)
})

  return (
    <div className='testimonial-section'>
      <div className="testimonial-container">
        <div className='arrows left'>
          <span>
            <img src={leftArrow} alt='left arrow' />
          </span>
        </div>

        <div className="inner">
          <div className="t-image">
            <ul ref={el =>(imageList = el)}>
              {testimonials.map((testimonial) => (
                <li key={testimonial.id}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className="t-content">
          <ul ref={el =>(imageList = el)}>
              {testimonials.map((testimonial) => (
                <li key={testimonial.id}>
                  <div className="content-inner">
                    <p className='quote'>{testimonial.quote}</p>
                    <h3 className='name'>{testimonial.name}</h3>
                    <h4 className='title'>{testimonial.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='arrows right'>
          <span>
            <img src={rightArrow} alt='right arrow' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
