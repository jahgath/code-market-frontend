import React from 'react';
import './pageStyle.css';
import Sortby from './sortby';
import TemplateIonic from './templateIonic';

const Ionic = () => {
        return (                
        <div>
            <div className="heading" id="mobile-view">
                <p>IONIC TEMPLATES AND COMPONENTS</p>
            </div>
                <Sortby />
            <div className="content" id="mobile-view">
                <TemplateIonic />
            </div>
        </div>
    );
}

export default Ionic;