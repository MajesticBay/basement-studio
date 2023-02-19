import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { RecordStudio } from "../components/RecordStudio";
import { CourseDj } from "../components/CourseDj";
import { CourseProduction } from "../components/CourseProduction";
import { Rent } from "../components/Rent";
// import { Podcast } from "../components/Podcast";
import { GiftCertificate } from "../components/GiftCertificate";
import { ContactUs } from "../components/ContactUs";
import { CarouselOuter } from "../components/CarouselOuter";

export const Home = () => {
    return (
        <>
            <Hero />
            <CarouselOuter />
            <AboutUs />
            <RecordStudio />
            <CourseDj />
            <CourseProduction />
            <Rent />
            {/* <Podcast /> */}
            <GiftCertificate />
            <ContactUs />
        </>
    )
}

export default Home;