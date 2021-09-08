import React from "react";
import {Link, withRouter} from "react-router-dom";

function Navigation (props) {
    return (
        <div className="navigation-container">
            <nav>
                <ul className="navigation-list">
                    <li className="navigation-list-element">
                        <Link to="/about">
                            Qui sommes-nous ?
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default withRouter(Navigation);