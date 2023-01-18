import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { RecordStudio } from "./components/RecordStudio";
import { CourseDj } from "./components/CourseDj";
import { Rent } from "./components/Rent";
import { Podcast } from "./components/Podcast";
import { GiftCertificate } from "./components/GiftCertificate";

function App() {
  return (
    <main className="main">
      <Header/>
      <Hero />
      <AboutUs />
      <RecordStudio />
      <CourseDj />
      <Rent />
      <Podcast />
      <GiftCertificate />
    </main>
  );
}

export default App;
