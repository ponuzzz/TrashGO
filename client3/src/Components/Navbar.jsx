//  import React from "react";

//  function Navbar() {
//    return (
//      <nav className="navbar navbar-dark bg-dark px-4">
//        <h4 className="text-white">Waste Management</h4>

//        <div>
//          <a href="/home" className="text-white mx-2">Home</a>
//          <a href="/create" className="text-white mx-2">Create</a>
//          <a href="/my" className="text-white mx-2">My Requests</a>
//        </div>
//      </nav>
//    );
//  }

//  export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaRecycle,
//   FaHome,
//   FaInfoCircle,
//   FaClipboardList,
//   FaBoxOpen,
//   FaExclamationTriangle,
//   FaUserCircle,
// } from "react-icons/fa";

// import "./navbar.css";


// function Navbar() {

//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   const logout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   return (

//     <nav className="navbar navbar-expand-lg custom-navbar sticky-top">

//       <div className="container">

//         {/* LOGO */}

//         <Link className="navbar-brand logo-text" to="/">

//           <FaRecycle className="logo-icon" />

//           EcoClean Kerala

//         </Link>

//         <button
//           className="navbar-toggler bg-light"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navMenu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navMenu">

//           <ul className="navbar-nav ms-auto align-items-center">

//             <li className="nav-item">
//               <Link className="nav-link nav-custom" to="/">
//                 <FaHome /> Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link nav-custom" to="/about">
//                 <FaInfoCircle /> About
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link nav-custom" to="/create">
//                 <FaClipboardList /> Create Request
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link nav-custom" to="/my">
//                 <FaBoxOpen /> My Requests
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link nav-custom" to="/complaint">
//                 <FaExclamationTriangle /> Complaint
//               </Link>
//             </li>

//             {!token ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="btn login-btn" to="/login">
//                     Login
//                   </Link>
//                 </li>

//                 <li className="nav-item ms-2">
//                   <Link className="btn register-btn" to="/register">
//                     Register
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <button
//                 className="btn logout-btn ms-3"
//                 onClick={logout}
//               >
//                 <FaUserCircle /> Logout
//               </button>
//             )}

//           </ul>

//         </div>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (

    <nav className="custom-navbar">

      <div className="navbar-container">

        {/* ================= LOGO ================= */}

        <Link to="/" className="brand-section">

          <div className="logo-wrapper">

            <div className="main-logo">
              🌎
            </div>

            <div className="small-logo">
              ⚡
            </div>

          </div>

          <h1 className="brand-name">
            TrashGo
          </h1>

        </Link>
        {/* ================= NAV LINKS ================= */}

        <div className="nav-links">

          <Link to="/" className="nav-item">
            Home
          </Link>

          <Link to="/about" className="nav-item">
            About
          </Link>

          <Link to="/create" className="nav-item">
            Create Request
          </Link>

          <Link to="/my" className="nav-item">
            My Requests
          </Link>

          <Link to="/complaint" className="nav-item">
            Complaint
          </Link>

        </div>

        {/* ================= AUTH BUTTONS ================= */}

        <div className="auth-section">

          {!token ? (
            <div className="auth-box">

              <Link to="/login" className="login-btn">
                Login
              </Link>

              <Link to="/register" className="register-btn">
                Register
              </Link>

            </div>
          ) : (

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          )}

        </div>

      </div>

    </nav>

  );
}

export default Navbar;
