import Head from "next/head";
import PageCover from "../../components/PageCover/PageCover";
import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import styles from '../../styles/Home.module.css';
import Footer from "../../components/Footer/Footer";

const ServicesPage = ({ props }) => {
    props = {
        title: "Agence Vigile Africa ",
        text: "Une agence de services pour la gestion de vos projets, la sécurité de vos vies et de vos biens",
        buttonText: "Contactez-nous",
        image: "/images/business-merger.svg"
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Services | Agence Vigile Africa</title>
            </Head>
            <DesktopHeader />
            <main className={styles.main}>
                <PageCover
                    props={props}
                />
            </main>

            <Footer />
        </div>
    )
}

export default ServicesPage;