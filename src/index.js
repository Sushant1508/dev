/* eslint-disable no-console */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, browserHistory,Route} from 'react-router-dom';
import RouteConfig from './routes';
import './styles/styles.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/mui.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

render(<MuiThemeProvider><RouteConfig/></MuiThemeProvider>,
  document.getElementById('app')
);
