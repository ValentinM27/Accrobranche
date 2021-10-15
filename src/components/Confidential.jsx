import React, {Component} from 'react';

class Confidential extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.body.style.backgroundColor = "#1F1B24"
    }

    render() {
        return (
            <div className="content">
                <div className="conf-legal">
                    <h1>
                        Politique de confidentialité
                    </h1>

                    <h2 id="titreIntro">Introduction :</h2>

                    <p>
                        Dans le cadre d'une utilisation commerciale,Accro'batie et son partenaire informatique Jakova Inc. sont
                        amené à collecter et traiter des données sur votre personne.
                        Ces dernières sont dites "données personnelles". Notre groupe est impliqué dans la protection
                        de ces données ainsi que dans le respect de leur intégrité, le tout dans le but d'une finalité précise.<br />
                        Nous utilisons ces données afin d'établir différentes statistiques telles que la fréquentation et les parcours
                        les services les plus demandés ainsi que pour vous recontacter à la suite de vos demandes et réservations.
                    </p>

                    <h2>Données personnelles :</h2>

                    <ul>
                        <li>Données transmises directement :<br />
                            Données que vous nous transmettez directement, via les formulaires d'inscriptions,
                            dans les publications ou encore dans les formulaires de contact.
                        </li>
                        <li>Les données collectées automatiquement :<br />
                            Notre site ne récolte aucunes données en dehors de celles que vous nous transmettez.
                            Nous n'utilisons ni cookies ni traitement issue de Google Analytics.
                        </li>
                    </ul>

                    <h2>Utilisation des données :</h2>

                    <p>
                        Les données récoltées nous permettent de déduire qui à formulé des demandes via notre site. De manière à  pouvoir
                        facilement vous contacter pour donner suite à vos demandes.
                        Ces données récoltées par notre groupe ne seront en aucun cas cédées à des tiers ni utilisées
                        à d'autres fins que celles détaillées ci-dessus.
                    </p>

                    <h2>Base légale :</h2>

                    <p>
                        Toutes donnée personnelle est collectée après l'expression explicite du consentement de l'utilisateur
                        via une case à cocher présente dans tous nos formulaires.
                    </p>

                    <h2>Durée de conservation :</h2>

                    <p>
                        Les données sont sauvegardées 3 ans après la dernière connexion. Un utilisateur peut demander à regarder ses informations
                        ou en demander la suppresion (droit à l'oublit).
                    </p>

                    <h2>Cookies :</h2>

                    <p>
                        Notre plateforme n'utilise aucun cookie.
                    </p>

                    <h2>Vos droits concernant vos données personnelles :</h2>

                    <p>
                        Vous avez le droit à la consultation, à la modification ainsi qu'à la suppression de vos données peersonnelles.
                    </p>

                    <h2>Contact délégué à la protection des données :</h2>

                    <p>
                        MARGUERIE Valentin | <a id="contact" href="mailto:Valentin_Marguerie@etu.u-bourgogne.fr">Valentin_Marguerie@etu.u-bourgogne.fr</a>
                    </p>

                    <h2>Site de la CNIL :</h2>

                    <p>
                        Retrouvez plus d'informations sur le site de la <a id="cnil" target="blank" href="https://www.cnil.fr/">CNIL</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Confidential;