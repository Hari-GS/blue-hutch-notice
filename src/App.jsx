import "./App.css";
import Navbar from "./components/Navbar";
import Testinomial from "./components/Testinomial";
import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className=" w-full  bg-[#1A1E3B] ">
      <Navbar />
      <Hero />
      <About />
      <Testinomial />
    </div>
  );
}

export default App;
