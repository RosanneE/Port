import React, { useState } from "react";
import { HuesData } from './HuesData'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const Slider = ({ slides }) => {

    const [curr, setCurr] = useState[0]
    const length = slides.length

    const next = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1)
    }

    const prev = () => {
            setCurr(curr === 0 ? length - 1 : curr - 1)
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }
        
               
    return (
            <section className='slider'>
            <FaAngleLeft className='arrow' onClick={prev}/>
            <FaAngleRight className='arrow' onclick={next }/>
            {HuesData.map((slide, index) => { 
                return (
                    <div className={index === curr ? 'slide active' : 'slide'}
                    key={index}>
                        {index === curr && (    
                        <img className= 'images' src={slide.image} alt={slide.alt}/>
                        )}
                    </div>
                )
            })}
        </section>
    )  
}

export default Slider

// https://github.com/briancodex/react-image-slider-carousel