// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./adminComplaint.css";

// function AdminComplaint() {
//   const [data, setData] = useState([]);
//   const [replyMap, setReplyMap] = useState({});
//   const [editId, setEditId] = useState(null);

//   const token = localStorage.getItem("token");

//   const fetchData = async () => {
//     const res = await axios.get(
//       "http://localhost:8000/api/complaints",
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     setData(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const sendReply = async (id) => {
//     const reply = replyMap[id];
//     if (!reply) return alert("Enter reply");

//     await axios.put(
//       `http://localhost:8000/api/complaints/reply/${id}`,
//       { reply },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     alert("✅ Reply sent");
//     setEditId(null);
//     fetchData();
//   };

//   const clearReply = async (id) => {
//     if (!window.confirm("Clear this reply?")) return;

//     await axios.put(
//       `http://localhost:8000/api/complaints/reply/${id}`,
//       { reply: "" },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     alert("❌ Reply cleared");
//     fetchData();
//   };

//   const deleteComplaint = async (id) => {
//     if (!window.confirm("Delete this complaint?")) return;

//     await axios.delete(
//       `http://localhost:8000/api/complaints/${id}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     alert("🗑 Deleted");
//     fetchData();
//   };

//   return (
//     <div className="admin-page">
//       <h2>⚠ Complaint Management</h2>

//       {data.map((c) => (
//         <div className="admin-card" key={c._id}>

//           <div className="top">
//             <b>👤 {c.user?.name}</b>
//             <span className={`status ${c.status}`}>
//               {c.status}
//             </span>
//           </div>

//           <p className="msg">{c.message}</p>

//           {c.reply && (
//             <div className="reply-done">
//               ✔ {c.reply}
//             </div>
//           )}

//           <input
//             placeholder="Write reply..."
//             value={replyMap[c._id] || ""}
//             onChange={(e) =>
//               setReplyMap({
//                 ...replyMap,
//                 [c._id]: e.target.value
//               })
//             }
//           />

//           <div className="btns">
//             <button onClick={() => sendReply(c._id)}>
//               💬 {c.reply ? "Update" : "Send"}
//             </button>

//             <button
//               className="danger"
//               onClick={() => clearReply(c._id)}
//             >
//               ❌ Clear
//             </button>

//             <button
//               className="delete"
//               onClick={() => deleteComplaint(c._id)}
//             >
//               🗑 Delete
//             </button>
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default AdminComplaint;


import {
  useEffect,
  useState
} from "react";
import API from "../api/axios";
import { toast } from "react-toastify";


import "./adminComplaint.css";


function AdminComplaint() {

  const [data, setData] =
    useState([]);

  const [replyMap, setReplyMap] =
    useState({});

  

  // FETCH
const fetchData = async () => {

  try {

    const res = await API.get(
      "/complaints"
    );

    setData(res.data);

  } catch (err) {

    toast.error(
      "Failed to load complaints ❌"
    );

  }

};
 
 
  useEffect(() => {

    fetchData();

  }, []);

  // SEND REPLY

  const sendReply = async (id) => {

  const reply = replyMap[id];

  if (!reply) {
    toast.warning(
      "Enter reply first ⚠️"
    );
    return;
  }

  try {

    await API.put(
      `/complaints/reply/${id}`,
      { reply }
    );

    toast.success(
      "Reply sent ✅"
    );

    fetchData();

  } catch (err) {

    toast.error(
      "Failed to send reply ❌"
    );

  }

};

  // CLEAR REPLY

  const clearReply = async (id) => {

  if (
    !window.confirm(
      "Clear this reply?"
    )
  ) return;

  try {

    await API.put(
      `/complaints/reply/${id}`,
      { reply: "" }
    );

    toast.success(
      "Reply cleared ❌"
    );

    fetchData();

  } catch (err) {

    toast.error(
      "Failed to clear reply ❌"
    );

  }

};

  // DELETE

  const deleteComplaint = async (id) => {

  if (
    !window.confirm(
      "Delete complaint?"
    )
  ) return;

  try {

    await API.delete(
      `/complaints/${id}`
    );

    toast.success(
      "Complaint deleted 🗑️"
    );

    fetchData();

  } catch (err) {

    toast.error(
      "Delete failed ❌"
    );

  }

};

  // CARD UI

  const renderCard =
    (c) => (

      <div
        className="admin-card"
        key={c._id}
      >

        <div className="top">

          <b>
            👤 {c.user?.name}
          </b>

          <span
            className={`status ${c.status}`}
          >
            {c.status}
          </span>

        </div>

        <p className="msg">
          {c.message}
        </p>

        <small>

          🕒 {
            new Date(
              c.createdAt
            ).toLocaleString()
          }

        </small>

        {
          c.reply && (

            <div className="reply-done">

              ✔ {c.reply}

            </div>

          )
        }

        <input

          placeholder="Write reply..."

          value={
            replyMap[c._id] || ""
          }

          onChange={(e) =>

            setReplyMap({

              ...replyMap,

              [c._id]:
              e.target.value

            })

          }

        />

        <div className="btns">

          <button
            onClick={() =>
              sendReply(c._id)
            }
          >

            💬 {
              c.reply
              ? "Update"
              : "Send"
            }

          </button>

          <button

            className="danger"

            onClick={() =>
              clearReply(c._id)
            }
          >

            ❌ Clear

          </button>

          <button

            className="delete"

            onClick={() =>
              deleteComplaint(c._id)
            }
          >

            🗑 Delete

          </button>

        </div>

      </div>

    );

  return (

    <div className="admin-page">

      {/* USER */}

      <div className="complaint-section">

        <h2>
          👤 User Complaints
        </h2>

        {
          data
          .filter(
            (c) =>
              c.role === "user"
          )
          .map(renderCard)
        }

      </div>

      {/* AGENT */}

      <div className="complaint-section">

        <h2>
          🚛 Agent Complaints
        </h2>

        {
          data
          .filter(
            (c) =>
              c.role === "agent"
          )
          .map(renderCard)
        }

      </div>

    </div>

  );

}

export default AdminComplaint;
