import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Footer(props) {
    return (
        <div className="footer">
            <ul className="footer-list">
                <li className="footer-list-element">
                    <Link to="/confidential" >
                        Politique de confidentialité
                    </Link>
                </li>

                <li className="footer-list-element">
                    <Link to="/legal" >
                        Mentions légales
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(Footer);