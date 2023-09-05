import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from "./home/HomePage";
import ProjectPage from "./projects/ProjectPage";
import MyCss from "../../styles/MyCss.css"
function DashBoard(){
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 4000);
        return () => clearTimeout(timer);
      }, []);
    return(  
      <Router>
      <Routes >
        <Route path="/" element={HomePage} />
        <Route path="/" element={ProjectPage} />
      </Routes >
    </Router>
        
    
    )
}

export default DashBoard;