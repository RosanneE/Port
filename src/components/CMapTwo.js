import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {

    const pourSlides = ['https://i.imgur.com/qNWXWLa.png', 'https://i.imgur.com/E79dtNi.png', 'https://i.imgur.com/vf9dUTB.png', 'https://i.imgur.com/72553Mn.png']


    return (
        <div className="carouselElement">
            <Carousel>
            {pourSlides.forEach(slide => {
                    <div className="sliderImg">
                        <img src={slide} alt='Website Image' />
                        {console.log(slide)}
                    </div>
                })
                }
            </Carousel>

        </div>
    );
}