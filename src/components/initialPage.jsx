import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";
import '../index.css';

class InitialPage extends Component{
    componentDidMount() {
        M.AutoInit();
    }
    render(){
        return(
                <div>
                <nav>
                    <div className="nav-wrapper white z-depth-1">
                        <a href="#" className="brand-logo black-text" style={{marginLeft:'8em'}}>Logo</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" className="black-text">CodeMarket</a></li>
                            <li><a href="#" className="black-text">Projects</a></li>
                            <li><a href="#" className="black-text">Portfolio</a></li>
                            <li><a href="#" className="black-text">About Us</a></li>
                        </ul>
                    </div>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </nav>
                <div className="row" style={{marginTop:'9em'}}>
                    <div className="col l8 center-align" style={{marginLeft:'3em'}}>
                        <p style={{ fontSize: '33px',fontWeight:'' }}>Who We Are ?</p>
                        <p style={{ marginTop: '-1em' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia odio <br />rerum voluptatibus?</p>
                    </div>
                    <div className="col l3 white-text initial_page">
                        <div className="center-align" style={{margin:'2em 1em 1em 1em'}}>
                            <p style={{fontSize:'12px', fontWeight:'500'}}>Have a project that u wanna implement ?
                            <br/>Can't find the right people?
                            <br/>Send us a email regarding your project and we will go through find the right developers and get the job done</p>
                            <Link to="/home/" className="btn btn-primary white black-text">Proceed to Code.Market</Link>  
                        </div>                     
                    </div>
                </div>
            </div> 
        );
    }
}

export default InitialPage;