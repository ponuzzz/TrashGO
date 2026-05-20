
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Sidebar from "./Components/Sidebar";

// import UserDashboard from "./Pages/UserDashboard";
// import CreateRequest from "./Pages/CreateRequest";
// import MyRequest from "./Pages/MyRequest";
// import Complaint from "./Pages/Complaint";
// import ForgotPassword from "./Components/forgotPassword";
// import ResetPassword from "./Components/ResetPassword";
// import AdminLayout from "./Pages/AdminLayout";
// import AdminDashboard from "./Pages/AdminDashboard";
// import AdminWaste from "./Pages/AdminWaste";
// import AdminComplaint from "./Pages/AdminComplaint";
// import AdminAnnouncement from "./Pages/AdminAnnouncement";

// function Layout() {
//   const location = useLocation();

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   const hideSidebarRoutes = ["/", "/register", "/forgot"];
//   const isResetPage = location.pathname.startsWith("/reset");

//   // ✅ ONLY USER SIDEBAR
//   const showUserSidebar =
//     token &&
//     role === "user" &&
//     !hideSidebarRoutes.includes(location.pathname) &&
//     !isResetPage;

//   return (
//     <>
//       {showUserSidebar && <Sidebar />}

//       <Routes>
//         {/* AUTH */}
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* USER */}
//         <Route path="/user/home" element={<UserDashboard />} />
//         <Route path="/create" element={<CreateRequest />} />
//         <Route path="/my" element={<MyRequest />} />
//         <Route path="/complaint" element={<Complaint />} />

//         {/* PASSWORD */}
//         <Route path="/forgot" element={<ForgotPassword />} />
//         <Route path="/reset/:token" element={<ResetPassword />} />

//         {/* ADMIN */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<AdminDashboard />} />
//           <Route path="waste" element={<AdminWaste />} />
//           <Route path="complaints" element={<AdminComplaint />} />
//           <Route path="announce" element={<AdminAnnouncement />} />
//         </Route>

//       </Routes>
//     </>
//   );
// }


// function App() {
//   return (
//     <BrowserRouter>
//       <Layout />
//     </BrowserRouter>
//   );
// }

// export default App;


// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// import Navbar from "./Components/Navbar";

// import Home from "./Pages/Home";
// import About from "./Pages/About";

// import Login from "./Components/Login";
// import Register from "./Components/Register";

// import ForgotPassword from "./Components/ForgotPassword";
// import ResetPassword from "./Components/ResetPassword";

// import CreateRequest from "./Pages/CreateRequest";
// import MyRequest from "./Pages/MyRequest";
// import Complaint from "./Pages/Complaint";

// import ProtectedRoute from "./Components/ProtectedRoute";


// import AdminLayout from "./Admin/AdminLayout";
// import AdminDashboard from "./Admin/AdminDashboard";
// import AdminWaste from "./Admin/AdminWaste";
// import AdminComplaint from "./Admin/AdminComplaint";
// import AdminAnnouncement from "./Admin/AdminAnnouncement";


// function App() {

//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         {/* PUBLIC */}

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/register" element={<Register />} />

//         <Route path="/forgot" element={<ForgotPassword />} />

//         <Route
//           path="/reset/:token"
//           element={<ResetPassword />}
//         />

//         {/* PROTECTED */}

//         <Route
//           path="/create"
//           element={<CreateRequest />}
//         />


//         <Route
//           path="/my"
//           element={
//             <ProtectedRoute>
//               <MyRequest />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/complaint"
//           element={
//             <ProtectedRoute>
//               <Complaint />
//             </ProtectedRoute>
//           }
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";

import Login from "./Components/Login";
import Register from "./Components/Register";


import ResetPassword from "./Components/ResetPassword";

// import CreateRequest from "./Pages/CreateRequest";
import MyRequest from "./Pages/MyRequest";
import Complaint from "./Pages/Complaint";


import ProtectedRoute from "./Components/ProtectedRoute";

// ================= ADMIN =================
import AdminLayout from "./Pages/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminWaste from "./Pages/AdminWaste";
import AdminComplaint from "./Pages/AdminComplaint";
import AdminAnnouncement from "./Pages/AdminAnnouncement";
import PickupAgents from "./Pages/PickupAgents";
// ================= AGENT =================
import AgentLayout from "./Pages/AgentLayout";
import AgentDashboard from "./Pages/AgentDashboard";
import AgentRequests from "./Pages/AgentRequests";
import AgentProfile from "./Pages/AgentProfile";
import AgentHistory from "./Pages/AgentHistory";
import AgentComplaint from "./Pages/AgentComplaint";
import EditAgent from "./Pages/EditAgent";


import ForgotPassword from "./Components/ForgotPassword";
import CreateRequest from "./Pages/CreateRequest";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* ================= USER SIDE ================= */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot" element={<ForgotPassword/>} />

        <Route
          path="/reset/:token"
          element={<ResetPassword />}
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateRequest/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/my"
          element={
            <ProtectedRoute>
              <MyRequest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/complaint"
          element={
            <ProtectedRoute>
              <Complaint />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN SIDE ================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<AdminDashboard />}
          />

          <Route
            path="waste"
            element={<AdminWaste />}
          />

          <Route
            path="complaints"
            element={<AdminComplaint />}
          />
          <Route
            path="/admin/pickup-agents"
            element={<PickupAgents />}
          />

          <Route
            path="announce"
            element={<AdminAnnouncement />}
          />

        </Route>

        {/* ================= AGENT SIDE ================= */}

        <Route
          path="/agent"
          element={
            <ProtectedRoute>
              <AgentLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<AgentDashboard />}
          />
          <Route
            path="profile"
            element={<AgentProfile />}
          />

          <Route
            path="requests"
            element={<AgentRequests />}
          />
          <Route
            path="history"
            element={<AgentHistory />}
          />
          <Route
            path="/agent/complaints"
            element={<AgentComplaint />}
          />
          <Route
            path="edit-agent"
            element={<EditAgent />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
