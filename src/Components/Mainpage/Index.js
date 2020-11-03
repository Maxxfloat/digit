import React from 'react';
import {Link} from 'react-router-dom';

import Auth from '../Containers/Auth'
import Banner from './Indexcomponents/Banner';
import Skills from './Indexcomponents/Skills';
import Projects from './Indexcomponents/Projects';
import Team from './Indexcomponents/Team';



class Index extends React.Component {
    render(){
        return (
            <>
                <Link to='/auth'>auth</Link>
                <Auth />
                <Banner/>
                <Skills/>
                <Projects/>
                <Team/>
            </>
        )

    }
}

export default Index;