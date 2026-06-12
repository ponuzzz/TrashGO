import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AnnouncementPopup() {
  const [latest, setLatest] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await API.get("/announcements");

        if (res.data && res.data.length > 0) {
          const latestData = res.data[0];

          const seen = localStorage.getItem(
            "seenAnnouncement"
          );

          if (seen !== latestData._id) {
            setLatest(latestData);
            setShow(true);
          }
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to load announcement");
      }
    };

    fetchAnnouncement();
  }, []);

  const closePopup = () => {
    setShow(false);

    if (latest?._id) {
      localStorage.setItem(
        "seenAnnouncement",
        latest._id
      );
    }
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
