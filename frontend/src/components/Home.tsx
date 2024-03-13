import React from "react";
import "./styles.css"; // Make sure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

function Home() {
  const navigate = useNavigate();

  // Function to handle navigation to the login page
  const handleNavigateToLogin = () => {
    navigate("/login"); // Adjust the path to your login route as needed
  };

  // Function to handle navigation to the registration page
  const handleNavigateToRegister = () => {
    navigate("/register"); // Ensure you have a route for '/register' in your App.js
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to BMW Cars</h1>
        <button onClick={handleNavigateToLogin} className="login-button">
          Login
        </button>
        <button onClick={handleNavigateToRegister} className="register-button">
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
