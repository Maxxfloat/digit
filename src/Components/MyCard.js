import React from "react";
import Card from 'react-bootstrap/Card'


const MyCard = ({cardExplain, cardtitle, cardImageAlt, myLogo}) => {
    return (
        <div className='col-lg-4 col-sm-10 mx-auto'>
            <Card className='border-0'>
                <Card.Img 
                src={myLogo}
                alt={cardImageAlt} 
                variant='top'
                style={{width: '20%'}}
                className='d-block mx-auto my-2'
                />
                <Card.Body>
                    <Card.Title className='text-center mt-2' style={{fontSize:'2rem'}}>{cardtitle}</Card.Title>
                    <Card.Text className='text-center my-5' style={{fontSize: 'medium'}}>{cardExplain}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyCard;