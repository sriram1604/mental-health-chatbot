import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MentalHealth from "./pages/MentalHealth.jsx";
import AIAssistant from "./pages/AIAssistant.jsx";
// import Appointment from "./pages/Appointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        {/* <Route path="/appointments" element={<Appointment />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
