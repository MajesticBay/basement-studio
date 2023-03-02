import { Hero } from "../components/sections/Hero";
import { AboutUs } from "../components/sections/AboutUs";
import { RecordStudio } from "../components/sections/RecordStudio";
import { CourseDj } from "../components/sections/CourseDj";
import { CourseProduction } from "../components/sections/CourseProduction";
import { Rent } from "../components/sections/Rent";
// import { Podcast } from "../components/sections/Podcast";
import { GiftCertificate } from "../components/sections/GiftCertificate";
import { ContactUs } from "../components/sections/ContactUs";
// import { CarouselOuter } from "../components/sections/CarouselOuter";

export const Home = () => {
    return (
        <>
            <Hero />
            {/* <CarouselOuter /> */}
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