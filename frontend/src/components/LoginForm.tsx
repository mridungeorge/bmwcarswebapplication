import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Ensure the CSS file path is correct.

// Define the structure of your expected error response
interface ErrorResponse {
  message: string;
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (response.data.success) {
        navigate("/dashboard"); // Adjust the redirect path as necessary.
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // You can now safely access the 'message' property since you've defined the structure.
        const serverError = error.response?.data as ErrorResponse;
        setErrorMessage(
          serverError?.message || "An error occurred during login"
        );
      } else {
        setErrorMessage("An error occurred during login");
      }
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
