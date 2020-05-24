import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./initialpage.css";

class InitialPage extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="body">
        <nav>
          <div className="nav-wrapper z-depth-1">
            <a href="#" className="brand-logo ">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/home/" className="text">
                  Code Market
                </a>
              </li>
              <li>
                <a href="#" className="text">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </nav>
        <div className="row">
          <div className="col s12 center-align ">
            <div className="section">
              <p className="headerone">Who are we ?</p>
            </div>
          </div>

          <div className="col s12 m12 l6 center-align">
            <img
              className="imageone responsive-img"
              src={require("../pictures/undraw.svg")}
            />
          </div>
          <div className="col s12 m12 l6 center-align headertext">
            <p>
              "We'll handle your projects Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InitialPage;
