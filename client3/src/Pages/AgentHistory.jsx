import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  AreaChart,
  Area,
  XAxis,
  Tooltip
} from "recharts";

import "./agentHistory.css";
const API_URL = "https://trashgo-backend-zow6.onrender.com/api";

function AgentHistory() {

  const [data, setData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchHistory();

  }, []);

  // ================= FETCH =================

  const fetchHistory =
    async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(

          // "http://localhost:8000/api/agent/history",
           `${API_URL}/agent/history`,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }

        );

        setData(res.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

  // ================= COUNTS =================

  const completedCount =
    data.filter(
      (w) =>
        w.status === "Completed"
    ).length;

  const pendingCount =
    data.filter(
      (w) =>
        w.status !== "Completed"
    ).length;

  const totalWaste =
    data.reduce(
      (a, b) =>
        a + Number(b.weight || 0),
      0
    );

  const totalAmount =
    data.reduce(
      (a, b) =>
        a + Number(b.price || 0),
      0
    );

  // ================= TOP DISTRICT =================

  const districtMap = {};

  data.forEach((w) => {

    districtMap[w.district] =
      (districtMap[w.district] || 0)
      + Number(w.weight || 0);

  });

  const topDistrict =
    Object.entries(districtMap)
      .sort((a, b) => b[1] - a[1])[0];

  // ================= CHART =================

  const weeklyData = [

    { day: "Mon", value: 8 },
    { day: "Tue", value: 14 },
    { day: "Wed", value: 10 },
    { day: "Thu", value: 20 },
    { day: "Fri", value: 16 },
    { day: "Sat", value: 26 },
    { day: "Sun", value: 18 }

  ];

  // ================= SUCCESS =================

  const successData = [
    {
      name: "Success",
      value: 98,
      fill: "#22c55e"
    }
  ];

  return (

    <div className="history-page">

      {/* HERO */}

      <div className="hero-section">

        <div className="hero-content">

          <div>

            <span className="hero-tag">

              🌱 Eco Smart Dashboard

            </span>

            <h1>
              Pickup History Analytics
            </h1>

            <p>
              Monitor waste collection,
              recycling performance,
              eco contribution and
              weekly activity insights.
            </p>

          </div>

          <div className="hero-circle">

            ♻

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="stats-grid">

        <div className="stats-card green">

          <div className="stats-icon">
            ✅
          </div>

          <h1>
            {completedCount}
          </h1>

          <p>
            Completed
          </p>

        </div>

        <div className="stats-card orange">

          <div className="stats-icon">
            ⏳
          </div>

          <h1>
            {pendingCount}
          </h1>

          <p>
            Pending
          </p>

        </div>

        <div className="stats-card blue">

          <div className="stats-icon">
            ⚖
          </div>

          <h1>
            {totalWaste} KG
          </h1>

          <p>
            Waste Collected
          </p>

        </div>

        <div className="stats-card purple">

          <div className="stats-icon">
            💰
          </div>

          <h1>
            ₹ {totalAmount}
          </h1>

          <p>
            Total Earnings
          </p>

        </div>

      </div>

      {/* PERFORMANCE */}

      <div className="analytics-grid">

        {/* SUCCESS */}

        <div className="analytics-card">

          <div className="card-header">

            <h2>
              ♻ Recycling Success
            </h2>

            <span>
              Excellent
            </span>

          </div>

          <div className="radial-chart">

            <ResponsiveContainer
              width="100%"
              height={280}
            >

              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={successData}
                startAngle={180}
                endAngle={0}
              >

                <RadialBar
                  minAngle={15}
                  dataKey="value"
                  clockWise
                />

              </RadialBarChart>

            </ResponsiveContainer>

            <div className="chart-text">

              <h1>
                98%
              </h1>

              <p>
                Success Rate
              </p>

            </div>

          </div>

        </div>

        {/* DISTRICT */}

        <div className="analytics-card district-card">

          <div className="district-top">

            <div>

              <span>
                🏆 Best District
              </span>

              <h1>

                {
                  topDistrict
                  ? topDistrict[0]
                  : "No Data"
                }

              </h1>

            </div>

            <div className="district-badge">

              ⚖ {
                topDistrict
                ? topDistrict[1]
                : 0
              } KG

            </div>

          </div>

          <p>
            Highest performing
            waste collection district
            this week.
          </p>

          <div className="district-progress">

            <div className="progress-fill">

            </div>

          </div>

        </div>

      </div>

      {/* WEEKLY PERFORMANCE */}

      <div className="chart-section">

        <div className="chart-header">

          <div>

            <h2>
              📈 Weekly Collection Performance
            </h2>

            <p>
              Last 7 days waste
              collection overview
            </p>

          </div>

          <div className="week-badge">

            This Week

          </div>

        </div>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <AreaChart
            data={weeklyData}
          >

            <defs>

              <linearGradient
                id="colorData"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#22c55e"
                  stopOpacity={0.5}
                />

                <stop
                  offset="95%"
                  stopColor="#22c55e"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <XAxis
              dataKey="day"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fillOpacity={1}
              fill="url(#colorData)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* WEEKLY PERFORMANCE CARDS */}

      <div className="weekly-grid">

        <div className="weekly-card">

          <h3>
            🚛 Fast Pickup
          </h3>

          <h1>
            98%
          </h1>

          <p>
            Quick waste collection
            performance.
          </p>

        </div>

        <div className="weekly-card">

          <h3>
            🌱 Eco Rating
          </h3>

          <h1>
            A+
          </h1>

          <p>
            Excellent recycling
            contribution this week.
          </p>

        </div>

        <div className="weekly-card">

          <h3>
            💰 Best Earnings
          </h3>

          <h1>
            ₹ {totalAmount}
          </h1>

          <p>
            Highest weekly collection
            earnings achieved.
          </p>

        </div>

      </div>

      {/* EMPTY */}

      {
        !loading &&
        data.length === 0 && (

          <div className="empty-box">

            <h2>
              No Pickup History
            </h2>

            <p>
              Completed waste
              pickups will appear here.
            </p>

          </div>

        )
      }

    </div>

  );

}

export default AgentHistory;
