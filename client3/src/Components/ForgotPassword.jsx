import React, { useState } from "react";
import "./auth.css";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  await API.post(
    "/auth/forgot",
    { email }
  );

  // setMsg("Reset link sent to your email ✅");
  toast.success("Reset link sent to your email");
  setError("");

} catch (err) {

  setError(
    err.response?.data ||
    "Server error ❌"
  );

  setMsg("");
}
  };
  return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
        />
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
    </>
  );
};

export default ForgotPassword;
