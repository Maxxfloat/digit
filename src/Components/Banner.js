import React from 'react';
import {Link} from 'react-router-dom'

const Banner = () => {
    return (
        <section>
            <div className='constainer-fluid'>
                <div style={{height : '100vh', backgroundColor : 'cyan', margin: '0'}} className='row justify-content-center align-items-center'>
                    <div className='col-sm-10 text-center'>
                        <h1>Banner</h1>
                        <h2>sub</h2>
                        <Link className='btn btn-outline-warning ml-2'>خدمات</Link>
                        <Link className='btn btn-outline-danger'>درباره ما</Link>
                    </div>
                </div>
            </div> 
 


        </section>
    )
}

export default Banner;