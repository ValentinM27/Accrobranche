import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-detail">
                    <h1>Accro'batie</h1>
                    <h2>Avec nous, vous serez accros à la hauteur !</h2>
                    <Link to="/about">
                        En savoir plus sur nous !
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;