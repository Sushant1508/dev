import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TableExampleSimple from '../components/customTable'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class About extends Component {
    render(){
        return (<h1>About Page</h1>);
    }
}

export default About