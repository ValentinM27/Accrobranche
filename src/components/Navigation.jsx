import React from "react";
import {Link, withRouter} from "react-router-dom";

import logo_accrobatie from "../images/logo-accrobatie.png";

function Navigation (props) {
    return (
        <div className="navigation">

            <div className="navigation-logo">
                <Link to="/">
                    <img className="navigation-logo-detail" src={logo_accrobatie} alt="Logo Accro'batie" />
                </Link>
            </div>

            <nav className="navbar">
                <ul className="navigation-list">
                    <li className="navigation-list-element">
                        <Link to="/about">
                            Qui sommes-nous ?
                        </Link>
                    </li>
                    |
                    <li className="navigation-list-element">
                        <Link to="/routes">
                            Nos parcours
                        </Link>
                    </li>
                    |
                    <li className="navigation-list-element">
                        <Link to="/activities">
                            Nos services et activités
                        </Link>
                    </li>
                    |
                    <li className="navigation-list-element">
                        <Link to="/contact">
                            Contact et reservation
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default withRouter(Navigation);