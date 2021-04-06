import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import '../../assets/css/Style.css'


// Slider Img
import sliderimg1 from '../../assets/Images/Proto-Homes.jpg'
import sliderimg2 from '../../assets/Images/Proto-Homes2.jpg'
import sliderimg3 from '../../assets/Images/Proto-Homes3.jpg'


class VSlider extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true
        };
        return (
            <>
                <div className="v-slider">
                    <Slider {...settings}>
                        <div>
                            <img src={sliderimg1} alt="" />
                        </div>
                        <div>
                            <img src={sliderimg2} alt="" />
                        </div>
                        <div>
                            <img src={sliderimg3} alt="" />
                        </div>
                        <div>
                            <img src={sliderimg1} alt="" />
                        </div>
                        <div>
                            <img src={sliderimg2} alt="" />
                        </div>
                        <div>
                            <img src={sliderimg3} alt="" />
                        </div>
                    </Slider>
                </div>
            </>
        )
    }
}
export default VSlider;