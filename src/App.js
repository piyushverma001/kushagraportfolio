import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home'
import './App.css';
import {Resume, Projects, Closing} from './components'
import axios from 'axios'
import {Route} from 'react-router-dom'
// import getValues from './API/api';

const API = "https://sheets.googleapis.com/v4/spreadsheets/1JAxII2tYVAgwYvrZYC0InUl2CzeuaGr8dgEjcm1C8pY/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=AIzaSyAyUAZH4DrflQ0jnHuOUPZPLQd7sCiK7pY";


const getValues= async()=> {

    const data=  await axios.get(API).then((response) => {
        let batchRowValues= response.data.valueRanges[0].values;
        const rows = [];
        for (let i = 1; i < batchRowValues.length; i++) {
            let rowObject = {};
            for (let j = 0; j < batchRowValues[i].length; j++) {
              rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
            }
            rows.push(rowObject);
          }
        return rows;
    })
    // console.log(data)
    return data;
   }


class App extends Component{
    constructor(){
        super();
    
        this.state = {
         items:[]
        };
    
      }

      async componentDidMount(){
          const value  = await getValues();
        //   console.log(value);
          this.setState({items:value})
          
      }

     

    render() {
        const values = this.state.items
        console.log(values)
        return(
            <>
            <CssBaseline>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" render={(props) => <Projects {...props} data={values} />}/>
                <Route path="/contact" component={Closing} />
            </CssBaseline>
            </>
        );
    }
};

export default App;