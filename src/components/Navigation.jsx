import React from "react";
import {Link, withRouter} from "react-router-dom";

function Navigation (props) {
    return (
        <div className="navigation">

            <div className="navigation-logo">
                <h1>Accrobranche</h1>
            </div>

            <nav className="navbar">
                <ul className="navigation-list">
                    <li className="navigation-list-element">
                        <Link to="/about">
                            Qui sommes-nous ?
                        </Link>
                    </li>

                    <li className="navigation-list-element">
                        <Link to="/routes">
                            Nos parcours
                        </Link>
                    </li>

                    <li className="navigation-list-element">
                        <Link to="/activities">
                            Nos services et activités
                        </Link>
                    </li>

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