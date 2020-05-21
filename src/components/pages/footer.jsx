import React from 'react';
import paypal from '../pictures/paypal.png';
import mastercard from '../pictures/mastercard.jpg';
import visa from '../pictures/visa.png';
import 'materialize-css/dist/css/materialize.min.css';
import './pageStyle.css';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#263238', color: 'white', minHeight: '28em', padding: '2em',marginTop:'2em' }}>
            <div className="row">
                <div className="col s12 l4">
                    <p style={{ fontWeight: '700', fontSize: '20px' }}>CODE.MARKET</p>
                    <p style={{ paddingTop: '10px', fontSize: '13px' }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quae inventore impedit aliquam consequuntur dolore iusto sit ducimus nostrum officiis natus earum, dolorum magni esse expedita ipsa? Perferendis, impedit. </p>
                </div>
                <div className="col s12 l8 footer_links">
                    <ul>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Contact us</a></li>
                        <li><a href='#'>Product</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="divider" style={{ margin: '3em 0 3em 0' }}></div>
            <div className="row" id="footer_bottom">
                <div className="col s12 l5 payment" style={{ display: 'inline-flex' }}>
                    <p>We accept</p>
                    <img src={visa} />
                    <img src={mastercard} />
                    <img src={paypal} style={{ height: '2em', width: '6em' }} />
                </div>
                <div className="col s12 l4"><p >support@code.market</p></div>
                <div className="col s12 l3"><p >&copy; 2020Codemarket.All rights reserved.</p></div>
            </div>
        </div>
    );
}

export default Footer;