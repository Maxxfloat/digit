import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import style from './IndexComponentStyle.module.css'

const Skills = () => {
    return (
        <section>
            <Container fluid>
                    <Row className='justify-content-center align-items-top vh-100 my-5'>
                        <h1 className='col-xl-12 text-center display-1 m-0'>مهارت ها</h1>
                        <div className='row col-12 m-0 align-items-top'>
                            <div className='col-xl-4 text-center'>
                                <i className='fa fa-instagram' style={{fontSize : '5rem',color : '#eb348c'}} ></i>
                                <h3 className='my-3'>اینستاگرام</h3>
                                <p>من تو اینستاگرام خفنم ( الکی )</p>
                            </div>
                            <div className='col-xl-4 text-center'>
                                <i className='fa fa-file-text-o' style={{fontSize : '5rem',color : 'darkcyan'}} ></i>
                                <h3 className='my-3'>کپی رایتینگ</h3>
                                <p>من تو کپی رایتینگ خفنم ( الکی )</p>
                            </div>
                            <div className='col-xl-4 text-center'>
                                <i className={`fa fa fa-google ${style.textInlineGradient}`}
                                style={{fontSize : '5rem'}} ></i>
                                <h3 className='my-3'>سئو</h3>
                                <p>من تو سئو خفنم ( الکی )</p>
                            </div>
                        </div>
                        </Row>
            </Container>
        </section>
    )
}

export default Skills;