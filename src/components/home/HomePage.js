import React from 'react';
import {Link} from 'react-router-dom';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

class HomePage extends React.Component{
    render(){
      return(
      <div >
      <div className="jumbotron"><DatePicker hintText="Portrait Dialog" mode="landscape"/></div>
      <Link to="about"><FlatButton label="Learn More"/></Link>
      </div>
      );
    }

}

export default HomePage;
