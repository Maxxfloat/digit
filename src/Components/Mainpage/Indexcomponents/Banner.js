import React from 'react';
import { Container } from 'react-bootstrap';


const Banner = () => {
    return (
        <section>
            <Container fluid style={{backgroundColor : 'cyan'}}>
                <div className='row align-items-center justify-content-center vh-100'>
                    <div className='col text-center'>
                        <h1 className='my-4' style={{color : 'red'}}>مشهور بشید،سریع رشد می‌کنید</h1>
                        <button type='button' className='btn btn-primary mx-2' >ما چیکار می‌کنیم</button>
                        <button type='button' className='btn btn-primary mx-2' >خدمات</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner;