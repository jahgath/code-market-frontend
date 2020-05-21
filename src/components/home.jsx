import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './pages/navbar';
import Sidenav from './pages/sidenav';
import Flutter from './pages/flutter';
import Ionic from './pages/ionic';
import ReactNative from './pages/reactNative';
import Footer from './pages/footer';
import '../index.css';

class Home extends Component {
    render() {
        return (
            <Router>
                <div >
                    <Navbar />
                    <div className="inlineDisplay">
                        <Sidenav />
                        <Switch>
                            <Route exact path="/home/" component={Flutter} />
                            <Route path="/home/react" component={ReactNative} />
                            <Route path="/home/ionic" component={Ionic} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Home;