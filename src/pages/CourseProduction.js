import { GiftCertificate } from "../components/sections/GiftCertificate";
import { ContactUs } from "../components/sections/ContactUs";
import { Footer } from "../components/sections/Footer";

export const CourseProduction = () => {
    return (
        <>
            <h1 style={{color: "--color-white"}}>DJ COURSE</h1>
            <GiftCertificate />
            <ContactUs />
            <Footer />
        </>
    )
}

export default CourseProduction;