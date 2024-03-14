import React, { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css"; // Make sure this CSS file exists and is correctly styled

interface RegistrationResponse {
  success: boolean;
  message?: string;
}

function RegistrationForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post<RegistrationResponse>(
        "http://localhost:5000/api/register",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        navigate("/login"); // Or navigate to another page upon success
      } else {
        setErrorMessage(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      const axiosError = error as AxiosError<RegistrationResponse>;
      if (axiosError.response) {
        setErrorMessage(
          axiosError.response.data.message ||
            "An error occurred during registration."
        );
      } else {
        setErrorMessage(
          "An error occurred during registration. Please try again."
        );
      }
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
