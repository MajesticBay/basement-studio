import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CourseDj } from "./pages/CourseDj";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-dj" element={<CourseDj />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
