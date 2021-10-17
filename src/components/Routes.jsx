import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Routes extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="content">
                <h1>Nos parcours</h1>

                <p>Fort d'une grande expérience, nous avons développé 5 parcours de niveaux différents, <br />
                    permettant à petits et grand de venir relever le défi Accro'batie 🔥</p>

                <div className="route-container">

                    {/* Début de l'élément */}
                    <div className="yellow-route">
                        <div className="route-detail">
                            <h1>Noob</h1>
                            <h2>Parcours adpaté à tous, parce qu'il faut bien commencer par quelque part 😉</h2>
                            <Link to="/contact">
                                Je réserve !
                            </Link>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="green-route">
                        <div className="route-detail">
                            <h1>Ez</h1>
                            <h2>L'heure de sauter dans le grand bain ! 💪</h2>
                            <Link to="/contact">
                                Je réserve !
                            </Link>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="blue-route">
                        <div className="route-detail">
                            <h1>Pro</h1>
                            <h2>Les choses sérieuses commencent ! 💪</h2>
                            <Link to="/contact">
                                Je réserve !
                            </Link>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="purple-route">
                        <div className="route-detail">
                            <h1>MVP</h1>
                            <h2>T'es le boss de l'accro'batie ! 👑</h2>
                            <Link to="/contact">
                                Je réserve !
                            </Link>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="red-route">
                        <div className="route-detail">
                            <h1>Godlike</h1>
                            <h2>Officielement la légende de l'Accro'Batie ! 🔥</h2>
                            <Link to="/contact">
                                Je réserve !
                            </Link>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                </div>

                <div className="bottom-page-link">
                    <Link to="/contact">
                        Demande de renseignements
                    </Link>
                </div>

            </div>
        );
    }
}

export default Routes;