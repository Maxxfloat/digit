import React from 'react';

import { Container, Row } from 'react-bootstrap';

import MyCard from '../MyCard';
import Banner from '../Banner';
import Projects from '../Projects'

import instagram_logo from '../statics/instagram_logo.png';
import telegram_logo from '../statics/telegram_logo.png';
import youtube_logo from '../statics/youtube_logo.png';

class Index extends React.Component {
    render(){
        return (
            <div>
                {/* Banner Section */}
                <Banner />
                {/* End Banner Section */}

                {/* Services Section */}
                <section className='p-sm-5 p-2 mt-3'>
                    <Container fluid>
                        <Row>
                            <MyCard 
                                myLogo={instagram_logo}
                                cardExplain='این توضیحات اینستاگرام است'
                                cardtitle='اینستاگرام'
                                cardImageAlt='instagram'
                            />
                            <MyCard
                                myLogo={telegram_logo}
                                cardExplain='این توضیحات تلگرام است'
                                cardtitle='تلگرام'
                                cardImageAlt='telegram'
                            />
                            <MyCard
                                myLogo={youtube_logo}
                                cardExplain='این توضیحات یوتیوب است'
                                cardtitle='یوتیوب'
                                cardImageAlt='youtube'
                            />
                        </Row>
                    </Container>
                </section>
                {/* Services Section */}

                {/* Projects Section */}
                <Projects />
                {/* Projects Section */}
                
                <div>about</div>
            </div>
        )
    }
}

export default Index;