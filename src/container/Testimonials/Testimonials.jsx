import React from 'react'

import "./Testimonials.css"
import { ReviewSlider } from '../../component'

const Testimonials = () => {
  return (
    <div className='section__padding p__roboto testimonials__wrapper' id='testimonials'>
      <h1>Testimonials</h1>
      <p>Discover what clients and collaborators say about my editing, creativity, and commitment to delivering<br/> professional, story-driven videos that inspire audiences</p>
      <div className="testimonials__container">
        <ReviewSlider/>
      </div>
    </div>
  )
}

export default Testimonials
