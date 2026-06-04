import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";
function AnnouncementPopup() {
  const [latest, setLatest] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      // .get("http://localhost:8000/api/announcements")
        .get(`${API_URL}/announcements`)
      .then((res) => {
        if (res.data.length > 0) {
          const latestData = res.data[0]; // latest announcement
          
          // ✅ check localStorage (avoid showing again)
          const seen = localStorage.getItem("seenAnnouncement");

          if (seen !== latestData._id) {
            setLatest(latestData);
            setShow(true);
          }
        }
      });
  }, []);

  const closePopup = () => {
    setShow(false);
    localStorage.setItem("seenAnnouncement", latest._id);
  };

  if (!show || !latest) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h4>📢 {latest.title}</h4>
        <p>{latest.message}</p>

        <small>
          🕒 {new Date(latest.createdAt).toLocaleString()}
        </small>

        <br /><br />

        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}

export default AnnouncementPopup;
