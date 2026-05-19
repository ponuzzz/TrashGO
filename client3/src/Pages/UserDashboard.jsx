// import Layout from "../Layout/Layout";

// export default function Dashboard() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <Layout>
//       {/* PROFILE CARD */}
//       <div style={{
//         background: "linear-gradient(135deg,#0f9b8e,#00c9a7)",
//         color: "white",
//         padding: "20px",
//         borderRadius: "15px"
//       }}>
//         <h4>{user?.name}</h4>
//         <p>{user?.email}</p>
//       </div>

//       {/* TASKS */}
//       <div className="mt-4">
//         <h5>My Tasks</h5>

//         <div className="row text-center">
//           <div className="col-md-4">Total: 10</div>
//           <div className="col-md-4">To Do: 3</div>
//           <div className="col-md-4">Done: 7</div>
//         </div>
//       </div>

//       {/* ACTION CARDS */}
//       <div className="row mt-4">
//         <div className="col-md-3">
//           <div className="card p-3 shadow text-center">
//             👤 Profile
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card p-3 shadow text-center">
//             🔔 Notifications
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card p-3 shadow text-center">
//             ♻ View Requests
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card p-3 shadow text-center">
//             📊 Leaderboard
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import WasteCard from "../components/WasteCard";

// export default function UserDashboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     API.get("/waste/my").then(res => setData(res.data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">My Waste Requests</h1>

//       {data.map(w => <WasteCard key={w._id} waste={w} />)}
//     </div>
//   );
// }



// 

import { useEffect, useState } from "react";
import { getMyWaste } from "../services/api";
import "./dashboard.css";

function UserDashboard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await getMyWaste(token);
        if (Array.isArray(res)) setData(res);
      } catch {
        setData([]);
      }
    };
    fetchData();
  }, []);

  const wasteItems = [
    {
      name: "Plastic",
      img: "https://cdn-icons-png.flaticon.com/512/2909/2909762.png",
      desc: "Plastic waste harms environment. Recycle properly."
    },
    {
      name: "E-Waste",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046870.png",
      desc: "Electronics must be disposed safely."
    },
    {
      name: "Organic",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3075977.png",
      desc: "Food waste can be composted."
    },
    {
      name: "Recyclable",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      desc: "Paper, glass & metals can be reused."
    }
  ];

  const filteredItems = wasteItems.filter(
    (item) =>
      (filter === "All" || item.name === filter) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid p-0">

      {/* 🔥 HERO SECTION */}
      <div className="hero-section d-flex align-items-center">
        <div className="container text-white">
          <h1 className="display-4 fw-bold">
            ♻ Smart Waste Management System
          </h1>
          <p className="lead">
            Track • Manage • Recycle • Save Earth 🌍
          </p>
          <button className="btn btn-success btn-lg mt-3">
            Get Started
          </button>
        </div>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="container my-5">
        <div className="row g-3">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Search waste..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All</option>
              <option>Plastic</option>
              <option>E-Waste</option>
              <option>Organic</option>
              <option>Recyclable</option>
            </select>
          </div>
        </div>
      </div>

      {/* ♻️ WASTE CARDS */}
      <div className="container mb-5">
        <div className="row g-4">
          {filteredItems.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card waste-card text-center p-3">
                <img src={item.img} width="60" />
                <h5 className="mt-3">{item.name}</h5>
                <p className="text-muted">{item.desc}</p>
                <button className="btn btn-outline-success btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌍 WHY SECTION */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2>Why Waste Management Matters?</h2>
          <p className="text-muted">
            Proper waste management helps reduce pollution,
            save natural resources, and build a sustainable future.
          </p>
        </div>
      </div>

      {/* 📊 RECENT REQUESTS */}
      <div className="container my-5">
        <h3>Recent Requests</h3>
        {data.length > 0 ? (
          data.map((w) => (
            <div key={w._id} className="d-flex justify-content-between border p-3 mb-2">
              <div>
                <b>{w.wasteType}</b>
                <p className="text-muted">₹ {w.price}</p>
              </div>
              <span className="badge bg-success">{w.status}</span>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>

      {/* 🌱 ECO TIPS */}
      <div className="eco-section text-center text-white p-5">
        <h2>🌱 Eco Tips</h2>
        <p>Reduce • Reuse • Recycle</p>
      </div>

      {/* 🔻 FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="row gy-4">

            <div className="col-md-4">
              <h4>♻ WasteApp</h4>
              <p>Smart recycling for a better future.</p>
            </div>

            <div className="col-md-4">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Explore</li>
                <li>Eco Tips</li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Subscribe</h5>
              <input className="form-control mb-2" placeholder="Email" />
              <button className="btn btn-success w-100">Subscribe</button>
            </div>

          </div>

          <hr />
          <p className="text-center">
            © 2026 Waste Management System 🌍
          </p>
        </div>
      </footer>

    </div>
  );
}

export default UserDashboard;
