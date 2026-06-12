import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Announcements() {
  const [data, setData] = useState([]);

  const fetchAnnouncements = async () => {
    try {
      const res = await API.get("/announcements");
      setData(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load announcements");
      setData([]);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  if (data.length === 0) return null;

  return (
    <div className="announcement-container">

      {/* TITLE */}
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

      <ToastContainer />

    </div>
  );
}

export default Announcements;