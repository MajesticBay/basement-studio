import { GiftCertificate } from "../components/sections/GiftCertificate";
import { ContactUs } from "../components/sections/ContactUs";
import { Footer } from "../components/sections/Footer";

export const CourseDj = () => {
  return (
    <>
      <section className="course-dj-page">
        <div className="course-dj-page__top-container">
          <h1 className="header"></h1>
        </div>
        <GiftCertificate />
        <ContactUs />
        <Footer />
      </section>
    </>
  );
};

export default CourseDj;
