import Link from "next/link"
import Image from "next/image"

const DesktopHeader = () => {
    return (
        <nav>
            <ul>
                <div>
                    <li>
                        <Link href="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
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
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
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