import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home'
import './App.css';
import {Resume, Projects} from './components'

import {Route} from 'react-router-dom'



class App extends Component{
    render() {
        return(
            <>
            <CssBaseline />
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
            </>
        );
    }
};

export default App;