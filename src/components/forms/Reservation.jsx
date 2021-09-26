import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Reservation extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <form action="mailto:Valentin.Marguerie@iut-dijon.u-bourgogne.fr" encType="text/plain" method="post" className="contact-form">

                        <h2>
                            Je souhaite réserver !
                        </h2>

                        <input type="mail"  placeholder="Votre mail" name="mail" id="mail" required/>

                        <div className="contact-form-info">
                            <span className="contact-form-info-reponsive-child">
                                <select id="contact-form-gender">
                                <option value="Male">M</option>
                                <option value="Female">Mme</option>
                                <option value="Other">Autres</option>
                                </select>

                                <input type="text" placeholder="Prénom" name="Firstname" id="lastname" required/>
                            </span>

                            <input type="text" placeholder="Nom" name="Lastname" id="lastname" required/>
                        </div>

                        <div className="contact-form-date">
                            <span className="contact-form-date-element">
                                <label className="contact-form-date-text" htmlFor="start">Date de début:</label>
                                <input className="contact-form-date-input" type="date" id="start" name="trip-start" required/>
                            </span>

                            <span className="contact-form-date-element">
                                <label className="contact-form-date-text" htmlFor="start">Date de fin (falcultatif):</label>
                                <input className="contact-form-date-input" type="date" id="end" name="trip-end"/>
                            </span>
                        </div>


                        <textarea placeholder="Informations supplémentaires (Nombre de personnes, enfants, parcours choisi ... )" name="informations"
                                  id="contact-form-comment" cols="40" aria-autocomplete="list" aria-haspopup="true"/>

                        <div className="contact-form-confidential-container">
                            <input type="checkbox" id="termes" name="termes" required/>
                            <label  htmlFor="termes">J'affirme avoir pris connaisance de la
                                <Link className="contact-form-confidential " to="/confidential">
                                    politique de confidentialité
                                </Link>
                            </label>
                        </div>


                        <input className="contact-form-submit" type="submit"/>
                    </form>
                </fieldset>
            </div>
        );
    }
}

export default Reservation;