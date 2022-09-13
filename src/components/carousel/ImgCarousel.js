import React from 'react'
import './ImgCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import destination1 from '../../assets/destination1.jpg';
import destination2 from '../../assets/destination2.jpg';
import destination3 from '../../assets/destination3.jpg';

import { Carousel } from 'react-responsive-carousel';

function ImgCarousel() {
    return (
        <div className='container'>
            <h2 className='title'>View Our Gallery</h2>
            <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={destination1} alt='/' />

                </div>
                <div>
                    <img src={destination2} alt='/' />

                </div>
                <div>
                    <img src={destination3} alt='/' />

                </div>
            </Carousel>
        </div>
    )
}

export default ImgCarousel