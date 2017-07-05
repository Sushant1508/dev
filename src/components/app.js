import React,{PropTypes} from 'react';
//import {Route , IndexRoute,Link} from 'react-router-dom';
import AboutPage from './about/AboutPage';
import HomePage from './home/HomePage';
import FlightCardComponent from './core/FlightCardComponent';
import FlatButton from 'material-ui/FlatButton';

class App extends React.Component{
render(){
    return(
      <div className="container-fluid">
      <h2 style={{marginLeft:'20px'}}>Itinerary Page</h2>
          <FlightCardComponent/>
      </div>
    );
  }
}


export default App;
