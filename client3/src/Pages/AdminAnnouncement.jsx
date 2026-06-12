import { useEffect, useState } from "react";

import API from "../api/axios";
import { toast } from "react-toastify";

function AdminAnnouncement() {
  const [form, setForm] = useState({ title: "", message: "" });
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);


// ✅ FETCH ALL
const fetchAnnouncements = async () => {
  try {

    const res = await API.get(
      "/announcements"
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

      await API.put(
        `/announcements/${editId}`,
        form
      );

      toast.success(
        "Announcement updated ✅"
      );

      setEditId(null);

    } else {

      await API.post(
        "/announcements",
        form
      );

      toast.success(
        "Announcement added ✅"
      );

    }

    setForm({
      title: "",
      message: "",
    });

    fetchAnnouncements();

  } catch (err) {

    toast.error(
      "Error saving announcement ❌"
    );

  }
};


// ❌ DELETE
const handleDelete = async (id) => {

  try {

    await API.delete(
      `/announcements/${id}`
    );

    toast.success(
      "Announcement deleted 🗑️"
    );

    fetchAnnouncements();

  } catch (err) {

    toast.error(
      "Delete failed ❌"
    );

  }

};
  
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