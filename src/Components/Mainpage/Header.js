import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




const Header = ({signUp}) => {
    const signUpHandler = (signUp) =>{
        if (signUp) {
            return <img alt='profile' />
        }else{
            return (
            <Nav>
                <Nav.Link as={Link} to='/signup' >عضویت / ورود</Nav.Link>
            </Nav>
            )
        }
    }
    return (
        <>
            <Navbar>
                <Navbar.Toggle aria-controls='my-nav'/>
                <Navbar.Collapse id='my-nav'/>
                <Nav>
                    <Nav.Link as={Link} to='/' >خدمات</Nav.Link>
                    <Nav.Link as={Link} to='/' >درباره ما</Nav.Link>
                    {signUpHandler(signUp)}
                </Nav>
            </Navbar>
        </>
    )
}

export default Header;