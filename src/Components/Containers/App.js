import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Header from '../Mainpage/Header';
import Index from '../Mainpage/Index';
import Footer from '../Mainpage/Footer';
import Signup from '../Registrypages/Signup';
import MainServicesPage from '../Services/MainServicesPage'

class App extends React.Component {
    state = {
        signUp : false
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                <Header signUp={this.state.signUp} />
                <Switch>
                    <Route path='/' exact component={Index} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/services' component={MainServicesPage} />
                </Switch>
                <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;