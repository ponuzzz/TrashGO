
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./adminDashboard.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function AdminDashboard() {

//   const [data, setData] = useState({
//     chart: [],
//   });

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const fetchDashboard = async () => {

//     try {

//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "http://localhost:8000/api/admin/dashboard",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setData(res.data);

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   return (

//     <div className="dashboard-page">

//       <h2 className="dashboard-title">
//         📊 Dashboard
//       </h2>

//       {/* ================= CARDS ================= */}

//       <div className="dashboard-cards">

//         <div className="dash-card">
//           <h4>👥 Users</h4>
//           <h1>{data.totalUsers || 0}</h1>
//         </div>

//         <div className="dash-card">
//           <h4>♻ Requests</h4>
//           <h1>{data.totalRequests || 0}</h1>
//         </div>

//         <div className="dash-card">
//           <h4>⏳ Pending</h4>
//           <h1>{data.pending || 0}</h1>
//         </div>

//         <div className="dash-card">
//           <h4>✅ Completed</h4>
//           <h1>{data.completed || 0}</h1>
//         </div>

//         <div className="dash-card">
//           <h4>💰 Paid</h4>
//           <h1>{data.paid || 0}</h1>
//         </div>

//         <div className="dash-card revenue">
//           <h4>💵 Revenue</h4>
//           <h1>₹ {data.revenue || 0}</h1>
//         </div>

//       </div>

//       {/* ================= CHART ================= */}

//       <div className="chart-box">

//         <h3>
//           📈 Payment Analytics
//         </h3>

//         <ResponsiveContainer width="100%" height={300}>

//           <LineChart data={data.chart || []}>

//             <XAxis dataKey="_id" hide />

//             <YAxis />

//             <Tooltip />

//             <Line
//               type="monotone"
//               dataKey="price"
//               stroke="#16a34a"
//               strokeWidth={3}
//             />

//           </LineChart>

//         </ResponsiveContainer>

//       </div>

//     </div>
//   );
// }

// export default AdminDashboard;


import { useEffect, useState } from "react";
import axios from "axios";
import "./admindashboard.css";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  FaUsers,
  FaRecycle,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaTrash,
} from "react-icons/fa";

function AdminDashboard() {
  const [data, setData] = useState({
    chart: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        // "http://localhost:8000/api/admin/dashboard",
          `${API_URL}/admin/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // PIE CHART DATA
  const pieData = [
    { name: "Pending", value: data.pending || 0 },
    { name: "Completed", value: data.completed || 0 },
    { name: "Paid", value: data.paid || 0 },
  ];

  const COLORS = ["#f59e0b", "#22c55e", "#06b6d4"];

  // BAR CHART DATA
  const wasteData = [
    { type: "Plastic", count: 20 },
    { type: "Metal", count: 10 },
    { type: "E-Waste", count: 15 },
    { type: "Glass", count: 8 },
  ];

  return (
    <div className="dashboard-page">

      {/* ================= WELCOME ================= */}

      <div className="welcome-banner">
        <div>
          <h1>♻ Welcome Admin</h1>
          <p>
            Monitor waste requests, payments, complaints and analytics
            in real time.
          </p>
        </div>

        <button className="banner-btn">
          View Reports
        </button>
      </div>

      {/* ================= STAT CARDS ================= */}

      <div className="dashboard-cards">

        <div className="dash-card users">
          <div className="icon-box">
            <FaUsers />
          </div>

          <div>
            <h4>Total Users</h4>
            <h1>{data.totalUsers || 0}</h1>
          </div>
        </div>

        <div className="dash-card requests">
          <div className="icon-box">
            <FaRecycle />
          </div>

          <div>
            <h4>Requests</h4>
            <h1>{data.totalRequests || 0}</h1>
          </div>
        </div>

        <div className="dash-card pending">
          <div className="icon-box">
            <FaClock />
          </div>

          <div>
            <h4>Pending</h4>
            <h1>{data.pending || 0}</h1>
          </div>
        </div>

        <div className="dash-card completed">
          <div className="icon-box">
            <FaCheckCircle />
          </div>

          <div>
            <h4>Completed</h4>
            <h1>{data.completed || 0}</h1>
          </div>
        </div>

        <div className="dash-card revenue">
          <div className="icon-box">
            <FaMoneyBillWave />
          </div>

          <div>
            <h4>Revenue</h4>
            <h1>₹ {data.revenue || 0}</h1>
          </div>
        </div>

      </div>

      {/* ================= CHART SECTION ================= */}

      <div className="chart-grid">

        {/* LINE CHART */}

        <div className="chart-box">

          <h3>📈 Payment Analytics</h3>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={data.chart || []}>

              <XAxis dataKey="_id" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="price"
                stroke="#22c55e"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}

        <div className="chart-box">

          <h3>📊 Request Status</h3>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* ================= BOTTOM SECTION ================= */}

      <div className="bottom-grid">

        {/* BAR CHART */}

        <div className="chart-box">

          <h3>🗑 Waste Categories</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={wasteData}>

              <XAxis dataKey="type" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#16a34a"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* RECENT ACTIVITY */}

        <div className="activity-box">

          <h3>🔔 Recent Activity</h3>

          <div className="activity-item">
            ♻ New waste request created
          </div>

          <div className="activity-item">
            💰 Payment received from user
          </div>

          <div className="activity-item">
            ⚠ Complaint submitted
          </div>

          <div className="activity-item">
            ✅ Request marked completed
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
