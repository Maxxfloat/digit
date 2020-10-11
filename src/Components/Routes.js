import React from "react";
import { Switch , Route } from 'react-router-dom'

import index from './Containers'
import Login from './Login';
import Registry from './Registry';
import Instagram from './Services/Instagram'
import Copywriting from './Services/Copywriting'
import Seo from './Services/Seo'
import Services from "./Services";



const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={index} />
            <Route path='/login' component={Login} />
            <Route path='/registry' component={Registry} />
            <Route path='/services' component={Services} />
            <Route path='/instagram' component={Instagram} />
            <Route path='/seo' component={Seo} />
            <Route path='/copywriting' component={Copywriting} />
        </Switch>
    )
}

export default Routes;