// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./auth.css";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!password || password.length < 8) {
//       setError("Password must be at least 8 characters");
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:5000/api/auth/reset/${token}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data);
//         setMsg("");
//       } else {
//         setMsg("Password updated successfully ✅");
//         setError("");

//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       }

//     } catch {
//       setError("Server error ❌");
//     }
//   };

//   return (
//     <div className="auth-bg">
//       <div className="auth-card">
//         <h2 className="title">🔑 Reset Password</h2>
//         <p className="subtitle">Enter new password</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="password"
//             placeholder="New Password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="input"
//           />

//           <button className="btn-main">Reset Password</button>
//         </form>

//         {msg && <p style={{ color: "green" }}>{msg}</p>}
//         {error && <p className="error">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:6000/api/auth/reset/${token}`, {
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
