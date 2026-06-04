import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";

function Announcements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:8000/api/announcements")
       .get(`${API_URL}/announcements`)
      .then((res) => setData(res.data))
      .catch(() => setData([]));
  }, []);

  if (data.length === 0) return null;

  return (
    <div className="announcement-container">

      {/* 🔥 TITLE */}
      <div className="announcement-header">
        📢 Important Announcements
      </div>

      {data.map((a) => (
        <div key={a._id} className="announcement-card">
          <div className="announcement-title">
            📢 {a.title}
          </div>

          <div>{a.message}</div>

          <div className="announcement-time">
            🕒 {new Date(a.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Announcements;
