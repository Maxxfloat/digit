import React from "react";
import { Switch , Route } from 'react-router-dom'

import index from '../Containers'
import Login from '../Components/Login';
import Registry from '../Components/Registry';
import Instagram from '../Components/Services/Instagram'
import Copywriting from '../Components/Services/Copywriting'
import Seo from '../Components/Services/Seo'
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