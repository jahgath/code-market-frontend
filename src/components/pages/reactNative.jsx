import React from 'react';
import './pageStyle.css';
import Sortby from './sortby';
import Template from './template';

const ReactNative = () => {
    return (
        <div>
            <div className="heading" id="mobile-view">
                <p>REACT NATIVE TEMPLATES AND COMPONENTS</p>
            </div>
            <Sortby />
            <div className="content" id="mobile-view">
                <Template />
            </div>
        </div>
    );
}

export default ReactNative;