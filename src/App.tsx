import { Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Routes
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Resume" element={<Resume/>}/>
    </Routes>
  );
}

export default App;