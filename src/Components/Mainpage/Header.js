import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux';


const Header = ({isAuth}) => {
    const signUpHandler = () =>{
        if (isAuth) {
            return <img alt='profile' />
        }else{
            return (
            <Nav>
                <Link className='nav-item nav-link rounded' 
                style={{backgroundColor : 'lightcyan'}} to='/signup'>عضویت / ورود</Link>
            </Nav>
            )
        }
    }
    
    return (
        <>
            <Navbar expand='lg' className='bg-warning'>
                <Navbar.Toggle aria-controls='my-nav'/>
                <Navbar.Collapse id='my-nav' className='text-right'>
                <Nav>
                    <Link className='nav-item nav-link mr-1 rounded' style={{backgroundColor : 'lightcyan'}} to='/' >خانه</Link>
                    <Link className='nav-item nav-link mr-1 rounded' style={{backgroundColor : 'lightcyan'}} to='/' >خدمات</Link>
                    <Link className='nav-item nav-link mr-1 rounded' style={{backgroundColor : 'lightcyan'}} to='/' >درباره ما</Link>
                </Nav>
                <Nav className='mr-auto'>
                    {signUpHandler()}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth : state.isAuth
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        didAuth : () => Dispatch({type : 'DID_AUTH'}),
        didNotAuth : () => Dispatch({type : 'DID_NOT_AUTH'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);