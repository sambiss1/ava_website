import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import homePageStyles from '../../styles/Home.module.css';
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import PageCover from "../../components/PageCover/PageCover";


const ContactPage = ({ props }) => {
    props = {
        title: "Agence Vigile Africa ",
        text: "Une agence de services pour la gestion de vos projets, la sécurité de vos vies et de vos biens",
        buttonText: "Contactez-nous",
        image: "/images/contact.svg"
    }
    return (
        <div className={homePageStyles.container}>
            <Head>
                <title> Contact | Agence Vigile Africa</title>
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

export default ContactPage;