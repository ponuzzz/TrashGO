// 
// 
//   return (
//     <div className="container vh-100 d-flex align-items-center justify-content-center">
//       <div className="card shadow-lg p-4" style={{ width: "400px" }}>

//         <h3 className="text-center text-success">Login</h3>

//         <form onSubmit={submit}>
//           <input
//             className="form-control mb-3"
//             placeholder="Email"
//             onChange={(e)=>setForm({...form,email:e.target.value})}
//           />

//           <input
//             type="password"
//             className="form-control mb-3"
//             placeholder="Password"
//             onChange={(e)=>setForm({...form,password:e.target.value})}
//           />

//           <button className="btn btn-success w-100">Login</button>
//         </form>

//         <p className="text-center mt-3">
//           New user? <a href="/register">Register</a>
//         </p>

//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// // import API from "../services/api";
// import { loginUser } from "../services/api";
// import { useNavigate } from "react-router-dom";
// import "./auth.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       return setError("All fields required");
//     }

//     try {
//       const res = await API.post("/auth/login", form);

//       localStorage.setItem("token", res.data.token);

//       if (res.data.user.role === "admin") {
//         navigate("/admin/dashboard");
//       } else if (res.data.user.role === "agent") {
//         navigate("/agent");
//       } else {
//         navigate("/user/home");
//       }

//     } catch {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="auth-bg">
//       <div className="auth-card">

//         <h2 className="title">♻️ Waste Management</h2>
//         <p className="subtitle">Login to continue</p>

//         {error && <p className="error">{error}</p>}

//         <form onSubmit={handleSubmit}>

//           <input
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="input"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="input"
//           />

//           <button className="btn-main">
//             Login
//           </button>
//         </form>

//         <p className="switch">
//           Don’t have an account?
//           <span onClick={() => navigate("/register")}> Register</span>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import "./auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // 🔹 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Validation
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

  // 🔹 Submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const err = validate();
  //   setErrors(err);

  //   if (Object.keys(err).length > 0) return;

  //   try {
  //     const res = await loginUser(form);
  //     localStorage.setItem("token", res.token);
  //     localStorage.setItem("role", res.user.role);

  //     if (res.token) {
  //       // ✅ Save token + role
  //       localStorage.setItem("token", res.token);
  //       localStorage.setItem("role", res.user.role);

  //       alert("Login successful ✅");

  //       // 🔥 Redirect based on role
  //       if (res.user.role === "admin") {
  //         navigate("/admin");
  //       } else if (res.user.role === "agent") {
  //         navigate("/agent");
  //       } else {
  //         navigate("/user/home");
  //       }
  //     } else {
  //       alert(res || "Login failed");
  //     }

  //   } catch (error) {
  //     alert("Server error ❌");
  //   }
  // };
   const handleSubmit = async (e) => {

  e.preventDefault();

  const err = validate();

  setErrors(err);

  if (Object.keys(err).length > 0) return;

  try {

    const res = await loginUser(form);

    // ✅ SAVE TOKEN

    localStorage.setItem(
      "token",
      res.token
    );

    // ✅ SAVE ROLE

    localStorage.setItem(
      "role",
      res.user.role
    );

    // ✅ SAVE FULL USER DETAILS

    localStorage.setItem(

      "user",

      JSON.stringify(res.user)

    );

    if (res.token) {

      alert("Login successful ✅");

      // ===== ROLE BASED REDIRECT =====

      if (res.user.role === "admin") {

        navigate("/admin");

      }

      else if (res.user.role === "agent") {

        navigate("/agent");

      }

      else {

        navigate("/");

      }

    } else {

      alert("Login failed ❌");

    }

  } catch (error) {

    alert("Server error ❌");

  }

};

  return (
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
  );
};

export default Login;
