import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Scotch Cars</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/cars" activeClassName="active">Cars</NavLink></li>
                                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main