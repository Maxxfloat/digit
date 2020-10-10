import React from 'react';

import { CardColumns, Container } from 'react-bootstrap';

import MyCard from '../Components/MyCard';
import Banner from '../Components/Banner';

class Index extends React.Component {
    render(){
        return (
            <div>
                <Banner />
                <Container fluid className='my-5'>
                    <CardColumns className = 'mx-xl-3 mx-md-2 mx-sm-2'>
                        <MyCard />
                        <MyCard />
                        <MyCard />
                    </CardColumns>
                </Container>
                <div>porfolio</div>
                <div>about</div>
            </div>
        )
    }
}

export default Index;