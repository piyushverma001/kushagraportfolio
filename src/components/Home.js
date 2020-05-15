import React, {Component} from 'react';
import {Title, Header, Particle} from '../components';


class Home extends Component{
    render() {
        return(
           
            <div>
                <Title />
                <Header />
                <Particle/>
            </div>
            
        );
    }
};

export default Home;