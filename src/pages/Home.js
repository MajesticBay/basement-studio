import { Hero } from "../components/sections/Hero";
import { AboutUs } from "../components/sections/AboutUs";
import { RecordStudio } from "../components/sections/RecordStudio";
import { CourseDj } from "../components/sections/CourseDj";
import { CourseProduction } from "../components/sections/CourseProduction";
import { Rent } from "../components/sections/Rent";
import { GiftCertificate } from "../components/sections/GiftCertificate";
import { ContactUs } from "../components/sections/ContactUs";
import { Fullpage, FullpageSection, FullPageSections} from '@ap.cx/react-fullpage' 
import { useEffect, useRef, useState } from "react";
import { Footer } from "../components/sections/Footer";
import useWindowDimensions from "../hooks/useWindowDimentions";

export const Home = () => {


    const sectionStyle = {
        height: '100vh', 
        width:'100%', 
        display: 'flex', 
        justifyContent: 'center',
        paddingTop: '72px'
    }

    const { width } = useWindowDimensions();

    const [ isMobile, setIsMobile] = useState(width < 992)

    useEffect(() => {
        setIsMobile(width < 992)
    }, [width])

    const a = useRef()

    if (isMobile){
        return (
            <>
                <Hero />
                <AboutUs />
                <RecordStudio />
                <CourseDj />
                <CourseProduction />
                <Rent /> 
                {/* <CarouselOuter /> */}
                <GiftCertificate />
                <ContactUs />
                <Footer />
            </>
        )
    }

    return (
        <>
        <Fullpage>
            <FullPageSections>
                    <FullpageSection id='hero' className='sectionWrapper' style={sectionStyle}>
                        <Hero />
                    </FullpageSection>

                    <FullpageSection id='about-us' className='sectionWrapper' style={sectionStyle}>
                        <AboutUs />
                    </FullpageSection>

                    <FullpageSection id='record-studio' className='sectionWrapper'  style={sectionStyle}>
                        <RecordStudio />
                    </FullpageSection>

                    <FullpageSection id='course-dj' className='sectionWrapper' style={sectionStyle}>
                        <CourseDj />
                    </FullpageSection>

                    <FullpageSection id='course-production' className='sectionWrapper'  style={sectionStyle}>
                        <CourseProduction />
                    </FullpageSection>

                    <FullpageSection ref={a} id='rent' className='sectionWrapper' style={sectionStyle}>
                        <Rent />
                    </FullpageSection>

                    <FullpageSection id='contact-us' className='sectionWrapper' style={{height: '100vh'}}>
                        <GiftCertificate />
                        <ContactUs />
                        <Footer />
                    </FullpageSection>
                    </FullPageSections>
                    </Fullpage>
        </>
    )
}

export default Home;