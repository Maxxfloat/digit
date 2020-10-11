import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/style.css';



const Header = () => {
    return (
        <div>
            <Navbar className='mybgcol' expand='md' fixed="top" style={{margin : '0'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='justify-content-between text-right' style={{margin : '0'}}>
                    <Nav.Item>
                        <Nav.Link className="rounded mx-lg-1 tx-color" as={Link}  to="/login" >ورود</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="rounded mx-lg-1 tx-color" as={Link} to="/about" >درباره ما</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="rounded mx-lg-1 tx-color" as={Link} to="/services">خدمات</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className='text-right mr-md-auto'>
                    <Nav.Item >
                        <Nav.Link className='tx-color rounded mx-lg-1' as={Link} to="/">خانه</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;