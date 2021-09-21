import React, {Component} from 'react';
import Reservation from "./forms/Reservation";
import Informations from "./forms/Informations";

class Contact extends Component {

    constructor() {
        super();

        this.state = {
            showReservation: true,
            showInfo: false
        }
    }

    hideComponent(name) {
        switch (name) {
            case "Reservation":
                this.setState({
                    showReservation: true,
                    showInfo: false
                })
                break;

            case "Info":
                this.setState({
                    showReservation: false,
                    showInfo: true
                })
                break;

            default:
                return 0;
        }
    }

    render() {
        const { showReservation, showInfo } = this.state;
        return (
            <div className="content">
                <h1>Demande de renseignements et réservation</h1>
                <button onClick={() => this.hideComponent("Reservation")}>Reservation</button>
                <button onClick={() => this.hideComponent("Info")}>Demandes d'informations</button>
                <div className="contact">
                    {showReservation && <Reservation/> }
                    {showInfo && <Informations />}
                </div>
            </div>
        );
    }
}

export default Contact;