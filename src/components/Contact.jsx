import React, {Component} from 'react';
import Reservation from "./forms/Reservation";
import Informations from "./forms/Informations";

class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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
                <div className="contact-buttons">
                    <button onClick={() => this.hideComponent("Reservation")}>Reservation</button>
                    <button onClick={() => this.hideComponent("Info")}>Demande d'informations</button>
                </div>

                <div className="contact">
                    {showReservation && <Reservation/> }
                    {showInfo && <Informations />}
                </div>
            </div>
        );
    }
}

export default Contact;