import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import styles from '../../styles/Home.module.css'

const ServicesPage = () => {
    return (
        <div className={styles.container}>
                <DesktopHeader />
            <main className={styles.main}>
                Services Page
            </main>
        </div>
    )
}

export default ServicesPage;