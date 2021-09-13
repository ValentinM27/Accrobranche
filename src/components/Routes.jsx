import React, {Component} from 'react';

class Routes extends Component {
    render() {
        return (
            <div className="content">
                <h1>Nos parcours</h1>


                <div className="route-container">

                    {/* Début de l'élément */}
                    <div className="yellow-route">
                        <div className="route-detail">
                            <h1>Noob</h1>
                            <h2>Parcours adpaté à tous, parce qu'il faut bien commencer par quelques part 😉</h2>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="green-route">
                        <div className="route-detail">
                            <h1>Ez</h1>
                            <h2>Tu veux pas passer pour un débutant, dis le ! 😏</h2>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="blue-route">
                        <div className="route-detail">
                            <h1>Pro</h1>
                            <h2>Les choses sérieuses commencent ! 💪</h2>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="purple-route">
                        <div className="route-detail">
                            <h1>MVP</h1>
                            <h2>T'es le boss de l'accro'batie ! 👑</h2>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                    {/* Début de l'élément */}
                    <div className="red-route">
                        <div className="route-detail">
                            <h1>Godlike</h1>
                            <h2>T'es pas humain toi, t'es différent ! 🔥</h2>
                        </div>
                    </div>
                    {/* Fin de l'élément */}

                </div>


            </div>
        );
    }
}

export default Routes;