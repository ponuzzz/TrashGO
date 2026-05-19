// import { Link, Outlet } from "react-router-dom";
// import "./admin.css";

// function AdminLayout() {
//   return (
//     <div className="admin-container">

//       {/* SIDEBAR */}
//       <div className="admin-sidebar">
//         <h3>⚙ Admin</h3>

//         <Link to="/admin">Dashboard</Link>
//         <Link to="/admin/waste">Waste Requests</Link>
//         <Link to="/admin/complaints">Complaints</Link>
//         <Link to="/admin/announce">Announcements</Link>
//       </div>

//       {/* CONTENT */}
//       <div className="admin-content">
//         <Outlet />
//       </div>

//     </div>
//   );
// }

// export default AdminLayout;
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./admin.css";

function AdminLayout() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.clear();

    navigate("/login");
  };

  return (

    <div className="admin-container">

      <div className="admin-sidebar">

        <h2> Admin</h2>

        <Link to="/admin">
          📊 Dashboard
        </Link>

        <Link to="/admin/waste">
          ♻ Waste Requests
        </Link>

        <Link to="/admin/complaints">
          ⚠ Complaints
        </Link>
         
         <Link to="/admin/pickup-agents">
          🗑 Pickup Agents
        </Link>


        <Link to="/admin/announce">
          📢 Announcements
        </Link>

        <button
          className="logout-side-btn"
          onClick={logout}
        >
          🚪 Logout
        </button>

      </div>

      <div className="admin-content">
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;
