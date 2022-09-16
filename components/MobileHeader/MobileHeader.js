import Link from "next/link"
import Image from "next/image"

const MobileHeader = () => {
    return (
        <nav>
            <div>
                <Image
                    src="/logo-ava.png"
                    alt="main logo"
                    width={150}
                    height={150}
                />
            </div>


        </nav>
    )
}

export default MobileHeader;