import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { RecordStudio } from "./components/RecordStudio";

function App() {
  return (
    <main className="main">
      <Header/>
      <Hero />
      <AboutUs />
      <RecordStudio />
    </main>
  );
}

export default App;
