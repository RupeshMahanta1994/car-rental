import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from "./pages/Models/Models";
import TestimonialPage from "./pages/TestimonialPage/TestimonialPage";
import ourTeam from "./pages/ourTeam/ourTeam";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/models" element={<Models />} />
          <Route exact path="/testimonials" element={<TestimonialPage />} />
          <Route exact path="/team" element={<ourTeam />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
