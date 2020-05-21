import React, { Component } from 'react'
import './pageStyle.css';

class Sortby extends Component {
    render() {
        return (
            <div className="">
                <div className="sortby" id="mobile-view" >
                    <p style={{ fontSize: 'small' }}>SORT BY : </p>
                    <a class="waves-effect waves-light btn ">Popular</a>
                    <a class="waves-effect waves-light btn ">Best</a>
                    <a class="waves-effect waves-light btn ">New</a>
                    <a class="waves-effect waves-light btn ">Price low to high</a>
                    <a class="waves-effect waves-light btn ">Price high to low</a>
                    <a class="waves-effect waves-light btn ">Oldest</a>
                </div>
            </div>
        );
    }
}

export default Sortby;