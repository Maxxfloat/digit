import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Skills = () => {
    return (
        <section>
            <Container fluid>
                    <Row className='justify-content-center align-items-center vh-100'>
                        <div className='col-xl-12 text-center'>
                            مهارت ها
                        </div>
                        <div className='col-xl-4 text-center'>اینستاگرام</div>
                        <div className='col-xl-4 text-center'>سئو</div>
                        <div className='col-xl-4 text-center'>کپی رایتینگ</div>
                    </Row>
            </Container>
        </section>
    )
}

export default Skills;