import React, { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import VSlider from '../layout/right-slider'
import Leftheader from '../layout/left-header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom'



// Slider Img
import product_img from '../../assets/Images/Mask Group 1.png'
import sliderimg1 from '../../assets/Images/Proto-Homes.jpg'
import sliderimg2 from '../../assets/Images/Proto-Homes2.jpg'
import sliderimg3 from '../../assets/Images/Proto-Homes3.jpg'
class Products extends Component {

    render() {
        
        return (
            <div>
                <div className="custom-row">
                <div className="left-part">
                    <Leftheader />
                </div>
                <div className="center-part">
                <Header />
                    <section className="product-sec">
                        <div className="product-list">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg1} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                        <Link to="/products-detail">
                                            <a>Wetcast Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg2} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                        <Link to="/products-detail">
                                            <a>Wetcast Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg3} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                        <Link to="/products-detail">
                                            <a>Wetcast Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg2} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                            <a href="/products-detail">Wetcast Products</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg3} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                            <Link to="/products-detail">
                                            <a>Wetcast Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg1} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                        <Link to="/products-detail">
                                            <a>Wetcast Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg3} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                        <Link to="/products-detail">
                                            <a>Wetcast Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img src={sliderimg1} alt="" className="img-fluid" />
                                        </div>
                                        <div className="product-title">
                                        <Link to="/products-detail">
                                            <a>Wetcast Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
export default Products;