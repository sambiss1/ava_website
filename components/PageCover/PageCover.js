import Image from "next/image";
import pageCoverStyle from "./pagecover.module.css";

const PageCover = ({ props }) => {
    return (
        <div className={pageCoverStyle["page__cover--container"]}>
            <div className={pageCoverStyle["page__cover--left__section"]}>
                <Image
                    src={props.image}
                    alt="homepage cover image"
                    width={400}
                    height={400}

                />
            </div>
            <div className={pageCoverStyle["page__cover--right__section"]}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default PageCover;