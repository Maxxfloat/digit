import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Components/Header';
import Routes from '../Components/Routes';
import Footer from '../Components/Footer';

class App extends React.Component {
    render(){
        return(
            <div>
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