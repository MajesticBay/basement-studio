import { useTranslation } from "react-i18next";
import Carousel, { CarouselItem } from "../../components/Carousel";
import { Btn } from "../Btn";
import bg from "../../images/bg-record-studio.png";

export const RecordStudio = () => {
  const { t } = useTranslation();
  /* eslint-disable no-multi-str */
  const data = {
    title: "СТУДІЯ  ЗВУКОЗАПИСУ",
    pFirst:
      "Атмосфера в студії дозволить насолоджуватись процесом звукозапису або музичного продакшену.",
    pSecond:
      "Звукорежисер - твій друг, професіонал, який завжди підтримає,\
        порадить і допоможе зробити процес запису максимально комфортним\
        і приємним.",
  };
  /* eslint-disable no-multi-str */

  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };

  const bgOverlayStyle = {
    background: "rgba(7, 7, 7, 0.6)",
    backdropFilter: "blur(3px)",
  };

  const cardsData = [
    {
      title: "ЗВУКОЗАПИС",
      price: "14",
      list: [
        "Запис вокалу, інструментів та аудіоподкастів за допомогою професійного обладнання.",
        "Дикторське озвучення для реклами та різного роду відеоконтенту.",
        "Виготовлення аудіокниг та дубляж кіно.",
      ],
    },
    {
      title: "ЗВЕДЕННЯ ТА МАСТЕРІНГ",
      price: "70",
      list: [
        "Зведення та мастерінг твоєї музики професійним та досвідченим звукорежисером.",
        "Послуги зведення та мастерингу онлайн.",
        "Термін виконання 1-3 робочі дні.",
      ],
    },
    {
      title: "МУЗИЧНИЙ ПРОДАКШН",
      price: "80",
      list: [
        "Ексклюзивний продакшн твого треку в будь-якому стилі. Приходь на студійну сесію та приймай безпосередню участь у творчому процесі.",
        "Саунд дизайн та музика для реклами, кіно та різного роду відеоконтенту.",
      ],
    },
  ];

  const cards = cardsData.map((card, indexCard) => (
    // Carousel is here
    <CarouselItem key={indexCard}>
      <div className="card record-studio__card">
        {/* ------------------------------- */}
        {/* TO DO */}
        {/* Give each element inside the card a key */}
        {/* ------------------------------- */}
        <p className="card__title">{card.title}</p>
        <p className="card__price">{card.price}$ / год</p>
        <ul className="card__list">
          {card.list.map((item, index) => (
            <li className="card__list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <Btn
          className={"card__btn"}
          text={"ЗАМОВИТИ"}
          arrowDisplayed={false}
          dark={false}
        />
      </div>
    </CarouselItem>
  ));

  return (
    <div id="record-studio" className="record-studio" style={bgStyle}>
      <div className="record-studio__inner" style={bgOverlayStyle}>
        <div className="record-studio__header-wrapper">
          <h1 className="header">{t("courseDJ.p1")}</h1>
          <p className="record-studio__text">{t("courseDJ.p2")}</p>
          <p className="record-studio__text">{t("courseDJ.p1")}</p>
        </div>
        <div className="cards mobile">
          <Carousel>{cards}</Carousel>
        </div>
        <div className="cards desktop">{cards}</div>
      </div>
    </div>
  );
};

export default RecordStudio;
