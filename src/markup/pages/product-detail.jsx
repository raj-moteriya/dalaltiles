import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import VSlider from '../layout/right-slider'
import Leftheader from '../layout/left-header'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom'



// Slider Img
import BG_img from '../../assets/Images/Rectangle 111.png'
import slider_img from '../../assets/Images/Mask Group 1.png'
import download_img from '../../assets/Images/Mask Group 6.png'
import download_img2 from '../../assets/Images/Screenshot (1012).png'
import finul_img from '../../assets/Images/finul-img.png'



class Products_single extends Component {

    render() {
        var P_single_slider = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToShow: 1,
            variableWidth: true
        };
        return (
            <div>
                <div className="custom-row">
                    <div className="left-part">
                        <Leftheader />
                    </div>
                    <div className="center-part">
                        <Header />
                        <section className="productdetail-sec">
                            <div className="product-top-bar">
                                <div className="single-slider">
                                    <Slider {...P_single_slider}>
                                        <div>
                                            <img src={slider_img} alt="" />
                                        </div>
                                        <div>
                                            <img src={slider_img} alt="" />
                                        </div>
                                        <div>
                                            <img src={slider_img} alt="" />
                                        </div>
                                        <div>
                                            <img src={slider_img} alt="" />
                                        </div>
                                        <div>
                                            <img src={slider_img} alt="" />
                                        </div>
                                        <div>
                                            <img src={slider_img} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="product-detail">
                                    <div className="p-title">Milano</div>
                                    <div className="p-description">
                                        <div className="row no-gutters">
                                            <div className="textures">
                                                <div className="p-subtitle"><h2>Textures Specifications</h2></div>
                                                <ul>
                                                    <li>
                                                        <input type="radio" name="gender1" value="male1" />
                                                        <span style={{ backgroundImage: 'url(' + BG_img + ')' }}></span>
                                                    </li>
                                                    <li>
                                                        <input type="radio" name="gender1" value="male1" />
                                                        <span style={{ backgroundImage: 'url(' + BG_img + ')' }}></span>
                                                    </li>
                                                    <li>
                                                        <input type="radio" name="gender1" value="male1" />
                                                        <span style={{ backgroundImage: 'url(' + BG_img + ')' }}></span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="size">
                                                <div className="p-subtitle"><h2>Size Specifications</h2></div>
                                                <div className="size-list">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Depth</th>
                                                                <th>Area</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>60 mm</td>
                                                                <td rowspan="2">0.03sq m</td>
                                                            </tr>
                                                            <tr>
                                                                <td>80 mm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="download">
                                                <div className="p-subtitle"><h2>Download</h2></div>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src={download_img} alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src={download_img2} alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-color">
                                        <h2>Color</h2>
                                        <ul>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#fff' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#000' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#CBAD8B' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#252525' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#97765D' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#4C4E4E' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#C69E44' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#939393' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#B85D4A' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#AE7B78' }}></span>
                                            </li>
                                            <li>
                                                <input type="radio" name="gender" value="male" />
                                                <span style={{ backgroundColor: '#7B2F28' }}></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="product-bottom-bar">
                                <img src={finul_img} alt="" />
                            </div>
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
export default Products_single;