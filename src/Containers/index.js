import React from 'react';
import instagram_logo from '../statics/instagram_logo.png';
import { Card } from 'react-bootstrap';

class Index extends React.Component {
    render(){
        return (
            <div className='ui container'>
                <div>introduce</div>
                <div>
                    <Card style={{width : '20%', height: '30%'}}>
                        <Card.Body style={{margin: 'auto'}}>
                            <Card.Img src={instagram_logo} alt='intagram' />
                            <Card.Title className='alg-center'>اینستاگرام</Card.Title>
                        </Card.Body>
                    </Card>
                    <div className='column center aligned'>service 2</div>
                </div>
                <div>porfolio</div>
                <div>about</div>
            </div>
        )
    }
}

export default Index;