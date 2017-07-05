import React from 'react';
import {BrowserRouter,Route,browserHistory} from 'react-router-dom';
import App from './components/app';

import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';



const RouteConfig =(props)=>{
  return(
  <BrowserRouter history ={browserHistory} >
   <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/home" component={HomePage}/>
      
   </div>
  </BrowserRouter>
  );
};

export default RouteConfig;
