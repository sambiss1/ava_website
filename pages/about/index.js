import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import { useRouter } from "next/router";
import homePageStyles from '../../styles/Home.module.css';
import homeCoverStyle from "../../components/HomePageCover/homepagecover.module.css";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import Head from "next/head";
import PageCover from "../../components/PageCover/PageCover";

const AboutPage = ({ props }) => {
    const router = useRouter()
    console.log(router.pathname)
    props = {
        title: "Agence Vigile Africa ",
        text: "Une agence de services pour la gestion de vos projets, la sécurité de vos vies et de vos biens",
        buttonText: "Contactez-nous",
        image: "/images/co-working.svg"
    }
    return (
        <div className={homePageStyles["container"]}>
            <Head>
                <title>Agence Vigile Africa | A Propos</title>
            </Head>
            <DesktopHeader />

            <main className={homePageStyles.main}>
                <PageCover
                    props={props}
                />
            </main>

            <Footer />
        </div>
    )
}

export default AboutPage;