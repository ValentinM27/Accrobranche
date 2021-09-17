import React, {Component} from 'react';
import NumericInput from 'react-numeric-input';

class Contact extends Component {
    render() {
        return (
            <div className="content">
                <h1>Demande de renseignements et réservation</h1>

                <div className="contact">
                    <fieldset>
                        <form action="mailto:Valentin.Marguerie@iut-dijon.u-bourgogne.fr" encType="text/plain" method="post" className="contact-form">
                            <div className="contact-form-radio">
                                <input type="radio" id="Reservation" name="Reservation" value="Reservation" checked />
                                <label htmlFor="Reservation">Réservation</label>
                                <input type="radio" id="Demande" name="Reservation" value="Demande" />
                                <label htmlFor="Demande">Demande d'information</label>
                            </div>

                            <div className="contact-form-info">
                                <input type="text" placeholder="prénom" name="firstname" id="lastname" required/>
                                <input type="text" placeholder="nom" name="lastname" id="lastname" required/>
                            </div>

                            <label htmlFor="Age">Votre âge</label>
                            <NumericInput min={7} max={130} value={30} />

                            <div className="contact-form-text">
                                <label htmlFor="informations">Informations supplémentaires (Nombre de personnes, enfants, parcours choisi ... </label>
                                <textarea></textarea>
                            </div>

                            <input type="submit"/>
                        </form>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Contact;