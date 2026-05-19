// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/api";
// import "./auth.css";

// const Register = () => {
//   const navigate = useNavigate();

//   // const [form, setForm] = useState({
//   // name: "",
//   // email: "",
//   // password: "",
//   // role: "user",
//   // });
//   const [formData, setFormData] = useState({

//     name: "",
//     email: "",
//     password: "",

//     role: "user",

//     // ===== AGENT DETAILS =====

//     address: "",
//     district: "",
//     phone: "",
//     vehicleType: "",
//     experience: "",
//     idNumber: "",

//   });

//   const [errors, setErrors] = useState({});
//   const [serverError, setServerError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let err = {};

//     if (!form.name) err.name = "Name is required";

//     if (!form.email) err.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(form.email))
//       err.email = "Enter valid email";

//     if (!form.password) err.password = "Password required";
//     else if (form.password.length < 8)
//       err.password = "Minimum 8 characters";

//     return err;
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const err = validate();
//   //   setErrors(err);
//   //   setServerError("");

//   //   if (Object.keys(err).length > 0) return;

//   //   try {
//   //     const res = await registerUser(form);
//   //     const data = await res.json();

//   //     if (!res.ok) {
//   //       setServerError(data); // ✅ SHOW BACKEND ERROR
//   //       return;
//   //     }

//   //     alert("Registered Successfully ✅");
//   //     navigate("/");

//   //   } catch (error) {
//   //     setServerError("Cannot connect to server ❌");
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const err = validate();
//     setErrors(err);
//     setServerError("");

//     if (Object.keys(err).length > 0) return;

//     try {
//       await registerUser(form); // ✅ no res.json()

//       alert("Registered Successfully ✅");
//       navigate("/");

//     } catch (error) {
//       setServerError(error.message); // 🔥 show real error
//     }
//   };


//   return (
//     <div className="auth-bg">
//       <div className="auth-card">

//         <h2 className="title">♻️ Waste Management</h2>
//         <p className="subtitle">Create your account</p>

//         <form onSubmit={handleSubmit}>

//           <input name="name" placeholder="Full Name"
//             onChange={handleChange} className="input" />
//           {errors.name && <p className="error">{errors.name}</p>}

//           <input name="email" placeholder="Email"
//             onChange={handleChange} className="input" />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <input type="password" name="password"
//             placeholder="Password"
//             onChange={handleChange} className="input" />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <select name="role"
//             onChange={handleChange} className="input">
//             <option value="user">User</option>
//             <option value="agent">Agent</option>
//           </select>
//           {
//             formData.role === "agent" && (

//               <div className="agent-extra-fields">

//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="district"
//                   placeholder="District"
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone"
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="vehicleType"
//                   placeholder="Vehicle Type"
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="experience"
//                   placeholder="Experience"
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="idNumber"
//                   placeholder="Government ID"
//                   onChange={handleChange}
//                 />

//               </div>

//             )
//           }

//           {/* Forgot Password */}
//           <p className="forgot"
//             onClick={() => navigate("/forgot")}>
//             Forgot Password?
//           </p>

//           <button className="btn-main">Register</button>

//           {/* SERVER ERROR */}
//           {serverError && <p className="error">{serverError}</p>}

//         </form>

//         <p className="switch">
//           Already have an account?
//           <span onClick={() => navigate("/")}> Login</span>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import districts from "../data/districts";
import "./auth.css";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",

    role: "user",

    // ===== AGENT DETAILS =====

    address: "",
    district: "",
    phone: "",
    idNumber: "",

  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  // ================= VALIDATION =================

  const validate = () => {

    let err = {};

    if (!formData.name)
      err.name = "Name is required";

    if (!formData.email)
      err.email = "Email is required";

    else if (!/\S+@\S+\.\S+/.test(formData.email))
      err.email = "Enter valid email";

    if (!formData.password)
      err.password = "Password required";

    else if (formData.password.length < 8)
      err.password = "Minimum 8 characters";

    // ===== AGENT VALIDATION =====

    if (formData.role === "agent") {

      if (!formData.address)
        err.address = "Address required";

      if (!formData.district)
        err.district = "District required";

      if (!formData.phone)
        err.phone = "Phone required";

      if (!formData.idNumber)
        err.idNumber = "Government ID required";

    }

    return err;
  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    const err = validate();

    setErrors(err);

    setServerError("");

    if (Object.keys(err).length > 0) return;

    try {

      await registerUser(formData);

      alert("Registered Successfully ✅");

      navigate("/login");

    } catch (error) {

      setServerError(error.message);

    }

  };

  return (

    <div className="auth-bg">

      <div className="auth-card">

        <h2 className="title">
          ♻️ Waste Management
        </h2>

        <p className="subtitle">
          Create your account
        </p>

        <form onSubmit={handleSubmit}>

          {/* NAME */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            onChange={handleChange}
          />

          {errors.name &&
            <p className="error">{errors.name}</p>
          }

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            onChange={handleChange}
          />

          {errors.email &&
            <p className="error">{errors.email}</p>
          }

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            onChange={handleChange}
          />

          {errors.password &&
            <p className="error">{errors.password}</p>
          }

          {/* ROLE */}

          <select
            name="role"
            className="input"
            onChange={handleChange}
          >

            <option value="user">
              User
            </option>

            <option value="agent">
              Agent
            </option>

          </select>

          {/* ===== AGENT FIELDS ===== */}

          {
            formData.role === "agent" && (

              <div className="agent-extra-fields">

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input"
                  onChange={handleChange}
                />

                {errors.address &&
                  <p className="error">{errors.address}</p>
                }

                {/* DISTRICT */}

                <select
                  name="district"
                  className="input"
                  onChange={handleChange}
                >

                  <option value="">
                    Select District
                  </option>

                  {
                    districts.map((d) => (

                      <option
                        key={d}
                        value={d}
                      >
                        {d}
                      </option>

                    ))
                  }

                </select>

                {errors.district &&
                  <p className="error">{errors.district}</p>
                }

                {/* PHONE */}

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input"
                  onChange={handleChange}
                />

                {errors.phone &&
                  <p className="error">{errors.phone}</p>
                }

                {/* ID */}

                <input
                  type="text"
                  name="idNumber"
                  placeholder="Government ID"
                  className="input"
                  onChange={handleChange}
                />

                {errors.idNumber &&
                  <p className="error">{errors.idNumber}</p>
                }

              </div>

            )
          }
          {/* FORGOT PASSWORD */}

          <p
            className="forgot"
            onClick={() => navigate("/forgot")}
          >
            Forgot Password?
          </p>

          {/* BUTTON */}

          <button className="btn-main">

            Register

          </button>

          {/* SERVER ERROR */}

          {
            serverError &&
            <p className="error">{serverError}</p>
          }

        </form>

        <p className="switch">

          Already have an account?

          <span onClick={() => navigate("/login")}>

            Login

          </span>

        </p>

      </div>

    </div>

  );
};

export default Register;
