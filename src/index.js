/* eslint-disable no-console */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
//import {BrowserRouter as Router, browserHistory,Route} from 'react-router-dom';
import RouteConfig from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './styles/styles.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/mui.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


const store= configureStore();


render(<Provider store={store}><MuiThemeProvider><RouteConfig/></MuiThemeProvider></Provider>,
  document.getElementById('app')
);
