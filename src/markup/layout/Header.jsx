import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import Slider from "react-slick";
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';
import '../../assets/css/Style.css'

class Header extends Component {

    
    render() {
        
        return (
            <>
                <header class="site-header mo-left header">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <NavLink exact activeClassName="active" to="/" >Home</NavLink>
                                <NavLink activeClassName="active" to="/about">About</NavLink>
                                <NavLink activeClassName="active" to="/product-list">Products</NavLink>
                                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </>
        )
    }
}
export default Header;