

// import { useEffect, useState } from "react";
// import axios from "axios";

// function AdminWaste() {
//   const [data, setData] = useState([]);
//   const [district, setDistrict] = useState("");
//   const [search, setSearch] = useState("");
//   const [agents, setAgents] = useState([]);

//   useEffect(() => {
//     fetchData();
//     // const fetchAgents = async () => {

//     //   const token = localStorage.getItem("token");

//     //   const res = await axios.get(
//     //     "http://localhost:8000/api/admin/agents",
//     //     {
//     //       headers: {
//     //         Authorization: `Bearer ${token}`
//     //       }
//     //     }
//     //   );

//     //   setAgents(res.data);
//     // };

//     // fetchAgents();
//   }, []);
//   // agent
//   // const assignAgent = async (wasteId, agentId) => {

//   //   const token = localStorage.getItem("token");

//   //   await axios.put(
//   //     `http://localhost:8000/api/admin/assign/${wasteId}`,
//   //     { agentId },
//   //     {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`
//   //       }
//   //     }
//   //   );

//   //   alert("✅ Agent Assigned");

//   //   fetchData();
//   // };

//   // ✅ FETCH DATA
//   const fetchData = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       const res = await axios.get(
//         "http://localhost:8000/api/waste",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setData(res.data);
//     } catch (err) {
//       console.log("❌ ADMIN ERROR:", err.response?.data || err.message);
//     }
//   };

//   // ✅ UPDATE STATUS
//   const updateStatus = async (id, status) => {
//     const token = localStorage.getItem("token");

//     try {
//       await axios.put(
//         `http://localhost:8000/api/waste/status/${id}`,
//         { status },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       await fetchData();
//     } catch (err) {
//       console.log("❌ UPDATE ERROR:", err.response?.data);
//     }
//   };

//   // ✅ NEW: ADMIN PAYMENT FUNCTION
//   const markAdminPaid = async (id) => {
//     const token = localStorage.getItem("token");

//     try {
//       await axios.put(
//         `http://localhost:8000/api/waste/admin-pay/${id}`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       alert("✅ Payment marked as paid");
//       fetchData();
//     } catch (err) {
//       console.log(err);
//       alert("❌ Payment failed");
//     }
//   };

//   // ✅ FILTER + SEARCH
//   const filteredData = data.filter((w) => {
//     const matchDistrict =
//       district === "" ||
//       w.district?.toLowerCase() === district.toLowerCase();

//     const matchSearch =
//       w.name?.toLowerCase().includes(search.toLowerCase()) ||
//       w.wasteType?.toLowerCase().includes(search.toLowerCase()) ||
//       w.phone?.includes(search);

//     return matchDistrict && matchSearch;
//   });

//   return (
//     <div style={{ marginLeft: "240px", padding: "20px" }}>
//       <h2 style={{ textAlign: "center" }}>♻ Waste Requests (Admin)</h2>

//       {/* 🔍 SEARCH + FILTER */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "10px",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search name / waste / phone"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "8px",
//             width: "220px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//           }}
//         />

//         <select
//           value={district}
//           onChange={(e) => setDistrict(e.target.value)}
//           style={{
//             padding: "8px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//           }}
//         >
//           <option value="">All Districts</option>
//           <option>Thrissur</option>
//           <option>Palakkad</option>
//           <option>Kollam</option>
//           <option>Calicut</option>
//         </select>
//         {/* <select>
//           onChange={(e) =>
//             assignAgent(w._id, e.target.value)
//           }
//         > */}

//           {/* <option>Select Agent</option>

//           {agents.map((a) => (
//             <option value={a._id}>
//               {a.name}
//             </option>
//           ))}

//         </select> */}
//       </div>

//       {/* 📦 DATA DISPLAY */}
//       {filteredData.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No requests found ❌</p>
//       ) : (
//         filteredData.map((w) => (
//           <div key={w._id} className="card p-3 mb-2">
//             <b>{w.wasteType}</b>
//             <p>₹ {w.price}</p>

//             <hr />

//             <h5>👤 User Details</h5>
//             <p><b>Name:</b> {w.name || w.user?.name}</p>
//             <p><b>Phone:</b> {w.phone || "-"}</p>
//             <p><b>District:</b> {w.district}</p>
//             <p><b>Place:</b> {w.place}</p>
//             <p><b>Landmark:</b> {w.landmark}</p>
//             <p><b>Address:</b> {w.address}</p>

//             <hr />

//             <p><b>Status:</b> {w.status}</p>
//             <p>
//               <b>Payment:</b>{" "}
//               {w.paymentStatus === "Paid" ? (
//                 <span style={{ color: "green" }}>Paid</span>
//               ) : (
//                 <span style={{ color: "red" }}>Not Paid</span>
//               )}
//             </p>

//             {/* ===================== */}
//             {/* 🔥 FINAL ACTIONS LOGIC */}
//             {/* ===================== */}

//             {/* APPROVE */}
//             {w.status === "Pending" && (
//               <button onClick={() => updateStatus(w._id, "Approved")}>
//                 Approve
//               </button>
//             )}

//             {/* USER PAYMENT FLOW */}
//             {w.paidBy === "USER" &&
//               w.status === "Approved" &&
//               w.paymentStatus !== "Paid" && (
//                 <button disabled>Waiting User Payment</button>
//               )}

//             {/* ADMIN PAYMENT FLOW */}
//             {w.paidBy === "ADMIN" &&
//               w.status === "Approved" &&
//               w.paymentStatus !== "Paid" && (
//                 <button onClick={() => markAdminPaid(w._id)}>
//                   💰 Mark Paid (Admin)
//                 </button>
//               )}

//             {/* COMPLETE */}
//             {w.status === "Approved" &&
//               w.paymentStatus === "Paid" && (
//                 <button onClick={() => updateStatus(w._id, "Completed")}>
//                   Complete
//                 </button>
//               )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default AdminWaste;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./adminWaste.css";

// import {
//   FaRecycle,
//   FaUser,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaMoneyBillWave,
//   FaCheckCircle,
//   FaClock,
//   FaSearch,
//   FaFilter,
// } from "react-icons/fa";

// function AdminWaste() {

//   const [data, setData] = useState([]);
//   const [district, setDistrict] = useState("");
//   const [search, setSearch] = useState("");
//   const [agents, setAgents] = useState([]);
//   useEffect(() => {
//     fetchData();
//     fetchAgents();
//   }, []);

//  const fetchAgents = async () => {

//   try {

//     const token = localStorage.getItem("token");

//     const res = await axios.get(
//       "http://localhost:8000/api/admin/agents",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     setAgents(res.data);

//   } catch (err) {

//     console.log(err);

//   }
// };


//   // ================= FETCH =================

//   const fetchData = async () => {

//     const token = localStorage.getItem("token");

//     try {

//       const res = await axios.get(
//         "http://localhost:8000/api/waste",
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

//   // ================= UPDATE STATUS =================

//   const updateStatus = async (id, status) => {

//     const token = localStorage.getItem("token");

//     try {

//       await axios.put(
//         `http://localhost:8000/api/waste/status/${id}`,
//         { status },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       fetchData();

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   // ================= ADMIN PAYMENT =================

//   const markAdminPaid = async (id) => {

//     const token = localStorage.getItem("token");

//     try {

//       await axios.put(
//         `http://localhost:8000/api/waste/admin-pay/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Payment Updated");

//       fetchData();

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   // ================= FILTER =================

//   const filteredData = data.filter((w) => {

//     const matchDistrict =
//       district === "" ||
//       w.district?.toLowerCase() === district.toLowerCase();

//     const matchSearch =
//       w.name?.toLowerCase().includes(search.toLowerCase()) ||
//       w.wasteType?.toLowerCase().includes(search.toLowerCase()) ||
//       w.phone?.includes(search);

//     return matchDistrict && matchSearch;

//   });

//   return (

//     <div className="admin-page">

//       {/* ================= HEADER ================= */}

//       <div className="top-section">

//         <div className="heading-left">

//           <div className="heading-icon">
//             ♻
//           </div>

//           <div>
//             <h1>Waste Requests</h1>

//             <p>
//               Manage waste requests, approvals and payment process
//             </p>
//           </div>

//         </div>

//       </div>

//       {/* ================= FILTERS ================= */}

//       <div className="filter-wrapper">

//         <div className="filter-title">
//           <FaFilter />
//           <span>Smart Filters</span>
//         </div>

//         <div className="filter-box">

//           <div className="search-input">

//             <FaSearch className="search-icon" />

//             <input
//               type="text"
//               placeholder="Search name / waste / phone"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />

//           </div>

//           <select
//             value={district}
//             onChange={(e) => setDistrict(e.target.value)}
//           >

//             <option value="">All Districts</option>

//             <option>Thrissur</option>
//             <option>Palakkad</option>
//             <option>Kollam</option>
//             <option>Calicut</option>

//           </select>

//           <select
//             onChange={(e) =>
//               assignAgent(w._id, e.target.value)
//             }
//           >

//             <option>
//               Select Agent
//             </option>

//             {
//               agents.map((a) => (

//                 <option
//                   value={a._id}
//                 >
//                   {a.name}
//                 </option>

//               ))
//             }

//           </select>

//         </div>

//       </div>

//       {/* ================= REQUEST GRID ================= */}

//       <div className="request-grid">

//         {filteredData.length === 0 ? (

//           <div className="empty-box">
//             No Waste Requests Found ❌
//           </div>

//         ) : (

//           filteredData.map((w) => (

//             <div className="request-card" key={w._id}>

//               {/* TOP */}

//               <div className="card-header">

//                 <div className="waste-info">

//                   <div className="waste-icon">
//                     <FaRecycle />
//                   </div>

//                   <div>
//                     <h3>{w.wasteType}</h3>
//                     <p>₹ {w.price}</p>
//                   </div>

//                 </div>

//                 <div>

//                   <span
//                     className={`status-badge ${w.status.toLowerCase()}`}
//                   >
//                     {w.status === "Pending" && <FaClock />}
//                     {w.status === "Completed" && <FaCheckCircle />}

//                     {w.status}
//                   </span>

//                 </div>

//               </div>

//               {/* USER DETAILS */}

//               <div className="details-section">

//                 <h4>👤 User Details</h4>

//                 <div className="detail-item">
//                   <FaUser />
//                   <span>{w.name || w.user?.name}</span>
//                 </div>

//                 <div className="detail-item">
//                   <FaPhone />
//                   <span>{w.phone}</span>
//                 </div>

//                 <div className="detail-item">
//                   <FaMapMarkerAlt />
//                   <span>
//                     {w.place}, {w.district}
//                   </span>
//                 </div>

//                 <div className="address-box">
//                   {w.address}
//                 </div>

//               </div>

//               {/* PAYMENT */}

//               <div className="payment-section">

//                 <div className="payment-row">

//                   <span>
//                     <FaMoneyBillWave /> Payment
//                   </span>

//                   {w.paymentStatus === "Paid" ? (
//                     <span className="paid">
//                       Paid
//                     </span>
//                   ) : (
//                     <span className="not-paid">
//                       Not Paid
//                     </span>
//                   )}

//                 </div>

//               </div>

//               {/* BUTTONS */}

//               <div className="button-group">

//                 {w.status === "Pending" && (
//                   <button
//                     className="approve-btn"
//                     onClick={() =>
//                       updateStatus(w._id, "Approved")
//                     }
//                   >
//                     Approve Request
//                   </button>
//                 )}

//                 {w.paidBy === "USER" &&
//                   w.status === "Approved" &&
//                   w.paymentStatus !== "Paid" && (
//                     <button className="waiting-btn">
//                       Waiting User Payment
//                     </button>
//                   )}

//                 {w.paidBy === "ADMIN" &&
//                   w.status === "Approved" &&
//                   w.paymentStatus !== "Paid" && (
//                     <button
//                       className="pay-btn"
//                       onClick={() =>
//                         markAdminPaid(w._id)
//                       }
//                     >
//                       Mark Payment Paid
//                     </button>
//                   )}

//                 {w.status === "Approved" &&
//                   w.paymentStatus === "Paid" && (
//                     <button
//                       className="complete-btn"
//                       onClick={() =>
//                         updateStatus(w._id, "Completed")
//                       }
//                     >
//                       Complete Request
//                     </button>
//                   )}

//               </div>

//             </div>

//           ))

//         )}

//       </div>

//     </div>
//   );
// }

// export default AdminWaste;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./adminWaste.css";

// import {
//   FaRecycle,
//   FaUser,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaMoneyBillWave,
//   FaCheckCircle,
//   FaClock,
//   FaSearch,
//   FaFilter,
// } from "react-icons/fa";

// function AdminWaste() {

//   const [data, setData] = useState([]);
//   const [district, setDistrict] = useState("");
//   const [search, setSearch] = useState("");
//   const [agents, setAgents] = useState([]);
//   const [pickupDate, setPickupDate] =
//     useState("");

//   const [pickupTime, setPickupTime] =
//     useState("");

//   const [selectedAgent, setSelectedAgent] =
//     useState("");

//   useEffect(() => {

//     fetchData();
//     fetchAgents();

//   }, []);

//   // ================= FETCH AGENTS =================

//   const fetchAgents = async () => {

//     try {

//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "http://localhost:8000/api/admin/agents",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setAgents(res.data);

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   // ================= FETCH WASTE =================

//   const fetchData = async () => {

//     const token = localStorage.getItem("token");

//     try {

//       const res = await axios.get(
//         "http://localhost:8000/api/waste",
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

//   // ================= UPDATE STATUS =================

//   const updateStatus = async (id, status) => {

//     const token = localStorage.getItem("token");

//     try {

//       await axios.put(
//         `http://localhost:8000/api/waste/status/${id}`,
//         { status },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       fetchData();

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   // ================= ASSIGN AGENT =================

//   const assignAgent = async (id, agentId) => {

//     try {

//       const token = localStorage.getItem("token");

//       await axios.put(
//         `http://localhost:8000/api/waste/status/${id}`,
//         {
//           status: "Assigned",
//           agentId: agentId,

//           // OPTIONAL DATE + TIME
//           pickupDate: "2026-05-15",
//           pickupTime: "10:30 AM",
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Agent Assigned Successfully");

//       fetchData();

//     } catch (err) {

//       console.log(err);

//       alert("Assignment Failed");

//     }
//   };

//   // ================= ADMIN PAYMENT =================

//   const markAdminPaid = async (id) => {

//     const token = localStorage.getItem("token");

//     try {

//       await axios.put(
//         `http://localhost:8000/api/waste/admin-pay/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Payment Updated");

//       fetchData();

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   // ================= FILTER =================

//   const filteredData = data.filter((w) => {

//     const matchDistrict =
//       district === "" ||
//       w.district?.toLowerCase() === district.toLowerCase();

//     const matchSearch =
//       w.name?.toLowerCase().includes(search.toLowerCase()) ||
//       w.wasteType?.toLowerCase().includes(search.toLowerCase()) ||
//       w.phone?.includes(search);

//     return matchDistrict && matchSearch;

//   });

//   return (

//     <div className="admin-page">

//       {/* ================= HEADER ================= */}

//       <div className="top-section">

//         <div className="heading-left">

//           <div className="heading-icon">
//             ♻
//           </div>

//           <div>

//             <h1>Waste Requests</h1>

//             <p>
//               Manage waste requests, approvals,
//               agent assignment and payments
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* ================= FILTER ================= */}

//       <div className="filter-wrapper">

//         <div className="filter-title">

//           <FaFilter />

//           <span>Smart Filters</span>

//         </div>

//         <div className="filter-box">

//           <div className="search-input">

//             <FaSearch className="search-icon" />

//             <input
//               type="text"
//               placeholder="Search name / waste / phone"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />

//           </div>

//           <select
//             value={district}
//             onChange={(e) => setDistrict(e.target.value)}
//           >

//             <option value="">All Districts</option>

//             <option>Thrissur</option>
//             <option>Palakkad</option>
//             <option>Kollam</option>
//             <option>Calicut</option>
//             <option>TVM</option>

//           </select>

//         </div>

//       </div>

//       {/* ================= REQUEST GRID ================= */}

//       <div className="request-grid">

//         {filteredData.length === 0 ? (

//           <div className="empty-box">
//             No Waste Requests Found ❌
//           </div>

//         ) : (

//           filteredData.map((w) => (

//             <div className="request-card" key={w._id}>

//               {/* ================= TOP ================= */}

//               <div className="card-header">

//                 <div className="waste-info">

//                   <div className="waste-icon">
//                     <FaRecycle />
//                   </div>

//                   <div>

//                     <h3>{w.wasteType}</h3>

//                     <p>₹ {w.price}</p>

//                   </div>

//                 </div>

//                 <div>

//                   <span
//                     className={`status-badge ${w.status.toLowerCase()}`}
//                   >

//                     {w.status === "Pending" && <FaClock />}
//                     {w.status === "Completed" && <FaCheckCircle />}

//                     {w.status}

//                   </span>

//                 </div>

//               </div>

//               {/* ================= USER DETAILS ================= */}

//               <div className="details-section">

//                 <h4>👤 User Details</h4>

//                 <div className="detail-item">

//                   <FaUser />

//                   <span>{w.name || w.user?.name}</span>

//                 </div>

//                 <div className="detail-item">

//                   <FaPhone />

//                   <span>{w.phone}</span>

//                 </div>

//                 <div className="detail-item">

//                   <FaMapMarkerAlt />

//                   <span>
//                     {w.place}, {w.district}
//                   </span>

//                 </div>

//                 <div className="address-box">
//                   {w.address}
//                 </div>

//               </div>

//               {/* ================= ASSIGNED AGENT ================= */}

//               {
//                 w.agent && (

//                   <div className="agent-box">

//                     <h4>🚛 Assigned Agent</h4>

//                     <p>
//                       <strong>Name:</strong>
//                       {" "}
//                       {w.agent?.name}
//                     </p>

//                     <p>
//                       <strong>Phone:</strong>
//                       {" "}
//                       {w.agent?.phone}
//                     </p>

//                     <p>
//                       <strong>District:</strong>
//                       {" "}
//                       {w.agent?.district}
//                     </p>

//                     <p>
//                       <strong>Pickup Date:</strong>
//                       {" "}
//                       {w.pickupDate}
//                     </p>

//                     <p>
//                       <strong>Pickup Time:</strong>
//                       {" "}
//                       {w.pickupTime}
//                     </p>

//                   </div>

//                 )
//               }

//               {/* ================= PAYMENT ================= */}

//               <div className="payment-section">

//                 <div className="payment-row">

//                   <span>
//                     <FaMoneyBillWave />
//                     {" "}
//                     Payment
//                   </span>

//                   {
//                     w.paymentStatus === "Paid" ? (

//                       <span className="paid">
//                         Paid
//                       </span>

//                     ) : (

//                       <span className="not-paid">
//                         Not Paid
//                       </span>

//                     )
//                   }

//                 </div>

//               </div>

//               {/* ================= AGENT ASSIGN ================= */}

//               {
//                 w.status === "Approved" &&
//                 w.paymentStatus === "Paid" &&
//                 !w.agent && (

//                   <div className="assign-agent-box">

//                     <select
//                       onChange={(e) =>
//                         assignAgent(w._id, e.target.value)
//                       }
//                     >

//                       <option value="">
//                         Select Agent
//                       </option>

//                       {
//                         agents
//                           .filter(
//                             (a) =>
//                               a.district?.toLowerCase() ===
//                               w.district?.toLowerCase()
//                           )
//                           .map((a) => (

//                             <option
//                               key={a._id}
//                               value={a._id}
//                             >
//                               {a.name}
//                               {" - "}
//                               {a.district}
//                             </option>

//                           ))
//                       }

//                     </select>

//                   </div>

//                 )
//               }

//               {/* ================= BUTTONS ================= */}

//               <div className="button-group">

//                 {/* APPROVE */}

//                 {
//                   w.status === "Pending" && (

//                     <button
//                       className="approve-btn"
//                       onClick={() =>
//                         updateStatus(w._id, "Approved")
//                       }
//                     >
//                       Approve Request
//                     </button>

//                   )
//                 }

//                 {/* USER PAYMENT */}

//                 {
//                   w.paidBy === "USER" &&
//                   w.status === "Approved" &&
//                   w.paymentStatus !== "Paid" && (

//                     <button className="waiting-btn">
//                       Waiting User Payment
//                     </button>

//                   )
//                 }

//                 {/* ADMIN PAYMENT */}

//                 {
//                   w.paidBy === "ADMIN" &&
//                   w.status === "Approved" &&
//                   w.paymentStatus !== "Paid" && (

//                     <button
//                       className="pay-btn"
//                       onClick={() =>
//                         markAdminPaid(w._id)
//                       }
//                     >
//                       Mark Payment Paid
//                     </button>

//                   )
//                 }

//                 {/* COMPLETE */}

//                 {
//                   w.status === "Collected" && (

//                     <button
//                       className="complete-btn"
//                       onClick={() =>
//                         updateStatus(w._id, "Completed")
//                       }
//                     >
//                       Complete Request
//                     </button>

//                   )
//                 }

//               </div>

//             </div>

//           ))

//         )}

//       </div>

//     </div>
//   );
// }

// export default AdminWaste;
import { useEffect, useState } from "react";
import axios from "axios";
import "./adminwaste.css";

import {
  FaRecycle,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const API_URL = "https://trashgo-backend-zow6.onrender.com/api";
const SERVER_URL = "https://trashgo-backend-zow6.onrender.com";



function AdminWaste() {

  const [data, setData] = useState([]);
  const [district, setDistrict] = useState("");
  const [search, setSearch] = useState("");

  // AGENTS
  const [agents, setAgents] = useState([]);

  const [assignData, setAssignData] = useState({});

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // MODAL
  const [showModal, setShowModal] = useState(false);

  const [selectedWaste, setSelectedWaste] = useState(null);

  // ================= USE EFFECT =================

  useEffect(() => {

    fetchData();
    fetchAgents();

  }, []);

  // ================= FETCH AGENTS =================

  const fetchAgents = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        // "http://localhost:8000/api/admin/agents",
         `${API_URL}/admin/agents`,
        {
          headers: {
            Authorization: `Bearer ${ token } `,
          },
        }
      );

      setAgents(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  const handleAssignChange = (id, field, value) => {

    setAssignData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));

  };

  // ================= FETCH WASTE =================

  const fetchData = async () => {

    const token = localStorage.getItem("token");

    try {

      const res = await axios.get(
        // "http://localhost:8000/api/waste",
          `${API_URL}/waste`,
        {
          headers: {
            Authorization: `Bearer ${ token } `,
          },
        }
      );

      setData(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  // ================= APPROVE + ASSIGN =================

  const approveWaste = async (id) => {

    try {

      const token = localStorage.getItem("token");

      const data = assignData[id];

      if (!data?.agentId) {
        return alert("Select Agent");
      }

      if (!data?.pickupDate) {
        return alert("Select Pickup Date");
      }

      if (!data?.pickupTime) {
        return alert("Select Pickup Time");
      }

      await axios.put(

        // `http://localhost:8000/api/waste/status/${id}`,
        `${API_URL}/waste/status/${id}`,

{
  status: "Approved",
    agentId: data.agentId,
      pickupDate: data.pickupDate,
        pickupTime: data.pickupTime,
        },

{
  headers: {
    Authorization: `Bearer ${token}`,
          },
}

      );

alert("✅ Approved Successfully");

fetchData();

    } catch (err) {

  console.log(err);

}

  };

// ================= UPDATE STATUS =================

const updateStatus = async (id, status) => {

  const token = localStorage.getItem("token");

  try {

    await axios.put(
      // `http://localhost:8000/api/waste/status/${id}`,
        `${API_URL}/waste/status/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchData();

  } catch (err) {

    console.log(err);

  }
};

// ================= ADMIN PAYMENT =================

const markAdminPaid = async (id) => {

  const token = localStorage.getItem("token");

  try {

    await axios.put(
      // `http://localhost:8000/api/waste/admin-pay/${id}`,
      `${API_URL}/waste/admin-pay/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("✅ Payment Updated");

    fetchData();

  } catch (err) {

    console.log(err);

  }
};

// ================= FILTER =================

const filteredData = data.filter((w) => {

  const matchDistrict =
    district === "" ||
    w.district?.toLowerCase() === district.toLowerCase();

  const matchSearch =
    w.name?.toLowerCase().includes(search.toLowerCase()) ||
    w.wasteType?.toLowerCase().includes(search.toLowerCase()) ||
    w.phone?.includes(search);

  return matchDistrict && matchSearch;

});

// ================= PAGINATION =================

const indexOfLast = currentPage * itemsPerPage;

const indexOfFirst = indexOfLast - itemsPerPage;

const currentItems = filteredData.slice(
  indexOfFirst,
  indexOfLast
);

const totalPages = Math.ceil(
  filteredData.length / itemsPerPage
);

return (

  <div className="admin-page">

    {/* ================= HEADER ================= */}

    <div className="top-section">

      <div className="heading-left">

        <div className="heading-icon">
          ♻
        </div>

        <div>

          <h1>Waste Requests</h1>

          <p>
            Manage waste requests,
            agent assignment,
            approvals and payments
          </p>

        </div>

      </div>

    </div>

    {/* ================= FILTER ================= */}

    <div className="filter-wrapper">

      <div className="filter-title">

        <FaFilter />

        <span>Smart Filters</span>

      </div>

      <div className="filter-box">

        <div className="search-input">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search name / waste / phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >

          <option value="">
            All Districts
          </option>

          <option>Thrissur</option>
          <option>Palakkad</option>
          <option>Kollam</option>
          <option>Calicut</option>
          <option>TVM</option>
          <option>Wayanad</option>
          <option>Idukki</option>
          <option>Alappuzha</option>

        </select>

      </div>

    </div>

    {/* ================= REQUEST GRID ================= */}

    <div className="request-grid">

      {currentItems.length === 0 ? (

        <div className="empty-box">
          No Waste Requests Found ❌
        </div>

      ) : (

        currentItems.map((w) => (

          <div
            className="request-card"
            key={w._id}
          >

            {/* ================= TOP ================= */}

            <div className="card-header">

              <div className="waste-info">

                <div className="waste-icon">
                  <FaRecycle />
                </div>

                <div>

                  <h3>{w.wasteType}</h3>

                  <p>₹ {w.price}</p>

                </div>

              </div>

              <div>

                <span
                  className={`status-badge ${w.status.toLowerCase()}`}
                >

                  {w.status === "Pending" && <FaClock />}

                  {w.status === "Completed" &&
                    <FaCheckCircle />
                  }

                  {w.status}

                </span>

              </div>

            </div>

            {/* ================= USER DETAILS ================= */}

            <div className="details-section">

              <h4>👤 User Details</h4>

              <div className="detail-item">

                <FaUser />

                <span>
                  {w.name || w.user?.name}
                </span>

              </div>

              <div className="detail-item">

                <FaPhone />

                <span>
                  {w.phone}
                </span>

              </div>

              <div className="detail-item">

                <FaMapMarkerAlt />

                <span>
                  {w.place}, {w.district}
                </span>

              </div>

              <div className="address-box">
                {w.address}
              </div>

              {
                w.image && (

                  <div className="waste-image-box">

                    <h4>🖼 Waste Image</h4>

                    <img
                      // src={`http://localhost:8000/uploads/${w.image}`}
                        src={`${SERVER_URL}/uploads/${w.image}`}
                      alt="waste"
                      className="waste-image"
                    />

                  </div>

                )
              }

            </div>

            {/* ================= AGENT DETAILS ================= */}

            {
              w.agent && (

                <div className="agent-box">

                  <h4>
                    🚛 Assigned Agent
                  </h4>

                  <p>
                    <strong>Name:</strong>
                    {" "}
                    {w.agent?.name}
                  </p>

                  <p>
                    <strong>Phone:</strong>
                    {" "}
                    {w.agent?.phone}
                  </p>

                  <p>
                    <strong>District:</strong>
                    {" "}
                    {w.agent?.district}
                  </p>

                  <p>
                    <strong>Pickup Date:</strong>
                    {" "}
                    {w.pickupDate}
                  </p>

                  <p>
                    <strong>Pickup Time:</strong>
                    {" "}
                    {w.pickupTime}
                  </p>

                </div>

              )
            }

            {/* ================= PAYMENT ================= */}

            <div className="payment-section">

              <div className="payment-row">

                <span>
                  <FaMoneyBillWave />
                  {" "}
                  Payment
                </span>

                {
                  w.paymentStatus === "Paid" ? (

                    <span className="paid">
                      Paid
                    </span>

                  ) : (

                    <span className="not-paid">
                      Not Paid
                    </span>

                  )
                }

              </div>

            </div>

            {/* ================= APPROVE + ASSIGN ================= */}

            {
              w.status === "Pending" && (

                <div className="approval-box">

                  <h4>
                    🚛 Assign Agent & Pickup
                  </h4>

                  <button
                    className="approve-btn"
                    onClick={() => {
                      setSelectedWaste(w);
                      setShowModal(true);
                    }}
                  >
                    🚛 Assign Agent
                  </button>

                </div>

              )
            }

            {/* ================= BUTTONS ================= */}

            <div className="button-group">

              {/* USER PAYMENT */}

              {
                w.paidBy === "USER" &&
                w.status === "Approved" &&
                w.paymentStatus !== "Paid" && (

                  <button className="waiting-btn">

                    Waiting User Payment

                  </button>

                )
              }

              {/* ADMIN PAYMENT */}

              {
                w.paidBy === "ADMIN" &&
                w.status === "Approved" &&
                w.paymentStatus !== "Paid" && (

                  <button
                    className="pay-btn"
                    onClick={() =>
                      markAdminPaid(w._id)
                    }
                  >
                    Mark Payment Paid
                  </button>

                )
              }

              {/* COMPLETE */}

              {
                w.status === "Collected" && (

                  <button
                    className="complete-btn"
                    onClick={() =>
                      updateStatus(
                        w._id,
                        "Completed"
                      )
                    }
                  >
                    Complete Request
                  </button>

                )
              }

            </div>

          </div>

        ))

      )}

    </div>

    {/* ================= PAGINATION ================= */}

    {
      totalPages > 1 && (

        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
          >
            Prev
          </button>

          {
            [...Array(totalPages)].map((_, i) => (

              <button
                key={i}

                className={
                  currentPage === i + 1
                    ? "active-page"
                    : ""
                }

                onClick={() =>
                  setCurrentPage(i + 1)
                }
              >

                {i + 1}

              </button>

            ))
          }

          <button
            disabled={currentPage === totalPages}

            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
          >
            Next
          </button>

        </div>

      )
    }

    {/* ================= MODAL ================= */}

    {
      showModal && selectedWaste && (

        <div className="modal-overlay">

          <div className="assign-modal">

            <div className="modal-top">

              <h2>
                🚛 Assign Agent
              </h2>

              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>

            </div>

            <div className="modal-content">

              <h3>
                {selectedWaste.wasteType}
              </h3>

              <p>
                📍 {selectedWaste.place},
                {" "}
                {selectedWaste.district}
              </p>

              <select
                value={
                  assignData[selectedWaste._id]?.agentId || ""
                }

                onChange={(e) =>
                  handleAssignChange(
                    selectedWaste._id,
                    "agentId",
                    e.target.value
                  )
                }
              >

                <option value="">
                  Select Agent
                </option>

                {
                  (
                    agents.filter(
                      (a) =>
                        a.district?.trim().toLowerCase() ===
                        selectedWaste.district?.trim().toLowerCase()
                    ).length > 0

                      ?

                      agents.filter(
                        (a) =>
                          a.district?.trim().toLowerCase() ===
                          selectedWaste.district?.trim().toLowerCase()
                      )

                      :

                      agents

                  ).map((a) => (

                    <option
                      key={a._id}
                      value={a._id}
                    >

                      {a.name} - {a.district}

                    </option>

                  ))
                }

              </select>

              <input
                type="date"

                value={
                  assignData[selectedWaste._id]?.pickupDate || ""
                }

                onChange={(e) =>
                  handleAssignChange(
                    selectedWaste._id,
                    "pickupDate",
                    e.target.value
                  )
                }
              />

              <input
                type="time"

                value={
                  assignData[selectedWaste._id]?.pickupTime || ""
                }

                onChange={(e) =>
                  handleAssignChange(
                    selectedWaste._id,
                    "pickupTime",
                    e.target.value
                  )
                }
              />

              <button
                className="modal-approve-btn"

                onClick={async () => {

                  await approveWaste(selectedWaste._id);

                  setShowModal(false);

                }}
              >

                ✅ Confirm Assignment

              </button>

            </div>

          </div>

        </div>

      )
    }

  </div>
);
}

export default AdminWaste;
