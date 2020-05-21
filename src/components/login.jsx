import React, { Component } from 'react';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import '../index.css';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Login extends Component{
    componentDidMount() {
        M.AutoInit();
    }
    render(){
        return(
            <div>
                <Navbar />
                <div className="login">
                    <div style={{padding:'2em 2em 0 2em'}}>
                        <ul className="tabs">
                            <li className="tab col s3">
                                <a href="#signin" className="black-text">Sign In</a>
                            </li>
                            <li className="tab col s3" >
                                <a href="#signup" className="black-text">Sign Up</a>
                            </li>
                        </ul>
                        <div className="divider"></div>
                    </div>
                    <div id='signin' style={{marginTop:'-1em'}}>
                        <p style={{padding:'1em 0 0 1em', fontWeight:'700', fontSize:'28px'}}>
                            Sign In
                        </p>
                        <div className="row" style={{ padding: '1em 0 2em 2em', marginTop:'-1em' }}>
                            <form className="col s12" style={{ marginTop: '-1em' }}>
                                <div className="row" >
                                    <div className="input-field col s11 l4">
                                        <input id="email" type="email" className="validate" />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s11 l4" >
                                        <input id="password" type="password" className="validate" />
                                        <label for="password">Password</label>
                                    </div>
                                </div>    
                                <div className="row" style={{ padding:'5px 0 0 10px' }}>
                                    <input type="submit" className="btn" value="sign in" style={{textTransform:'capitalize'}}/>
                                </div>
                            </form>
                            <a href='#' style={{ color:'#212121'}}>forgot password?</a>                    
                        </div>
                    </div>                
                    <div id='signup'>
                        <p style={{ padding: '1em 0 0 1em', fontWeight: '700', fontSize: '28px' }}>
                            Sign Up
                        </p>
                        <div className="row" style={{ padding: '1em 0 0 2em'}}>
                            <form className="col s12" style={{ marginTop: '-1em' }}>
                                <div className="row">
                                    <div className="input-field col s12 l4">
                                        <input id="email" type="email" className="validate" />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row" style={{ padding: '5px 0 0 10px' }}>
                                    <input type="submit" className="btn" value="sign up" style={{ textTransform: 'capitalize' }}/>
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;