import React, { Component } from 'react';
import './pageStyle.css';
import { NavLink } from 'react-router-dom';
import M from "materialize-css";

export default class Sidenav extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div className="">
                <div className="hide-on-med-and-down sidenavbar1" id="sidebar">
                    <p style={{ fontWeight: '500', margin: '1em', paddingTop: '8px' }}>CATEGORIES</p>
                    <div className="divider" style={{ margin: '0 10px 0 10px' }}></div>
                    <div className="sidenav_links">
                        <ul className="collapsible">
                            <li className="active">
                                <div className="collapsible-header"><NavLink to="/home/" >Flutter</NavLink></div>
                                <div className="collapsible-body">                                    
                                    <a>Link1</a><br/>
                                    <a style={{paddingTop:'1em'}}>Link2</a>                                    
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><NavLink to="/home/react" >React Native</NavLink></div>
                                <div className="collapsible-body">                                    
                                    <a>Link1</a><br />
                                    <a>Link2</a>                                    
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><NavLink to="/home/ionic" >Ionic</NavLink></div>
                                <div className="collapsible-body">                                    
                                    <a>Link1</a><br />
                                    <a>Link2</a>                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
