/* eslint-disable no-console */
console.log('hi');

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router , browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(<MuiThemeProvider><Router history ={browserHistory} routes={routes}/></MuiThemeProvider>,
  document.getElementById('app')
);
