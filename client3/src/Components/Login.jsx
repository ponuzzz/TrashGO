
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import "./auth.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const validate = () => {
    let err = {};

    if (!form.email) err.email = "Email is required";
    else if (!form.email.includes("@"))
      err.email = "Enter valid email";

    if (!form.password) err.password = "Password required";
    else if (form.password.length < 6)
      err.password = "Minimum 6 characters";

    return err;
  };

  
   const handleSubmit = async (e) => {

  e.preventDefault();

  const err = validate();

  setErrors(err);

  if (Object.keys(err).length > 0) return;

  try {

    const res = await loginUser(form);

    // SAVE TOKEN

    localStorage.setItem(
      "token",
      res.token
    );

    

    localStorage.setItem(
      "role",
      res.user.role
    );

    

    localStorage.setItem(

      "user",

      JSON.stringify(res.user)

    );

    if (res.token) {

      toast.success("Login successful ✅");

setTimeout(() => {

  if (res.user.role === "admin") {
    navigate("/admin");
  }

  else if (res.user.role === "agent") {
    navigate("/agent");
  }

  else {
    navigate("/");
  }

}, 1000);

 } else {

      // alert("Login failed ❌");
      toast.error("Login failed ❌");

    }

  } catch (error) {

    // alert("Server error ❌");
    toast.error("Server error ❌");

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

        <h2 className="title">♻️ Waste Management</h2>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleSubmit}>

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="input"
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button className="btn-main">
            Login
          </button>

        </form>

        <p className="switch">
          Don’t have an account?
          <span onClick={() => navigate("/register")}> Register</span>
        </p>

      </div>
    </div>
    </>
  );
};

export default Login;
