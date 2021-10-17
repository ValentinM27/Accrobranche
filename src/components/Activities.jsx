import React, {Component} from 'react';
import listPass from "../Helpers/listPass";

class Activities extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
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
                                    <td colSpan="4" align="center">Tarif Pass'Partout + Prix de la cabanne choisi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default Activities;