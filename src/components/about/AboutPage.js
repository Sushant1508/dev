import React from 'react';
import {NavLink} from 'react-router-dom';

class AboutPage extends React.Component{
  render(){
    return(
      <div>
        <div> You are in about Page !!</div>
        <NavLink to="home">To Home Page</NavLink>
      </div>
    );
  }

}
export default AboutPage;
