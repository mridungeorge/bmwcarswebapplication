import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Make sure this path is correct to apply styles

interface LoginResponse {
  success: boolean;
  message?: string;
}

function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:5000/api/login",
        {
          username,
          password,
        }
      );
      if (response.data.success) {
        navigate("/dashboard"); // Adjust the redirect path as necessary.
      } else {
        setErrorMessage(
          response.data.message || "Invalid username or password"
        );
      }
    } catch (error) {
      let message = "An error occurred during login"; // Default error message
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<LoginResponse>;
        message = serverError.response?.data.message || message;
      }
      setErrorMessage(message);
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
