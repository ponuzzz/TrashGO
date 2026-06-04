// import { useState } from "react";

// function Complaint() {
//   const [msg, setMsg] = useState("");

//   const submit = async () => {
//     const token = localStorage.getItem("token");

//     await fetch("http://localhost:5000/api/complaints", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({ message: msg }),
//     });

//     alert("Complaint sent");
//   };

//   return (
//     <div style={{ marginLeft: "220px" }}>
//       <h2>Complaint</h2>

//       <textarea onChange={(e)=>setMsg(e.target.value)} />
//       <button onClick={submit}>Send</button>
//     </div>
//   );
// }

// export default Complaint;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./complaint.css";

// function Complaint() {
//   const [msg, setMsg] = useState("");
//   const [data, setData] = useState([]);
//   const [editId, setEditId] = useState(null);

//   const token = localStorage.getItem("token");

//   const fetchData = async () => {
//     const res = await axios.get(
//       "http://localhost:8000/api/complaints/my",
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     setData(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const submit = async () => {
//     if (!msg) return alert("Enter message");

//     if (editId) {
//       await axios.put(
//         `http://localhost:8000/api/complaints/${editId}`,
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("✏️ Updated successfully");
//       setEditId(null);
//     } else {
//       await axios.post(
//         "http://localhost:8000/api/complaints",
//         { message: msg },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("✅ Complaint sent");
//     }

//     setMsg("");
//     fetchData();
//   };

//   const deleteComplaint = async (id) => {
//     await axios.delete(
//       `http://localhost:8000/api/complaints/${id}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     alert("❌ Deleted");
//     fetchData();
//   };

//   return (
//     <div className="complaint-page">

//       <h2>⚠ Raise Complaint</h2>

//       {/* INPUT BOX */}
//       <div className="complaint-box">
//         <textarea
//           value={msg}
//           placeholder="Write your issue..."
//           onChange={(e) => setMsg(e.target.value)}
//         />

//         <button onClick={submit}>
//           {editId ? "Update Complaint" : "Submit Complaint"}
//         </button>
//       </div>

//       <h3 className="mt-4">📄 My Complaints</h3>

//       {/* LIST */}
//       {data.length > 0 ? (
//         data.map((c) => (
//           <div className="complaint-card" key={c._id}>

//             {/* TOP */}
//             <div className="top">
//               <b>👤 You</b>

//               <span className={`status ${c.status}`}>
//                 {c.status}
//               </span>
//             </div>

//             {/* MESSAGE */}
//             <p>{c.message}</p>

//             <small>
//               🕒 {new Date(c.createdAt).toLocaleString()}
//             </small>

//             {/* REPLY */}
//             {c.reply && (
//               <div className="reply-box">
//                 ✅ Admin Reply: {c.reply}
//               </div>
//             )}

//             {/* ACTIONS */}
//             <div className="actions">
//               <button
//                 className="edit-btn"
//                 onClick={() => {
//                   setMsg(c.message);
//                   setEditId(c._id);
//                 }}
//               >
//                 ✏ Edit
//               </button>

//               <button
//                 className="delete-btn"
//                 onClick={() => deleteComplaint(c._id)}
//               >
//                 ❌ Delete
//               </button>
//             </div>

//           </div>
//         ))
//       ) : (
//         <p>No complaints yet</p>
//       )}

//     </div>
//   );
// }

// export default Complaint;


import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";

import "./complaint.css";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";

function Complaint() {

  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  // FETCH DATA
  const fetchData = async () => {

    const res = await axios.get(
      // "http://localhost:8000/api/complaints/my",
      `${API_URL}/complaints/my`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);



  const submit = async () => {
    if (!msg) return alert("Enter message");

    try {
      // 🟡 EDIT MODE
      if (editId) {
        await axios.put(
          // `http://localhost:8000/api/complaints/${editId}`,
          `${API_URL}/complaints/${editId}`,
          { message: msg },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("✏️ Updated successfully");
        setEditId(null);
      }

      // 🟢 CREATE MODE
      else {
        await axios.post(
          // "http://localhost:8000/api/complaints",
          `${API_URL}/complaints`,
          { message: msg },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("✅ Complaint sent");
      }


      setMsg("");
      fetchData();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  const deleteComplaint = async (id) => {
  try {
    await axios.delete(
      // `http://localhost:8000/api/complaints/user/${id}`,
      `${API_URL}/complaints/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("❌ Deleted");
    fetchData();

  } catch (error) {
    console.log(error);
    alert("Delete failed");
  }
};
  
  return (

    <div className="complaint-page">

      {/* HEADER */}
      <div className="complaint-header">

        <h1>⚠ Raise Complaint</h1>

        <p>
          Report issues, share feedback and get support
          from our waste management team quickly.
        </p>

      </div>

      {/* INPUT BOX */}
      <div className="complaint-box">

        <textarea
          value={msg}
          placeholder="Write your issue..."
          onChange={(e) => setMsg(e.target.value)}
        />

        <button onClick={submit}>
          {editId
            ? "Update Complaint"
            : "Submit Complaint"}
        </button>

      </div>

      {/* COMPLAINT LIST */}
      <h3 className="section-title">
        📄 My Complaints
      </h3>

      {data.length > 0 ? (

        data.map((c) => (

          <div
            className="complaint-card"
            key={c._id}
          >

            {/* TOP */}
            <div className="top">

              <b>👤 You</b>

              <span
                className={`status ${c.status}`}
              >
                {c.status}
              </span>

            </div>

            {/* MESSAGE */}
            <p>{c.message}</p>

            <small>
              🕒
              {" "}
              {new Date(c.createdAt).toLocaleString()}
            </small>

            {/* REPLY */}
            {c.reply && (

              <div className="reply-box">
                ✅ Admin Reply: {c.reply}
              </div>

            )}

            {/* ACTIONS */}
            <div className="actions">

              <button
                className="edit-btn"
                onClick={() => {

                  setMsg(c.message);

                  setEditId(c._id);
                }}
              >
                ✏ Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteComplaint(c._id)
                }
              >
                ❌ Delete
              </button>

            </div>

          </div>

        ))

      ) : (

        <p className="empty-text">
          No complaints yet
        </p>

      )}

      {/* SUPPORT PROCESS */}
      <div className="support-section">

        <div className="support-header">

          <h2>🛠 Support Process Timeline</h2>

          <p>
            Every complaint goes through a simple
            support process for faster resolution.
          </p>

        </div>

        <div className="timeline">

          <div className="timeline-card">
            <div className="circle">1</div>
            <h4>Complaint Submitted</h4>
            <p>
              User sends complaint to admin team.
            </p>
          </div>

          <div className="timeline-card">
            <div className="circle">2</div>
            <h4>Admin Review</h4>
            <p>
              Support team checks and verifies issue.
            </p>
          </div>

          <div className="timeline-card">
            <div className="circle">3</div>
            <h4>Issue Resolved</h4>
            <p>
              User receives reply and final solution.
            </p>
          </div>

        </div>

      </div>

      {/* 🌟 HELP & SUPPORT SECTION */}

      <div className="help-support-section">

        <div className="help-header">

          <h2>💬 Need Quick Help?</h2>

          <p>
            Our support team is always ready to help you with
            waste collection issues, payment problems and request delays.
          </p>

        </div>

        <div className="support-grid">

          {/* CARD 1 */}
          <div className="support-card">

            <div className="support-icon">⏱</div>

            <h3>Fast Response</h3>

            <p>
              Most complaints receive admin response
              within 24 hours for quicker issue solving.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="support-card">

            <div className="support-icon">📍</div>

            <h3>Track Complaint</h3>

            <p>
              Easily monitor complaint progress and
              check admin updates anytime.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="support-card">

            <div className="support-icon">🛡</div>

            <h3>Safe & Secure</h3>

            <p>
              Your complaint information stays protected
              and visible only to authorized admins.
            </p>

          </div>

        </div>

      </div>

      {/* 🌍 GREEN IMPACT SECTION */}

      <div className="green-impact-section">

        <div className="impact-left">

          <h2>🌱 Together We Build A Cleaner Future</h2>

          <p>
            Every complaint helps improve waste management
            services and creates a better environment for society.
          </p>

          <div className="impact-points">

            <div>✅ Better Waste Collection</div>

            <div>✅ Cleaner Public Areas</div>

            <div>✅ Faster Admin Support</div>

            <div>✅ Eco-Friendly Community</div>

          </div>

        </div>

        <div className="impact-right">

          <div className="impact-circle">
            ♻
          </div>

        </div>

      </div>
      <Footer />
    </div>



  );
}

export default Complaint;
