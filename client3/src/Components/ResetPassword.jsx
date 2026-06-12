import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api/axios";
import "./auth.css";

const ResetPassword = () => {

  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!password) {
      toast.warning("Please enter a new password ⚠️");
      return;
    }

    try {

      await API.post(
        `/auth/reset/${token}`,
        { password }
      );

      toast.success("Password updated successfully ✅");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Failed to reset password ❌"
      );

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
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
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