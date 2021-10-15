import React, {Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.body.style.backgroundColor = "#1F1B24"
    }

    render() {
        return (
            <div className="content">
                <div>
                    <h1>Qui sommes nous ?</h1>

                    <div className="parallax0">
                        <h2>Notre histoire</h2>
                    </div>

                    <div className="about-content">
                        Implanté en plein <span className="keyword">parc naturel régional des Causses du Quercy</span> dans le Lot,
                        l’Accro’batie est un parc de loisirs occitan de 5 hectares concentré sur l’accrobranche et ses dérivées.
                        Le domaine voit le jour en 1996 et il est l’un des précurseurs du développement de ces parcours acrobatiques en hauteur en France.<br />
                        Notre parc est situé aux abords du petit village de Flaujac-Poujols, à 8km au sud de Cahors ainsi que 30km à l’est de Montcuq.
                    </div>

                    <div className="about-content">
                        <span className="keyword">Idéalement placé à quelques minutes de l’autoroute A20</span>, nous vous offrons une situation
                        idéale à qui veut pratiquer l’accrobranche en famille comme entre amis.
                        Vous découvrirez sur place notre équipe amoureuse de la nature et passionnée de l’aventure,
                        de la hauteur et du plaisir procuré par l’accrobranche. <span className="keyword">Jeunes et dynamiques, nos professionnels vous accueilleront </span>
                        et vous guideront dans une ambiance agréable afin de vivre des moments mémorables à 15 mètres du sol !
                    </div>

                    <div className="parallax1">
                        <h2>Nos infrastuctures</h2>
                    </div>

                    <div className="about-content">
                        Nous sommes <span className="keyword">fiers de nos infrastructures</span>, ces infrastructures qui existent depuis <span className="keyword">plus de 20 ans</span> et qui ont vu passer nombreuses familles, groupes d’amis,
                        jeunes couples, exercices de teambuilding, enterrements de vie de jeune fille et de jeune garçon, anniversaires et même des mariages !
                        Ce sont ces mêmes infrastructures qui nous remplissent de joie quand nous voyons <span className="keyword">les visages
                        heureux de nos clients</span> après avoir fini notre plus récent parcours !
                    </div>

                    <div className="parallax2">
                        <h2>Entre rusticité et modernité</h2>
                    </div>

                    <div className="about-content">
                        Et ce sont ces infrastructures que nous voulons vous faire connaitre.
                        Ces dernières ont su <span className="keyword">persévérer dans le temps en s’adaptant à la modernité</span>.
                        Elles évoluent constamment pour être au plus près des tendances du moment.
                        Certains pourraient dire que nous visons les cimes avec nos infrastructures 🔥
                        Vous pensez sûrement que l’accrobranche est vieux et dérisoire, que nenni !
                        <span className="keyword"> Nous innovons</span> en s’inspirant d’autres sports. Tel que le snowboard par exemple.
                        Eh oui, quoi de mieux que de descendre une tyrolienne tout en montant une planche !
                    </div>

                    <div className="parallax3">
                        <h2>Pas fan de la hauteur ?</h2>
                    </div>

                    <div className="about-content">
                        Et si les hauteurs ne sont pas votre spécialité, ne craignez pas,
                        vous pourrez rester <span className="keyword">tranquillement</span> au sol et profitez de nos zones de repos et table de pique-nique tout en attendant vos amis.
                        Ces derniers qui seront sécurisé grâce à notre équipement dernier cri afin de garantir <span className="keyword">la meilleure sécurité à nos clients !</span>
                    </div>

                    <div className="parallax4">
                        <h2>Notre restaurant</h2>
                    </div>

                    <div className="about-content">
                        <span className="keyword">Vous avez faim lors de votre grimpette ?</span><br /> Pas besoin de reprendre la voiture et de faire des kilomètres en espérant trouver un restaurant libre,
                        <span className="keyword">nous avons tout sur place !</span> Profitez de nos plats délicats préparés par nos cuisiniers qui raviront vos papilles ! <br />
                        <Link to="/Activities">
                            Découvrez nos services
                        </Link>
                    </div>

                    <div className="parallax5">
                        <h2>Nos cabanes</h2>
                    </div>

                    <div className="about-content">
                        Vous n’avez pas eu le temps de finir tous les parcours que vous souhaitiez faire ?<br />
                        <span className="keyword">Pas grave !</span> Vous pouvez réserver une nuit dans une de nos cabanes dans les arbres et profiter de votre repos bien mérité avant de vous frotter à
                        notre parcours le plus dur.
                        <span className="keyword">Dormez bien, avec la tête dans les étoiles !</span> <br />

                        <Link to="/Activities">
                            Découvrez nos services
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;