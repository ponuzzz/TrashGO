import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaRecycle,
  FaTruck,
  FaCheckCircle,
  FaMoneyBillWave,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaLeaf
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "./agentDashboard.css";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";
function AgentDashboard() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    fetchRequests();

  }, []);

  const fetchRequests = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.get(

        // "http://localhost:8000/api/agent/work",
        `${API_URL}/agent/work`,

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }

      );

      setRequests(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  // ================= COUNTS =================

  const assignedCount =
    requests.filter(
      (w) =>
        w.status === "Approved"
    ).length;

  const collectedCount =
    requests.filter(
      (w) =>
        w.status === "Collected"
    ).length;

  const completedCount =
    requests.filter(
      (w) =>
        w.status === "Completed"
    ).length;

  // ================= EARNINGS =================

  const totalEarnings =
    requests
      .filter(
        (w) =>
          w.status === "Collected"
      )
      .reduce(
        (total, item) =>
          total + Number(item.price || 0),
        0
      );

  // ================= CHART DATA =================

  const chartData = [

    {
      name: "Assigned",
      value: assignedCount
    },

    {
      name: "Collected",
      value: collectedCount
    },

    {
      name: "Completed",
      value: completedCount
    }

  ];

  // ================= COMPLETED REQUESTS =================

  const completedRequests =
    requests.filter(
      (w) =>
        w.status === "Completed"
    );

  return (

    <div className="agent-dashboard">

      {/* ================= HERO ================= */}

      <div className="dashboard-hero">

        <div>

          <h1>
            🚛 Agent Dashboard
          </h1>

          <p>
            Manage assigned pickups,
            monitor completed collections,
            track earnings and improve
            eco-friendly waste management.
          </p>

        </div>

        <div className="hero-icon">

          <FaRecycle />

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="dashboard-grid">

        {/* ASSIGNED */}

        <div className="dashboard-card">

          <div className="card-icon assigned">

            <FaClock />

          </div>

          <div>

            <h4>
              Assigned
            </h4>

            <h1>
              {assignedCount}
            </h1>

          </div>

        </div>

        {/* COLLECTED */}

        <div className="dashboard-card">

          <div className="card-icon collected">

            <FaTruck />

          </div>

          <div>

            <h4>
              Collected
            </h4>

            <h1>
              {collectedCount}
            </h1>

          </div>

        </div>

        {/* COMPLETED */}

        <div className="dashboard-card">

          <div className="card-icon completed">

            <FaCheckCircle />

          </div>

          <div>

            <h4>
              Completed
            </h4>

            <h1>
              {completedCount}
            </h1>

          </div>

        </div>

        {/* EARNINGS */}

        <div className="dashboard-card">

          <div className="card-icon earnings">

            <FaMoneyBillWave />

          </div>

          <div>

            <h4>
              Earnings
            </h4>

            <h1>
              ₹ {totalEarnings}
            </h1>

          </div>

        </div>

      </div>

      {/* ================= DASHBOARD MIDDLE ================= */}

      <div className="middle-layout">

        {/* ================= CHART ================= */}

        <div className="chart-section">

          <div className="section-title">

            <h2>
              📊 Pickup Performance
            </h2>

          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={chartData}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[10, 10, 0, 0]}
                fill="#22c55e"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* ================= ECO BOX ================= */}

        <div className="eco-box">

          <h2>
            🌱 Eco Mission
          </h2>

          <div className="eco-item">

            <FaLeaf />

            <p>
              Help keep your district
              clean and plastic free.
            </p>

          </div>

          <div className="eco-item">

            <FaLeaf />

            <p>
              Safe waste collection
              protects the environment.
            </p>

          </div>

          <div className="eco-item">

            <FaLeaf />

            <p>
              Recycling reduces landfill
              pollution and saves energy.
            </p>

          </div>

        </div>

      </div>

      {/* ================= COMPLETED PICKUPS ================= */}

      <div className="recent-section">

        <div className="section-title">

          <h2>
            ✅ Completed Pickup Requests
          </h2>

        </div>

        {
          completedRequests.length === 0 ? (

            <div className="empty-box">

              No Completed Pickups

            </div>

          ) : (

            completedRequests
              .slice(0, 5)
              .map((w) => (

                <div
                  className="recent-card"
                  key={w._id}
                >

                  <div className="recent-left">

                    <h3>
                      {w.wasteType}
                    </h3>

                    <p>

                      <FaUser />

                      {" "}

                      {w.name}

                    </p>

                    <p>

                      <FaMapMarkerAlt />

                      {" "}

                      {w.place},
                      {" "}
                      {w.district}

                    </p>

                  </div>

                  <div className="recent-right">

                    <span
                      className={`status ${w.status.toLowerCase()}`}
                    >
                      {w.status}
                    </span>

                    <h4>
                      ₹ {w.price}
                    </h4>

                  </div>

                </div>

              ))

          )
        }

      </div>

    </div>

  );

}

export default AgentDashboard;
