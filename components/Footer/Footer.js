import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { TbBrandFacebook, TbBrandInstagram } from "react-icons/tb";
import footerStyle from "./footerstyle.module.css";

const Footer = () => {
    return (
        <footer className={footerStyle["footer__main--container"]}>
            <div className={footerStyle["footer__main--content"]}>


                <ul className={footerStyle["footer__content--quicklinks"]}>
                    <h3>Liens rapides</h3>
                    <li>
                        Termes et Conditions
                    </li>
                    <li>
                        Politique de Confidentialité
                    </li>
                </ul>


                <ul className={footerStyle["footer__content--more"]}>
                    <h3>Plus sur nous</h3>
                    <li>Nos réalisations</li>
                    <li>Nos partenaires</li>
                </ul>


                <ul className={footerStyle["footer__content--contact"]}>
                    <h3>Nous Contacter</h3>
                    <li><BsTelephone /> +243997001363
                        <br />+243 817511185
                    </li>
                    <li><BsEnvelope /> a.vigileafrica@gmail.com</li>
                    <div>

                        <TbBrandFacebook />
                        <TbBrandInstagram />
                    </div>
                </ul>

            </div>
            <div className={footerStyle["footer__main--copyright"]}>
                <h3>Copyright 2022 Agence Vigile Africa</h3>
            </div>
        </footer>
    )
}

export default Footer;