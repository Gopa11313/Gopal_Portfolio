import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/dashboard/home/HomePage";
import ProjectPage from "./pages/dashboard/projects/ProjectPage";
import NavigationComponent from "./components/NavigationComponent";
import AboutPage from "./pages/dashboard/about/AboutPage";
import ContactPage from "./pages/dashboard/contact/ContactPage";
import SplashPage from "./pages/splash/SplashPage";
// import MyCss from "./styles/MyCss.css";
function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <section>
        {showSplash && (
          <div className="splash">
            <SplashPage/>
          </div>
        )}
      </section>
      {!showSplash && (
        
         
          <BrowserRouter>
          <NavigationComponent />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/project" element={<ProjectPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
            </Routes>
          </BrowserRouter>
      
      )}
    </div>
  );
}

export default App;
