import ostap from "../../images/podcast-ostap.png";
import { Btn } from "../Btn";

export const Podcast = () => {
  return (
    <div className="podcast">
      <h1 className="header">ПОДКАСТ</h1>
      <p className="podcast__text">
        It's all about unity of underground music culture.
      </p>
      <div
        style={{
          // backgroundColor: "purple"
          backgroundImage: ostap,
        }}
        className="podcast-card"
      >
        {/* <img src={ostap} alt="ostap"/> */}
      </div>
      <div className="podcast__btn-container">
        <Btn text={"ДИВИТИСЬ  НА YOUTUBE"} arrowDisplayed={true} dark={false} />
        <Btn text={"ПІДТРИМАТИ"} arrowDisplayed={false} dark={true} />
      </div>
    </div>
  );
};

export default Podcast;
