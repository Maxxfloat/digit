import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Routes from '../Routes';
import Footer from '../Footer';

import '../css/style.css'

class App extends React.Component {
    render(){
        return(
            <div className='myFont'>
                <BrowserRouter>
                    <Header />
                    <Routes />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;