import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import VSlider from '../layout/right-slider'
import Leftheader from '../layout/left-header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom'



// Slider Img
import sliderimg1 from '../../assets/Images/Proto-Homes.jpg'
import sliderimg2 from '../../assets/Images/Proto-Homes2.jpg'
import sliderimg3 from '../../assets/Images/Proto-Homes3.jpg'
import Slider from 'react-slick';

class Index extends Component {

    render() {
        var innerslider = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false
        };
        return (
            <div>
                <div className="custom-row">
                <div className="left-part">
                    <Leftheader />
                </div>
                <div className="center-part">
                <Header />
                <section className="tab-slider">
                    <Tabs>
                        <TabList>
                            <Tab>
                                <div className="slider-man-box">
                                    <div class="tab-slider-tab__button">
                                        <div class="tab-slider-tab__title">
                                            <div className="top-title">
                                                <div className="top-slider">Single Family</div>
                                            </div>
                                        </div>
                                        <div class="tab-slider-tab__info">
                                            <div class="tab-slider-tab__num"><span>01</span></div>
                                            <div class="tab-slider-tab__text-outer">
                                                <div class="tab-slider-tab__line"></div>
                                                <div class="tab-slider-tab__text"><span>Single Family</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-img-box" style={{ backgroundImage: 'url(' + sliderimg2 + ')' }}>
                                        <Slider {...innerslider}>
                                            <div>
                                                <div className="first-slide">
                                                    <h2>Dalal Tiles</h2>
                                                    <p>Mauris vulputate a magna a ullamcorper. Morbi pretium nunc ipsum, a maximus ex accumsan non. Nullam turpis nunc, facilisis finibus efficitur eu, gravida volutpat turpis. Sed non lorem ut augue fermentum fermentum sed ac eros. Vivamus vel justo nisl. Suspendisse et auctor risus, ac consectetur massa.</p>
                                                    <button type="submit">Viev More</button>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="first-slide">
                                                    <h2>Dalal Tiles</h2>
                                                    <p>Mauris vulputate a magna a ullamcorper. Morbi pretium nunc ipsum, a maximus ex accumsan non. Nullam turpis nunc, facilisis finibus efficitur eu, gravida volutpat turpis. Sed non lorem ut augue fermentum fermentum sed ac eros. Vivamus vel justo nisl. Suspendisse et auctor risus, ac consectetur massa.</p>
                                                    <button type="submit">Viev More</button>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="first-slide">
                                                    <h2>Dalal Tiles</h2>
                                                    <p>Mauris vulputate a magna a ullamcorper. Morbi pretium nunc ipsum, a maximus ex accumsan non. Nullam turpis nunc, facilisis finibus efficitur eu, gravida volutpat turpis. Sed non lorem ut augue fermentum fermentum sed ac eros. Vivamus vel justo nisl. Suspendisse et auctor risus, ac consectetur massa.</p>
                                                    <button type="submit">Viev More</button>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="slider-man-box">
                                    <div class="tab-slider-tab__button">
                                        <div class="tab-slider-tab__title">
                                            <div className="top-title">
                                                <div className="top-slider">Single Family</div>
                                            </div>
                                        </div>
                                        <div class="tab-slider-tab__info">
                                            <div class="tab-slider-tab__num"><span>02</span></div>
                                            <div class="tab-slider-tab__text-outer">
                                                <div class="tab-slider-tab__line"></div>
                                                <div class="tab-slider-tab__text"><span>Single Family</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-img-box" style={{ backgroundImage: 'url(' + sliderimg3 + ')' }}>
                                        {/* <img src={sliderimg3} alt="" /> */}
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="slider-man-box">
                                    <div class="tab-slider-tab__button">
                                        <div class="tab-slider-tab__title">
                                            <div className="top-title">
                                                <div className="top-slider">Single Family</div>
                                            </div>
                                        </div>
                                        <div class="tab-slider-tab__info">
                                            <div class="tab-slider-tab__num"><span>03</span></div>
                                            <div class="tab-slider-tab__text-outer">
                                                <div class="tab-slider-tab__line"></div>
                                                <div class="tab-slider-tab__text"><span>Single Family</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-img-box" style={{ backgroundImage: 'url(' + sliderimg1 + ')' }}>
                                        {/* <img src={sliderimg1} alt="" /> */}
                                    </div>
                                </div>
                            </Tab>
                        </TabList>


                    </Tabs>
                </section>
                <Footer />
                </div>
                <div className="right-part">
                <VSlider />
                </div>                
                </div>
            </div>
        )
    }
}
export default Index;