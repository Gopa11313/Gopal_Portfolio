import { React, useEffect, useState } from "react";
import HomePage from "./pages/dashboard/home/HomePage";
import ProjectPage from "./pages/dashboard/projects/ProjectPage";
import NavigationComponent from "./components/NavigationComponent";
import AboutPage from "./pages/dashboard/about/AboutPage";
import ContactPage from "./pages/dashboard/contact/ContactPage";
import SplashPage from "./pages/splash/SplashPage";
import LineComponent from "./components/LineComponent";
import SkillsPage from "./pages/dashboard/skill/SkillsPage";
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
      {showSplash && (
        <section>
          <div className="splash">
            <SplashPage />
          </div>
        </section>
      )}

      {!showSplash && (
        <div>
          <NavigationComponent />
          <HomePage />
          <AboutPage />
          <LineComponent />
          <SkillsPage />
          <LineComponent />
          <ProjectPage />
          <LineComponent />
          <ContactPage />
        </div>
      )}
    </div>
  );
}

export default App;
