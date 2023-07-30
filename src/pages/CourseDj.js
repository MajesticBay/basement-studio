import { GiftCertificate } from "../components/sections/GiftCertificate";
import { ContactUs } from "../components/sections/ContactUs";
import { Footer } from "../components/sections/Footer";
import { Btn } from "../components/Btn";
import courseDjKeyboardSmall from "../images/course-dj-page-colored-small.png";
import courseDjKeyboardLargeColored from "../images/course-dj-page-colored-larde.png";

export const CourseDj = () => {
  return (
    <>
      <section className="course-dj-page">
        <div className="course-dj-page__top-container">
          <h1 className="header course-dj-page__header">DJ COURSE</h1>
          <p className="course-dj-page__sign-up">
            Sign up for a free trial lesson.
          </p>
          <Btn
            className={"course-dj-page__btn"}
            text={"ЗАРЕЄСТРУВАТИСЬ"}
            arrowDisplayed={true}
            dark={false}
          />
        </div>
        <img className="course-dj-page__img-mobile" src={courseDjKeyboardSmall} alt="keyboard" />
        <img className="course-dj-page__img" src={courseDjKeyboardLargeColored} alt="keyboard" />
        <div className="course-dj-page__content">
          <h2 className="course-dj-page__sub-header">Course topics:</h2>
          <ul className="course-dj-page__list">
            <li className="course-dj-page__list-item">The basic concept of DJing as an art.</li>
            <li className="course-dj-page__list-item">
              Functionality and types of professional DJ equipment: mixers,
              players and effectors (Pioneer Dj, Technics, Allen&Heath).
            </li>
            <li className="course-dj-page__list-item">BPM and Music time signature.</li>
            <li className="course-dj-page__list-item">Sound frequencies. Types and practical use of Equalizers.</li>
            <li className="course-dj-page__list-item">Beatmatching. Sync by ear.</li>
            <li className="course-dj-page__list-item">Simple and complex mixing techniques.</li>
            <li className="course-dj-page__list-item">Process of creating mixes for podcast recording.</li>
            <li className="course-dj-page__list-item">
              Building your music library to perform without prepared set.
            </li>
            <li className="course-dj-page__list-item">
              Music theory needed for DJing (basics of rhythm, notes, tonality,
              and the Camelot circle).
            </li>
            <li className="course-dj-page__list-item">Audio cables and connectors.</li>
            <li className="course-dj-page__list-item">
              Searching skills using labels, streaming services and marketplaces
              (Bandcamp, SoundCloud, Beatport).
            </li>
            <li className="course-dj-page__list-item">Rekordbox: creating playlists and main functionality.</li>
            <li className="course-dj-page__list-item">
              Operation of music labels and their interaction with artists.
            </li>
            <li className="course-dj-page__list-item">
              Club culture. All you need to know about promoters, booking
              agents, promo groups, etc.
            </li>
            <li className="course-dj-page__list-item">
              Practicing. A lot of practice with the analysis of the smallest
              details of the art of DJing.
            </li>
          </ul>
          <div className="course-dj-page__cards">
            <div className="course-dj-page__card course-page-card">
              <p className="course-page-card__header">INDIVIDUAL COURSE</p>
              <p className="course-page-card__description">*lesson duration 1,5-2 hours</p>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">10 lessons</p>
                <p className="course-page-card__price">300$</p>
              </div>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">10 lessons</p>
                <p className="course-page-card__price">300$</p>
              </div>
            </div>
            <div className="course-dj-page__card course-page-card">
              <p className="course-page-card__header">INDIVIDUAL COURSE</p>
              <p className="course-page-card__description">*lesson duration 1,5-2 hours</p>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">10 lessons</p>
                <p className="course-page-card__price">300$</p>
              </div>
              <div className="course-page-card__row">
                <p className="course-page-card__quantity">10 lessons</p>
                <p className="course-page-card__price">300$</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GiftCertificate />
      <ContactUs />
      <Footer />
    </>
  );
};

export default CourseDj;
