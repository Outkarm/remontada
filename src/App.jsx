import "./App.css";
import HeroPage from "./pages/HeroPage.jsx";
import MyRecentWorksPage from "./pages/MyRecentWorksPage.jsx";
import NavBar from "./components/NavBarComponent/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={HeroPage} />
          <Route path="/portfolio" Component={MyRecentWorksPage} />
          <Route path="/contact" Component={MyRecentWorksPage} />
          <Route path="/about" Component={MyRecentWorksPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
