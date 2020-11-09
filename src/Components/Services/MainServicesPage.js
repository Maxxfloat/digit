import React from 'react';
import Row from 'react-bootstrap/Row'

import Container from 'react-bootstrap/Container'

const MainServicesPage = () => {

    return (
        <>
            <Container fluid className='py-5' color='cyan' style={{height : '30vh', backgroundColor : 'lightpink'}}>
                <h1 className='col-12 text-center'>تعدادی از خدمات آژانس ما</h1>
            </Container>
            <Container fluid className='vh-100 my-5'>
                <Row>
                    <p className='col-3 text-justify'>من یه کارایی بلدم ولی فعلا یادم نمیان</p>
                </Row>
            </Container>
        </>
    )
}

export default MainServicesPage;