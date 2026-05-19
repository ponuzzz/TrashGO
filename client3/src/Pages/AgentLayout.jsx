import { Link, Outlet, useNavigate } from "react-router-dom";
import "./agent.css";

function AgentLayout() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="agent-container">

      {/* SIDEBAR */}
      <div className="agent-sidebar">

        <h2>🚛 Agent Panel</h2>

        <Link to="/agent">
          📊 Dashboard
        </Link>

        <Link to="/agent/requests">
          ♻ Assigned Requests
        </Link>

        <Link to="/agent/history">
          📜 Pickup History
        </Link>

        <Link to="/agent/complaints">
          ⚠ Complaints
        </Link>

        <Link to="/agent/profile">
          👤 Profile
        </Link>

        <button
          className="logout-btn"
          onClick={logout}
        >
          🚪 Logout
        </button>

      </div>

      {/* CONTENT */}
      <div className="agent-content">
        <Outlet />
      </div>

    </div>
  );
}

export default AgentLayout;
