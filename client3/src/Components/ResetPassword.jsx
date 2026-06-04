
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch(`http://localhost:8000/api/auth/reset/${token}`, {
    const res = await fetch(
  `${API_URL}/auth/reset/${token}`,
  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data);
    } else {
      alert("Password updated ✅");
      navigate("/");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />

          <button className="btn-main">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
