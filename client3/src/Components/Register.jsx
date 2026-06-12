
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import districts from "../data/districts";
import "./auth.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",

    role: "user",

    // AGENT DETAILS 

    address: "",
    district: "",
    phone: "",
    idNumber: "",

  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // HANDLE CHANGE 

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  //  VALIDATION 

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

  // SUBMIT 

  const handleSubmit = async (e) => {

    e.preventDefault();

    const err = validate();

    setErrors(err);

    setServerError("");

    if (Object.keys(err).length > 0) return;

    try {

      await registerUser(formData);

      

      
      toast.success("Registered Successfully ✅");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {

      
      toast.error(error.message || "Registration Failed");

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

        <h2 className="title">
          ♻️ Waste Management
        </h2>

        <p className="subtitle">
          Create your account
        </p>

        <form onSubmit={handleSubmit}>

          

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

        {/* agent */}

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
</>
  );
};

export default Register;
