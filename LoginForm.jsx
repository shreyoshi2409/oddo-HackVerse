import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.msg || "Login failed");
      } else {
        // Save token, redirect, etc.
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        // window.location.href = "/"; // or use navigate
      }
    } catch (err) {
      setError("Server error");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
      <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
}