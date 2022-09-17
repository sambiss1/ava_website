import Image from "next/image";
import homeCoverStyle from "./homepagecover.module.css";
const HomePageCover = () => {

    return (
        <div className={homeCoverStyle["homepage__cover--container"]}>
            <div className={homeCoverStyle["homepage__cover--left__section"]}>
                <Image
                    src={"/images/home_pag_cover.svg"}
                    alt="homepage cover image"
                    width={400}
                    height={400}

                />
            </div>
            <div className={homeCoverStyle["homepage__cover--right__section"]}>
                <h2>Agence Vigile Africa </h2>
                <p>Une agence de services pour la gestion de vos projets,
                    la sécurité de vos vies et de vos biens</p>
                <button>Contactez-nous</button>
            </div>
        </div>
    )
}

export default HomePageCover;