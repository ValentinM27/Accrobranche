import React, {Component} from 'react';
import listPass from "../Helpers/listPass";

class Activities extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const scrollToTop = () =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        return (
            <div className="content">
                <h1>Nos Services et Activités</h1>

                <div className="pass-container">
                    <h2>Nos Pass</h2>

                    {listPass.map((pass) =>(
                        <div>
                            <h3 key={pass.id}>{pass.name}</h3>
                            <p>{pass.description}</p>
                        </div>
                    ))}

                    <div className="table-wrapper">
                        <table className="fl-table">
                            <thead>
                                <tr>
                                    <th>Pass</th>
                                    <th>-6 ans</th>
                                    <th>6-12 ans</th>
                                    <th>12-18 ans</th>
                                    <th>Plein tarif</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pass'age</td>
                                    <td>*</td>
                                    <td>4€</td>
                                    <td>6€</td>
                                    <td>8€</td>
                                </tr>
                                <tr>
                                    <td>Im'pass</td>
                                    <td>*</td>
                                    <td>8€</td>
                                    <td>12€</td>
                                    <td>16€</td>
                                </tr>
                                <tr>
                                    <td>Pass'taga</td>
                                    <td>6€</td>
                                    <td>16€</td>
                                    <td>22€</td>
                                    <td>28€</td>
                                </tr>
                                <tr>
                                    <td>Pass'partout</td>
                                    <td>6€</td>
                                    <td>19€</td>
                                    <td>26€</td>
                                    <td>32€</td>
                                </tr>
                                <tr>
                                    <td>Pass'port</td>
                                    <td colSpan="4" align="center">Tarif Pass'Partout + Prix de la cabane choisi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="restaurant-container">
                    <h2>Notre restaurant</h2>
                    <p>
                        Pour pouvoir vous restaurer après une longue journée dans les arbres ! <br />
                        <a href="https://drive.google.com/file/d/1W_VHP43B02UpyzZTPdqLkG7hkzYlz7uG/view?usp=sharing" rel="noreferrer" target="_blank">Cliquez pour voir notre carte</a>
                    </p>

                    <h2>Nos cabanes</h2>
                    <p>
                        Vous souhaitez rester pour profiter tout nos services et parcours, pas de problèmes, passez une nuit (ou plusieurs) en hauteur !<br />
                        <a href="https://drive.google.com/file/d/1pfvBy0xBMc8yYsDVYUCMthw1NFhYz9ah/view?usp=sharing" rel="noreferrer" target="_blank">Cliquez pour voir nos offres cabanes</a>
                    </p>

                    <h2>Pour les enfants, l'Accro'Kid</h2>
                    <p>
                        Un parcours déstiné aux enfants, ainsi que des mini-jeux encadrés par nos animateurs. Prix demi journée de 12€ pour les enfants allant de 3 à 7 ans.
                    </p>
                </div>

                <div className="bottom-button-container">
                    <button className="bottom-button" onClick={scrollToTop}>Retourner en haut</button>
                </div>
            </div>
        );
    }
}

export default Activities;