import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent({ slides }) {
    return (
        <div className="carouselElement">
            <Carousel>
                {slides.array.forEach(slide => {
                    <div className="carImg">
                        <img src={slide.image} alt={slide.alt} />
                    </div>
                })
                }
            </Carousel>

        </div>
    );
}