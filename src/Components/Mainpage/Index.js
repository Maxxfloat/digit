import React from 'react';

import Banner from './Indexcomponents/Banner';
import Skills from './Indexcomponents/Skills';
import Projects from './Indexcomponents/Projects';
import Team from './Indexcomponents/Team';



class Index extends React.Component {
    render(){
        return (
            <>
                <Banner/>
                <Skills/>
                <Projects/>
                <Team/>
            </>
        )

    }
}

export default Index;