import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './pageStyle.css';

export default class Navbar extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div>
                <nav className="nav-extended white">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo black-text">Code-Market</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/login" target="_blank" className="black-text">Login</NavLink></li>
                            <li><a className="black-text">Email us</a></li>
                        </ul>
                        <form className=" hide-on-med-and-down" >
                            <div className="input-field">
                                <input id="search" type="search" placeholder="Search Templates" />
                                <label className="label-icon" for="search"><i className="material-icons grey-text" style={{ marginTop: '-.5em' }}>search</i></label>
                            </div>
                        </form>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab disabled" style={{margin:'-1em 0 0 .5em'}}><p className="black-text" style={{fontSize:'16px'}}>Categories |</p></li>
                            <li className="tab"><NavLink to="/home/" target="_self" className="black-text">Flutter</NavLink></li>
                            <li className="tab"><NavLink to="/home/react" target="_self" className="black-text">React Native</NavLink></li>
                            <li className="tab"><NavLink to="/home/ionic" target="_self" className="black-text">Ionic</NavLink></li>
                        </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="slide-out" style={{height:'8em'}}>
                    <li><NavLink to="/login" target="_blank">Login</NavLink></li>
                    <li><a href="#">Email us</a></li>
                </ul>                
            </div>

        )
    }
}