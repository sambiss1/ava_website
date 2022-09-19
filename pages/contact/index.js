import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import homePageStyles from '../../styles/Home.module.css';
import Footer from "../../components/Footer/Footer";


const ContactPage = () => {
    return (
        <div className={homePageStyles.container}>
            <DesktopHeader />
            <main className={homePageStyles.main}>
                <h1>This is about page

                    Contact Page
                </h1>
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage;