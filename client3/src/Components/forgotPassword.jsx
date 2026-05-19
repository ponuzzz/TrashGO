import React, { useState } from "react";
import "./auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:6000/api/auth/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data);
        setMsg("");
      } else {
        setMsg("Reset link sent to your email ✅");
        setError("");
      }

    } catch {
      setError("Server error ❌");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">

        <h2 className="title">🔑 Forgot Password</h2>
        <p className="subtitle">Enter your email</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />

          <button className="btn-main">Send Reset Link</button>

        </form>

        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <p className="error">{error}</p>}

      </div>
    </div>
  );
};

export default ForgotPassword;
