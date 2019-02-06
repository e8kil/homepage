import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Navigation.css';
import '../components/HumansAndAnimals'
import '../components/Nature'
import '../components/Macro'
import '../components/Other'

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="Navigation-ul">
                    <li className="Navigation-item">
                        <Link to="/">Hjem</Link>
                    </li>
                    <li className="Navigation-item">
                        <div className="dropdown">
                            <button className="dropbtn" type="button" data-toggle="dropdown">Bilder
                            <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/humansAndAnimals">Mennesker og dyr</Link>
                                <Link to="/Nature">Natur</Link>
                                <Link to="/Macro">Makro</Link>
                                <Link to="/Other">Annet</Link>
                            </div>
                        </div>
                    </li>
                    <li className="Navigation-item">
                        <Link to="/About">Om meg</Link>
                    </li>                    
                </ul>
            </div>
        );
    }
}

export default Navigation;
