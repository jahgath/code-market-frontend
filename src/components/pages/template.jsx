import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import './pageStyle.css';

class Template extends Component {
    constructor() {
        super();
        this.state = {
            templates: [
                {   id: '1',
                    icon: require('../pictures/headingimg.png'), 
                    heading: 'abc', 
                    subheading: 'xyz', 
                    price: '6.0', 
                    downloads: 10, 
                    reviews: 5,                                        
                    about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae et ipsa voluptatum nihil ad veniam perferendis tempore sed ullam quaerat enim, porro officia fugit fugiat illum harum. Ducimus nostrum sit culpa adipisci quaerat ipsum doloribus quis, exercitationem, aut cupiditate facilis harum velit porro deserunt, iusto eum voluptas. Dicta deleniti asperiores eius iste magni perferendis dolorem veniam mollitia voluptate, corrupti quia aliquam est consectetur. Ullam ipsum itaque placeat et quasi ratione sapiente id modi adipisci nisi, eius mollitia voluptates facilis repudiandae quibusdam cumque! Numquam, voluptatibus voluptates! Facilis perspiciatis eos voluptatem, aliquam harum itaque quam atque nihil quibusdam saepe, doloremque neque?'                                          
                },
                {   id: '2', 
                    icon: require('../pictures/headingimg.png'), 
                    heading: 'efg', 
                    subheading: 'pqr', 
                    price: '12.0', 
                    downloads: 17, 
                    reviews: 9,                      
                    about: 'nwkehcieowhfinckwnweihjf9eufowevmckw klewjvoqj' 
                },
                {   id: '3', 
                    icon: require('../pictures/headingimg.png'), 
                    heading: 'hij', 
                    subheading: 'uvw', 
                    price: '8.0', 
                    downloads: 15, 
                    reviews: 14,                      
                    about: 'nwkehcieowhfinckwnweihjf9eufowevmckw klewjvoqj' 
                },
            ]
        }
    }

    componentDidUpdate() {
        let carousel = document.querySelectorAll(".carousel .carousel-slider");
        M.Carousel.init(carousel, {
            fullWidth: true
        });
    }

    render() {
        const display_template = this.state.templates.map(template => {
            const { icon, heading, subheading, price, downloads, reviews, about } = template
            return (
                <div className="templates" id="mobile-view" style={{ marginBottom: '1em' }}>
                    <div className="row template_heading">
                        <div className="col l1" style={{ paddingTop: '1.5em' }}>
                            <img src={icon} />
                        </div>
                        <div className="col l8" id="name" style={{ marginLeft: '1.5em', paddingTop: '1.5em' }}>
                            <p style={{ fontWeight: '700', fontSize: '16px'  }}>
                                {heading}
                            </p>
                            <p style={{ marginTop: '-14px', fontSize: '13px'}}>
                                {subheading}
                            </p>
                        </div>
                        <div className="col l2 right btnhover" >
                            <a className="waves-effect waves-light btn"
                                style={{ width: '10em', fontWeight: '600', fontSize: '15px' }}
                            >
                                GET  |  ${price}
                            </a>
                            <p style={{ fontSize: '13px', textAlign: 'center', margin: '8px 0 0 20px' }}>
                                {downloads} Downloads
                            </p>
                            <div id="stars" style={{ fontSize: '13px' }}>
                                <span className="fa fa-star fa-lg checked"></span>
                                <span className="fa fa-star fa-lg checked"></span>
                                <span className="fa fa-star fa-lg checked"></span>
                                <span className="fa fa-star fa-lg checked"></span>
                                <span className="fa fa-star fa-lg checked"></span>
                            </div>
                            <p style={{ fontSize: '13px', textAlign: 'center', margin: '4px 0 0 20px' }}>
                                {reviews} Reviews
                            </p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="template_pics">
                        <div className="carousel carousel-slider">
                            <a className="carousel-item"><img src={require("../pictures/demo1.png")}/></a>
                            <a className="carousel-item"><img src={require("../pictures/demo1.png")}/></a>
                            <a className="carousel-item"><img src={require("../pictures/demo1.png")}/></a>
                            <a className="carousel-item"><img src={require("../pictures/demo1.png")}/></a>
                            <a className="carousel-item"><img src={require("../pictures/demo1.png")}/></a>
                        </div>
                    </div>
                    <div style={{ padding: '0 1em 1em 1em', marginTop: '-3em'}}>
                        <ReadMoreReact text={about}
                            min={290}
                            ideal={300}
                            max={320}
                        />
                    </div>
                </div>
            )
        })
        return (
            <div>
                {display_template}
            </div>
            
        );
    }
}

export default Template;