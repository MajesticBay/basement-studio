import { GiftCertificate } from "../components/sections/GiftCertificate";
import { ContactUs } from "../components/sections/ContactUs";
import { Footer } from "../components/sections/Footer";
import { Btn } from "../components/Btn";
import courseDjKeyboard from "../images/course-dj-keyboard.png";

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
            className={"card__btn course-dj-page__btn"}
            text={"ЗАРЕЄСТРУВАТИСЬ"}
            arrowDisplayed={true}
            dark={false}
          />
        </div>
        <img src={courseDjKeyboard} alt="keyboard" />
        <div>
            <h2>Course topics:</h2>
            <ul>
                <li>The basic concept of DJing as an art.</li>
                <li>Functionality and types of professional DJ equipment: mixers, players and effectors (Pioneer Dj, Technics, Allen&Heath).</li>
                <li>BPM and Music time signature.</li>
                <li>Sound frequencies. Types and practical use of Equalizers.</li>
                <li>Beatmatching. Sync by ear.</li>
                <li>Simple and complex mixing techniques.</li>
                <li>Process of creating mixes for podcast recording.</li>
                <li>Building your music library to perform without prepared set.</li>
                <li>Music theory needed for DJing (basics of rhythm, notes, tonality, and the Camelot circle).</li>
                <li>Audio cables and connectors.</li>
                <li>Searching skills using labels, streaming services and marketplaces (Bandcamp, SoundCloud, Beatport).</li>
                <li>Rekordbox: creating playlists and main functionality.</li>
                <li>Operation of music labels and their interaction with artists.</li>
                <li>Club culture. All you need to know about promoters, booking agents, promo groups, etc.</li>
                <li>Practicing. A lot of practice with the analysis of the smallest details of the art of DJing.</li>
            </ul>
            <div className="course-dj-page__cards">
                <div className="course-dj-page__card">
                    <p>INDIVIDUAL COURSE</p>
                    <p>*lesson duration 1,5-2 hours</p>
                    <div>
                        <p>10 lessons</p>
                        <p>300$</p>
                    </div>
                    <div>
                        <p>10 lessons</p>
                        <p>300$</p>
                    </div>
                </div>
                <div className="course-dj-page__card">
                    <p>INDIVIDUAL COURSE</p>
                    <p>*lesson duration 1,5-2 hours</p>
                    <div>
                        <p>10 lessons</p>
                        <p>300$</p>
                    </div>
                    <div>
                        <p>10 lessons</p>
                        <p>300$</p>
                    </div>
                </div>
            </div>
        </div>
        <GiftCertificate />
        <ContactUs />
        <Footer />
      </section>
    </>
  );
};

export default CourseDj;
