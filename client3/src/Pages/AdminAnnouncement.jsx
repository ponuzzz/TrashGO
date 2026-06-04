import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";

function AdminAnnouncement() {
  const [form, setForm] = useState({ title: "", message: "" });
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  // ✅ FETCH ALL
  const fetchAnnouncements = async () => {
    try {
      // const res = await axios.get("http://localhost:8000/api/announcements");
      const res = await axios.get(
        `${API_URL}/announcements`
      );
      setList(res.data);
    } catch {
      setList([]);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // ✅ CREATE / UPDATE
  const handleSubmit = async () => {
    try {
      if (editId) {
        await axios.put(
          // `http://localhost:8000/api/announcements/${editId}`,
            `${API_URL}/announcements/${editId}`,
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setEditId(null);
      } else {
        await axios.post(
          // "http://localhost:8000/api/announcements",
            `${API_URL}/announcements`,
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setForm({ title: "", message: "" });
      fetchAnnouncements();
    } catch (err) {
      alert("Error saving announcement");
    }
  };

  // ❌ DELETE
  const handleDelete = async (id) => {
    await axios.delete(
      // `http://localhost:8000/api/announcements/${id}`,
        `${API_URL}/announcements/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchAnnouncements();
  };

  //   return (
  //     <div style={{ padding: "20px" }}>
  //       <h2>📢 Add / Manage Announcements</h2>

  //       {/* FORM */}
  //       <input
  //         placeholder="Title"
  //         value={form.title}
  //         onChange={(e) =>
  //           setForm({ ...form, title: e.target.value })
  //         }
  //         style={{ display: "block", marginBottom: "10px" }}
  //       />

  //       <textarea
  //         placeholder="Message"
  //         value={form.message}
  //         onChange={(e) =>
  //           setForm({ ...form, message: e.target.value })
  //         }
  //         style={{ display: "block", marginBottom: "10px" }}
  //       />

  //       <button onClick={handleSubmit}>
  //         {editId ? "Update" : "Add"}
  //       </button>

  //       <hr />

  //       {/* 📦 LIST */}
  //       {list.length === 0 ? (
  //         <p>No announcements</p>
  //       ) : (
  //         list.map((a) => (
  //           <div
  //             key={a._id}
  //             style={{
  //               border: "1px solid #ccc",
  //               padding: "12px",
  //               marginTop: "10px",
  //               borderRadius: "8px",
  //               background: "#f9f9f9"
  //             }}
  //           >
  //             <h4>📢 {a.title}</h4>
  //             <p>{a.message}</p>

  //             {/* 🕒 DATE TIME */}
  //             <small style={{ color: "gray" }}>
  //               🕒 {new Date(a.createdAt).toLocaleString()}
  //             </small>

  //             <br /><br />

  //             {/* EDIT */}
  //             <button
  //               onClick={() => {
  //                 setForm({
  //                   title: a.title,
  //                   message: a.message,
  //                 });
  //                 setEditId(a._id);
  //               }}
  //               style={{ marginRight: "10px" }}
  //             >
  //               ✏ Edit
  //             </button>

  //             {/* DELETE */}
  //             <button onClick={() => handleDelete(a._id)}>
  //               🗑 Delete
  //             </button>
  //           </div>
  //         ))
  //       )}
  //     </div>
  //   );
  // }
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
        📢 Announcement Management
      </h2>

      {/* 🧾 FORM CARD */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginBottom: "20px"
        }}
      >
        <h4 style={{ marginBottom: "15px" }}>
          {editId ? "✏ Edit Announcement" : "➕ Create Announcement"}
        </h4>

        {/* TITLE */}
        <label><b>Title (Short Heading)</b></label>
        <input
          placeholder="Example: Waste Collection Update"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        {/* MESSAGE */}
        <label><b>Message (Full Details)</b></label>
        <textarea
          placeholder="Example: Pickup agent will arrive at 10 AM tomorrow"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          style={{
            width: "100%",
            padding: "8px",
            height: "80px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        {/* BUTTONS */}
        <button
          onClick={handleSubmit}
          style={{
            background: "#27ae60",
            color: "#fff",
            border: "none",
            padding: "8px 15px",
            borderRadius: "6px",
            marginRight: "10px"
          }}
        >
          {editId ? "Update" : "Add"}
        </button>

        <button
          onClick={() => {
            setForm({ title: "", message: "" });
            setEditId(null);
          }}
          style={{
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            padding: "8px 15px",
            borderRadius: "6px"
          }}
        >
          Clear
        </button>
      </div>

      {/* 📦 LIST */}
      {list.length === 0 ? (
        <p>No announcements</p>
      ) : (
        list.map((a) => (
          <div
            key={a._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "8px",
              background: "#fdfdfd"
            }}
          >
            <h4>📢 {a.title}</h4>
            <p>{a.message}</p>

            <small style={{ color: "gray" }}>
              🕒 {new Date(a.createdAt).toLocaleString()}
            </small>

            <br /><br />

            <button
              onClick={() => {
                setForm({
                  title: a.title,
                  message: a.message,
                });
                setEditId(a._id);
              }}
              style={{ marginRight: "10px" }}
            >
              ✏ Edit
            </button>

            <button onClick={() => handleDelete(a._id)}>
              🗑 Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default AdminAnnouncement;