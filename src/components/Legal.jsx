import React, {Component} from 'react';

class Legal extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.body.style.backgroundColor = "#1F1B24"
    }

    render() {
        return (
            <div className="content">
                <div className="conf-legal">
                    <h1>
                        Mentions légales
                    </h1>

                    <p>
                        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie
                        numérique,
                        il est précisé aux utilisateurs du site Accrobatie.fr l’identité des différents intervenants dans
                        le cadre de sa réalisation et de son suivi.
                    </p>

                    <span>

                    <h2>Edition du site :</h2>

                    <p>
                        Le site Accorbatie.fr est édité par le groupe de Jakova Inc. Entreprise de développement informatique.<br />
                        Pour contacter Jakova Inc. cliquez <a href="https://valentinmarguerie.fr" target="_blank" rel="noreferrer">ici</a>
                    </p>

                    </span>

                        <span>

                        <h2>Responsable de publication :</h2>

                        <p>
                            Entièreté du groupe des membres de Jakova Inc.
                        </p>

                    </span>

                        <span>

                        <h2>Hébergeur :</h2>

                        <p>
                            L'hébergement du site est opérée par  <a
                            href="https://valentinm27.github.io/Accrobranche/#/">GitHub</a><br />
                            Le stockage des données personnelles des utilisateurs est exclusivement réalisé sur ces serveurs.
                        </p>

                    </span>

                        <span>

                        <h2>Nous contacter :</h2>

                        <p>
                            MARGUERIE Valentin | <a className="contact"
                                                    href="mailto:Valentin_Marguerie@etu.u-bourgogne.fr">Valentin_Marguerie@etu.u-bourgogne.fr</a>
                        </p>

                    </span>

                        <span>

                        <h2>CNIL :</h2>

                        <p>
                            Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’Utilisateur dispose d’un droit d’accès, de modification et de suppression des informations collectées par witchssound.fr.
                            Pour exercer ce droit, il reviendra à l’Utilisateur d’envoyer un message à l’adresse suivante : <a
                            className="contact" href="mailto:Valentin_Marguerie@etu.u-bourgogne.fr">Support</a>
                        </p>

                    </span>
                </div>

            </div>
        );
    }
}

export default Legal;