import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Testimonial from "./components/Testinomial";
import About from "./pages/About";
import AboutUs from "./pages/AboutUs.jsx";
import Hero from "./pages/Hero.jsx";
import WebsitesAd from "./pages/WebsitesAd.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import necessary Router components

function App() {
  return (
    <div className="w-full bg-[#261893]">
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/websites" element={<WebsitesAd/>} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
