import React, { useState } from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      // Optionally store user info if your backend provides it:
      // localStorage.setItem("user", JSON.stringify(res.data.user));
      // Redirect to home page or dashboard
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.msg ||
        err.message ||
        "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <label>
          Email:
          <input
            type="email"
            value={email}
            autoComplete="username"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}