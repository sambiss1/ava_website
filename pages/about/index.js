import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import { useRouter } from "next/router";
import homePageStyles from '../../styles/Home.module.css'

const AboutPage = () => {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <div className={homePageStyles["container"]}>
            <DesktopHeader />
            <h1>This is about page</h1>
        </div>
    )
}

export default AboutPage;