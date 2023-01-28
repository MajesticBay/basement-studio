import ostap from "../images/podcast-ostap.png";
import { Btn } from "./Btn";

export const Podcast = () => {
    return (
        <div className="podcast">
            <h1 className="podcast__header">ПОДКАСТ</h1>
            <div className="podcast__content">
                <p className="podcast__text">It's all about unity of underground music culture.</p>
                <div style={{
                    // backgroundColor: "purple"
                    backgroundImage: ostap
                }}
                className="podcast-card">
                    {/* <img src={ostap} alt="ostap"/> */}
                </div>
                {/* <p className="card__button pointer">Дивитись  на youtube</p> */}
                <Btn
                    text={"Дивитись  на youtube"}
                    arrowDisplayed={true}
                    dark={false}
                />
                <Btn
                    text={"ПІДТРИМАТИ"}
                    arrowDisplayed={false}
                    dark={true}
                />
            </div>
        </div>
    )
}

export default Podcast;