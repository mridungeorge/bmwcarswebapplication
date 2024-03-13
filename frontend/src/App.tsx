import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm"; // Make sure to import RegistrationForm

function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar component and other components can be added here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />{" "}
          {/* Update this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
