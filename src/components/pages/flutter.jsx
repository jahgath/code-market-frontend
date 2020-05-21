import React from 'react';
import './pageStyle.css';
import Sortby from './sortby';
import Template from './template';

const Flutter = () => {
        return (
        <div id="mobile-view">
            <div className="heading">
                <p>FLUTTER TEMPLATES AND COMPONENTS</p>
            </div>
            <Sortby />
            <div className="content">
                <Template />
            </div>
        </div>
    );
}

export default Flutter;