import React, {Component} from 'react';
import NumericInput from "react-numeric-input";
import {Link} from "react-router-dom";

class Informations extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <form action="mailto:Valentin.Marguerie@iut-dijon.u-bourgogne.fr" encType="text/plain" method="post" className="contact-form">

                        <div className="contact-form-info">
                            <select id="contact-form-gender">
                                <option value="Male">M</option>
                                <option value="Female">Mme</option>
                                <option value="Other">Autres</option>
                            </select>

                            <input type="text" placeholder="Prénom" name="Firstname" id="lastname" required/>
                            <input type="text" placeholder="Nom" name="Lastname" id="lastname" required/>
                        </div>

                        <div className="contact-form-date">
                            <label htmlFor="Age">Votre âge</label>
                            <NumericInput name="Age" min={7} max={130} value={30} />
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

export default Informations;