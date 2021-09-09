import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import logo_accrobatie from "../images/logo-accrobatie.png";

function Navigation (props) {

    const [toggleMenu, setToggleMenu ] = useState(false);
    const [ largeur, setLargeur ] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect( () => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 700) {
                setToggleMenu(false);
            }
        }

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        }
    }, [])

    return (
        <div className="navigation">

            <div className="navigation-logo">
                <Link to="/">
                    <img className="navigation-logo-detail" src={logo_accrobatie} alt="Logo Accro'batie" />
                </Link>
            </div>

            <nav className="navbar">
                {(toggleMenu || largeur > 700) &&
                (
                    <ul className="navigation-list">
                        <li className="navigation-list-element">
                            <Link className="nav-link" to="/about">
                                Qui sommes-nous ?
                            </Link>
                        </li>

                        <li className="navigation-list-element">
                            <Link className="nav-link" to="/routes">
                                Nos parcours
                            </Link>
                        </li>

                        <li className="navigation-list-element">
                            <Link className="nav-link" to="/activities">
                                Nos services et activités
                            </Link>
                        </li>

                        <li className="navigation-list-element">
                            <Link className="nav-link" to="/contact">
                                Contact et reservation
                            </Link>
                        </li>
                    </ul>
                )}
                <div className="navigation-button-container">
                    <button onClick={toggleNavSmallScreen} className="navigation-button">MENU</button>
                </div>
            </nav>

        </div>
    )
}

export default withRouter(Navigation);