import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component{
  render(){
    return(
      <div> <div> You are in about Page !!</div>

        <Link to="home">To Home Page</Link>
      </div>
    )
  }

}
export default AboutPage;
