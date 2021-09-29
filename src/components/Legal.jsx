import React, {Component} from 'react';

class Legal extends Component {
    render() {
        return (
            <div className="content">
                <h1>
                    Mentions légales
                </h1>

                <p>
                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie
                    numérique,
                    il est précisé aux utilisateurs du site Accrobatie.fr l’identité des différents intervenants dans
                    le cadre de sa réalisation et de son suivi.
                </p>

                <span className="group">

                <h2 id="titreEdit">Edition du site:</h2>

                <p>
                    Le site Accorbatie.fr est édité par le groupe de Jakova Inc. Entreprise de développement informatique.
                </p>

            </span>

            <span className="group">

                <h2 id="titreResp">Responsable de publication:</h2>

                <p>
                    Entièreté du groupe des membres de Jakova Inc.
                </p>

            </span>

            <span className="group">

                <h2 id="titreHeb">Hébergeur:</h2>

                <p>
                    L'hébergement du site est opérée par GitHub <a
                    href="https://valentinm27.github.io/Accrobranche/#/">Lien du site.</a>
                    Le stockage des données personnelles des utilisateurs est exclusivement réalisé sur ces serveurs.
                </p>

            </span>

            <span className="group">

                <h2 id="titreContact">Nous contacter:</h2>

                <p>
                    MARGUERIE Valentin | <a className="contact"
                                            href="mailto:Valentin_Marguerie@etu.u-bourgogne.fr">Valentin_Marguerie@etu.u-bourgogne.fr</a>
                </p>

            </span>

            <span className="group">

                <h2 id="titreCNIL">CNIL:</h2>

                <p>
                    Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’Utilisateur dispose d’un droit d’accès, de modification et de suppression des informations collectées par witchssound.fr.
                    Pour exercer ce droit, il reviendra à l’Utilisateur d’envoyer un message à l’adresse suivante : <a
                    className="contact" href="mailto:Valentin_Marguerie@etu.u-bourgogne.fr">Support</a>
                </p>

            </span>
            </div>
        );
    }
}

export default Legal;