import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Member from "./pages/Member";
import Programmes from "./pages/Programmes";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programme" element={<Programmes />} />
        <Route path="/members" element={<Member />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
