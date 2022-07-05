import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    
    return (
        <div className="carouselElement">
            <Carousel infiniteLoop showArrows selectedItem={0} >
                <div className="sliderImg">
                    <img 
                        src='https://i.imgur.com/qNWXWLa.png' 
                        alt='Pour Choices Home Page'/>
                </div>
                <div className="sliderImg">
                    <img 
                        src='https://i.imgur.com/E79dtNi.png' 
                        alt='Pour Choices Cocktail List'/>
                </div>
                <div className="sliderImg">
                    <img 
                        src='https://i.imgur.com/vf9dUTB.png'
                        alt='Pour Choices Cocktail Recipie Card'/>
                </div>
                {/* <div className="sliderImg">
                    <img 
                        src='https://i.imgur.com/qNWXWLa.png' 
                        alt='Pour Choices Home Page'/>
                </div>
                <div className="sliderImg">
                    <img 
                        src='https://i.imgur.com/qNWXWLa.png' 
                        alt='Pour Choices Home Page'/>
                </div>
                <div className="sliderImg">
                    <img 
                        src='https://i.imgur.com/qNWXWLa.png' 
                        alt='Pour Choices Home Page'/>
                </div>
                <div className="sliderImg">
                    <img 
                        src='https://i.imgur.com/qNWXWLa.png' 
                        alt='Pour Choices Home Page'/> */}
                {/* </div> */}
            </Carousel>

        </div>
    );
}