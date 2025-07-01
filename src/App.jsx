import "./App.css";
import NavBar from "./components/NavBarComponent/NavBar.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import MyRecentWorksPage from "./pages/MyRecentWorksPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={HeroPage} />
          <Route path="/portfolio" Component={MyRecentWorksPage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contact" Component={ContactPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
