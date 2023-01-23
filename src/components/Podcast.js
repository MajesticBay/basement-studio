import ostap from "../images/podcast-ostap.png";
import { Btn } from "./Btn";

export const Podcast = () => {
    return (
        <div className="podcast">
            <h1>ПОДКАСТ</h1>
            <div>
                <p>It's all about unity of underground music culture.</p>
                <div style={{
                    // backgroundColor: "purple"
                    backgroundImage: ostap
                }}
                className="podcast-card">
                    {/* <img src={ostap} alt="ostap"/> */}
                </div>
                <p className="card__button pointer">Дивитись  на youtube</p>
                <Btn />
            </div>
        </div>
    )
}

export default Podcast;