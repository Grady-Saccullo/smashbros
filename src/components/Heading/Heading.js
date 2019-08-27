import React, { Component } from 'react'
import logo from '../../static/logo.png'
import './styles.css';

class Heading extends Component {
    render() {
        return (
            <div className="img-container">
                <img src={logo} alt="Super Smash Bros Logo" />
            </div>
        );
    }
}

export default Heading;