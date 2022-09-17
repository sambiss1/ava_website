import Link from "next/link"
import Image from "next/image";
import styles from "./desktop-header-styles.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const DesktopHeader = () => {
    const [active, setActive] = useState("activeLink")
    const router = useRouter()


    return (
        <nav className={styles["desktop__header--container"]}>
            <ul className={styles["desktop__navigation--container"]}>
                <div>
                    <li
                        className={
                            router.pathname === "/" ? styles["activeLink"] : ""
                        }
                    >
                        <Link href="/">
                            Accueil
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname === "/about" ? styles["activeLink"] : ""
                        }
                    >
                        <Link href="/about">
                            A Propos
                        </Link>
                    </li>
                </div>

                <div>
                    <Image
                        src="/logo-ava.png"
                        alt="main logo"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <li className={
                        router.pathname === "/services" ? styles["activeLink"] : ""
                    }>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname === "/contact" ? styles["activeLink"] : ""
                        }
                    >
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </div>

            </ul>

        </nav>
    )
}

export default DesktopHeader;