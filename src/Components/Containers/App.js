import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Header from '../Mainpage/Header';
import Index from '../Mainpage/Index';
import Footer from '../Mainpage/Footer';
import Signup from '../Registrypages/Signup';

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
                    <Route path='/' exact>
                        <Index/>
                    </Route>
                    <Route path='/signup' component={Signup} />
                </Switch>
                <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;