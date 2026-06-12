

// import React, { useEffect, useState } from "react";
// import { getAllAgents } from "../services/api";
// import "./agentProfile.css";

// const AgentProfile = () => {
//   const [agents, setAgents] = useState([]);

//   useEffect(() => {
//     fetchAgents();
//   }, []);

//   const fetchAgents = async () => {
//     try {
//       const data = await getAllAgents();
//       setAgents(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="agent-profile-page">
//       <div className="content-container">
//         <h1 className="all-agent-title">
//           <span>🚛</span> Registered Agents
//         </h1>
        
//         <div className="agents-grid">
//           {agents.map((agent) => (
//             <div className="profile-card" key={agent._id}>
//               {/* TOP SECTION */}
//               <div className="profile-top">
//                 <div className="profile-avatar">🚛</div>
//                 <div className="profile-header-text">
//                   <h1>{agent.name}</h1>
//                   <span className="role-badge">{agent.role}</span>
//                 </div>
//               </div>

//               {/* DETAILS GRID */}
//               <div className="profile-details">
//                 <div className="detail-box">
//                   <span className="label">Email</span>
//                   <h4 className="value">{agent.email}</h4>
//                 </div>

//                 <div className="detail-box">
//                   <span className="label">District</span>
//                   <h4 className="value">{agent.district}</h4>
//                 </div>

//                 <div className="detail-box">
//                   <span className="label">Phone</span>
//                   <h4 className="value">{agent.phone}</h4>
//                 </div>

//                 <div className="detail-box full-width">
//                   <span className="label">Address</span>
//                   <h4 className="value">{agent.address}</h4>
//                 </div>

//                 <div className="detail-box">
//                   <span className="label">Govt ID</span>
//                   <h4 className="value">{agent.idNumber}</h4>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgentProfile;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./agentProfile.css";

const AgentProfile = () => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);

  // FETCH AGENTS
  const fetchAgents = async () => {
    try {
      const res = await API.get("/agent");
      setAgents(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load agents");
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  // EDIT
  const handleEdit = (agent) => {
    localStorage.setItem(
      "editAgent",
      JSON.stringify(agent)
    );

    navigate("/agent/edit-agent");
  };

  // DELETE
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this agent?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/agent/${id}`);

      toast.success("Agent deleted successfully");

      fetchAgents();
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };


   
  return (
    <div className="agent-profile-page">
      <div className="content-container">
        <h1 className="all-agent-title">
          <span>🚛</span> Registered Agents
        </h1>
       
       <div className="agents-grid">

  {agents.map((agent) => (

    <div className="profile-card" key={agent._id}>

      {/* TOP SECTION */}
      <div className="profile-top">

        <div className="profile-avatar">
          🚛
        </div>

        <div className="profile-header-text">
          <h1>{agent.name}</h1>

          <span className="role-badge">
            {agent.role}
          </span>
        </div>

      </div>

      {/* DETAILS */}
      <div className="profile-details">

        <div className="detail-box">
          <span className="label">Email</span>
          <h4 className="value">{agent.email}</h4>
        </div>

        <div className="detail-box">
          <span className="label">District</span>
          <h4 className="value">{agent.district}</h4>
        </div>

        <div className="detail-box">
          <span className="label">Phone</span>
          <h4 className="value">{agent.phone}</h4>
        </div>

        <div className="detail-box full-width">
          <span className="label">Address</span>
          <h4 className="value">{agent.address}</h4>
        </div>

        <div className="detail-box">
          <span className="label">Govt ID</span>
          <h4 className="value">{agent.idNumber}</h4>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="agent-actions">

        <button
          className="edit-btn"
          onClick={() => handleEdit(agent)}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => handleDelete(agent._id)}
        >
          🗑 Delete
        </button>

      </div>

    </div>

  ))}

</div>

              


      </div>
    </div>
  );
};

export default AgentProfile;
