import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown,Nav } from 'react-bootstrap';



const Header = () => {
    return (
        <div>
            <Navbar bg='light gray'>
                <Nav>
                    <Nav.Link className="rounded mx-2 bg-secondary" as={Link}  to="/login" >ورود</Nav.Link>
                    <Nav.Link className="rounded mx-2 bg-secondary" as={Link} to="/about" >درباره ما</Nav.Link>
                    <NavDropdown title='خدمات' as={Link} to="/services" className="rounded mx-2 bg-secondary">
                        <NavDropdown.Item as={Link} className="rounded mx-2 bg-secondary" to="/instagram">اینستاگرام</NavDropdown.Item>
                        <NavDropdown.Item as={Link} className="rounded mx-2 bg-secondary" to="/copywriting">کپی رایتینگ</NavDropdown.Item>
                        <NavDropdown.Item as={Link} className="rounded mx-2 bg-secondary" to="/seo">سئو</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link variant='info alert' as={Link} to="/">خانه</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;