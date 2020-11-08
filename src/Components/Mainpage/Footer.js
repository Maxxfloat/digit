import React from 'react';

const Footer = () => {
    return (
        <section>
            <div className='container-fluid bg-secondary '>
                <div className='row text-center align-items-center justify-content-center py-5'>
                    <h1 className='col-12 text-white'>نمی‌دونم چی بنویسم</h1>
                    <h3 className='col-12 text-white my-4'>بازم نمی‌دونم چی بنویسم</h3>
                    <div className='col-12 bg-dark d-flex justify-content-center'>
                        <div className='col-sm-12 col-md-4  d-flex justify-content-between'>
                            <i className='fa fa-youtube-play' style={{ fontSize : '36px' , color : 'red'}} />
                            <i className='fa fa-twitter' style={{ fontSize : '36px' , color : 'cyan'}} />
                            <i className='fa fa-facebook-square' style={{ fontSize : '36px' , color : '#349beb'}} />
                            <i className='fa fa-instagram' style={{ fontSize : '36px' , color : '#eb348c'}} />
                        </div>
                    </div>
                    <p className='col-12 text-right text-white align-self-end'>&copy; کپی رایت ۲۰۲۰ - طراح امید نشاطی</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;