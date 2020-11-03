import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Skills = () => {
    return (
        <section>
            <Container fluid>
                <Row>
                    <div className='col-xl-12'>
                        مهارت ها
                    </div>
                </Row>
                <Row>
                    <Container className='col-xl-4'>اینستاگرام</Container>
                    <Container className='col-xl-4'>سئو</Container>
                    <Container className='col-xl-4'>کپی رایتینگ</Container>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;