// import { useEffect, useState } from "react";
// import axios from "axios";

// function AgentRequests() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {

//     try {

//       const token =
//         localStorage.getItem("token");

//       const res = await axios.get(
//         "http://localhost:8000/api/agent/work",
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

//   // MARK COLLECTED
//   const markCollected = async (id) => {

//     try {

//       const token =
//         localStorage.getItem("token");

//       await axios.put(
//         `http://localhost:8000/api/agent/collect/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Waste Collected");

//       fetchData();

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="agent-request-page">

//       <h1>♻ Assigned Requests</h1>

//       <div className="request-grid">

//         {data.map((w) => (

//           <div
//             className="request-card"
//             key={w._id}
//           >

//             <h3>{w.wasteType}</h3>

//             <p>
//               👤 {w.name}
//             </p>

//             <p>
//               📞 {w.phone}
//             </p>

//             <p>
//               📍 {w.address}
//             </p>

//             <p>
//               ⚖ {w.weight} Kg
//             </p>

//             <p>
//               💰 ₹ {w.price}
//             </p>

//             <p>
//               📅 {w.pickupDate}
//             </p>

//             <p>
//               ⏰ {w.pickupTime}
//             </p>

//             <button
//               className="collect-btn"
//               onClick={() =>
//                 markCollected(w._id)
//               }
//             >
//               🚚 Mark Collected
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// export default AgentRequests;


// import {
//   useEffect,
//   useState
// } from "react";

// import axios from "axios";

// function AgentRequests() {

//   const [data, setData] =
//     useState([]);

//   useEffect(() => {

//     fetchRequests();

//   }, []);

//   // ================= FETCH REQUESTS =================

//   const fetchRequests =
//     async () => {

//       try {

//         const token =
//           localStorage.getItem("token");

//         const res = await axios.get(

//           "http://localhost:8000/api/agent/work",

//           {
//             headers: {
//               Authorization:
//                 `Bearer ${token}`,
//             },
//           }

//         );

//         setData(res.data);

//       } catch (err) {

//         console.log(err);

//       }

//     };

//   // ================= MARK COLLECTED =================

//   const markCollected =
//     async (id) => {

//       try {

//         const token =
//           localStorage.getItem("token");

//         await axios.put(

//           `http://localhost:8000/api/waste/collect/${id}`,

//           {},

//           {
//             headers: {
//               Authorization:
//                 `Bearer ${token}`,
//             },
//           }

//         );

//         alert(
//           "✅ Waste Collected Successfully"
//         );

//         fetchRequests();

//       } catch (err) {

//         console.log(err);

//       }

//     };

//   return (

//     <div>

//       <h1>
//         Assigned Requests
//       </h1>

//       {
//         data.map((w) => (

//           <div
//             key={w._id}
//             className="request-card"
//           >

//             <h3>
//               {w.wasteType}
//             </h3>

//             <p>
//               <b>User:</b>
//               {" "}
//               {w.name}
//             </p>

//             <p>
//               <b>Phone:</b>
//               {" "}
//               {w.phone}
//             </p>

//             <p>
//               <b>Address:</b>
//               {" "}
//               {w.address}
//             </p>

//             <p>
//               <b>District:</b>
//               {" "}
//               {w.district}
//             </p>

//             <p>
//               <b>Weight:</b>
//               {" "}
//               {w.weight} KG
//             </p>

//             <p>
//               <b>Status:</b>
//               {" "}
//               {w.status}
//             </p>

//             <p>
//               <b>Pickup Date:</b>
//               {" "}
//               {w.pickupDate}
//             </p>

//             <p>
//               <b>Pickup Time:</b>
//               {" "}
//               {w.pickupTime}
//             </p>

//             {/* ================= BUTTON ================= */}

//             {
//               w.status === "Approved" && (

//                 <button
//                   onClick={() =>
//                     markCollected(w._id)
//                   }
//                 >
//                   ✅ Mark Collected
//                 </button>

//               )
//             }

//             {
//               w.status === "Collected" && (

//                 <button disabled>

//                   ✅ Already Collected

//                 </button>

//               )
//             }

//           </div>

//         ))
//       }

//     </div>

//   );

// }

// export default AgentRequests;

import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import "./agentRequests.css";

function AgentRequests() {

  const [data, setData] =
    useState([]);

  useEffect(() => {

    fetchRequests();

  }, []);

  // ================= FETCH REQUESTS =================

  const fetchRequests =
    async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(

          "http://localhost:8000/api/agent/work",

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

      }

    };

  // ================= MARK COLLECTED =================

  const markCollected =
    async (id) => {

      try {

        const token =
          localStorage.getItem("token");

        await axios.put(

          `http://localhost:8000/api/waste/collect/${id}`,

          {},

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }

        );

        alert(
          "✅ Waste Collected Successfully"
        );

        fetchRequests();

      } catch (err) {

        console.log(err);

      }

    };

  return (

    <div className="agent-requests-page">

      {/* ================= HEADER ================= */}

      <div className="agent-request-header">

        <div>

          <h1>
            🚛 Assigned Waste Requests
          </h1>

          <p>
            Manage assigned pickups,
            track waste collection
            progress and update request
            status quickly.
          </p>

        </div>

      </div>

      {/* ================= EMPTY ================= */}

      {
        data.length === 0 && (

          <div className="empty-request-box">

            <h2>
              No Requests Found
            </h2>

            <p>
              Assigned pickup requests
              will appear here.
            </p>

          </div>

        )
      }

      {/* ================= REQUEST GRID ================= */}

      <div className="request-grid">

        {
          data.map((w) => (

            <div
              key={w._id}
              className="request-card"
            >

              {/* TOP */}

              <div className="request-top">

                <div>

                  <h2>
                    ♻ {w.wasteType}
                  </h2>

                  <p className="request-location">
                    📍 {w.district}
                  </p>

                </div>

                <span
                  className={`status-badge ${w.status.toLowerCase()}`}
                >
                  {w.status}
                </span>

              </div>

              {/* USER DETAILS */}

              <div className="details-grid">

                <div className="detail-box">
                  <span>
                    👤 User
                  </span>

                  <h4>
                    {w.name}
                  </h4>
                </div>

                <div className="detail-box">
                  <span>
                    📞 Phone
                  </span>

                  <h4>
                    {w.phone}
                  </h4>
                </div>

                <div className="detail-box">
                  <span>
                    ⚖ Weight
                  </span>

                  <h4>
                    {w.weight} KG
                  </h4>
                </div>

                <div className="detail-box">
                  <span>
                    💰 Price
                  </span>

                  <h4>
                    ₹ {w.price}
                  </h4>
                </div>

              </div>

              {/* ADDRESS */}

              <div className="address-box">

                <h3>
                  🏠 Pickup Address
                </h3>

                <p>
                  {w.address}
                </p>

              </div>

              {/* PICKUP DETAILS */}

              <div className="pickup-info">

                <div className="pickup-item">

                  <span>
                    📅 Pickup Date
                  </span>

                  <h4>
                    {w.pickupDate || "Not Assigned"}
                  </h4>

                </div>

                <div className="pickup-item">

                  <span>
                    ⏰ Pickup Time
                  </span>

                  <h4>
                    {w.pickupTime || "Not Assigned"}
                  </h4>

                </div>

              </div>

              {/* BUTTON */}

              <div className="button-area">

                {
                  w.status === "Approved" && (

                    <button
                      className="collect-btn"
                      onClick={() =>
                        markCollected(w._id)
                      }
                    >
                      ✅ Mark Collected
                    </button>

                  )
                }

                {
                  w.status === "Collected" && (

                    <button
                      className="done-btn"
                      disabled
                    >

                      ✅ Already Collected

                    </button>

                  )
                }

                {
                  w.status === "Completed" && (

                    <button
                      className="completed-btn"
                      disabled
                    >

                      🎉 Pickup Completed

                    </button>

                  )
                }

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default AgentRequests;
