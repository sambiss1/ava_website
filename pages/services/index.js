import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import styles from '../../styles/Home.module.css';
import Footer from "../../components/Footer/Footer";

const ServicesPage = () => {
    return (
        <div className={styles.container}>
            <DesktopHeader />
            <main className={styles.main}>
                Services Page
            </main>

            <Footer />
        </div>
    )
}

export default ServicesPage;