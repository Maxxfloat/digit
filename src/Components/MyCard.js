import React from "react";
import instagram_logo from '../statics/instagram_logo.png';
import Card from 'react-bootstrap/Card'

const MyCard = () => {
    return (
        <Card className='rounded border border-dark'>
            <Card.Body className='w-100'>
                <Card.Img 
                src={instagram_logo} 
                alt='intagram' variant='top' 
                className='d-block mx-auto img-thumbnail' 
                style={{width: '25%', height: '25%'}}
                />
                <Card.Title className='text-center mt-3'>اینستاگرام</Card.Title>
                <Card.Text className=''> lorem adsadsf lorem adsadsf lorem adsadsf lorem adsadsloremadsadsfloremadsadsforem adsadsf lorem adsadsf </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard;