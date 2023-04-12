import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { CourseDj } from "./pages/CourseDj";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/course-dj" element={<CourseDj />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
