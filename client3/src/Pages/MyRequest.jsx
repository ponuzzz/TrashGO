// import { useEffect, useState } from "react";
// import { getMyWaste } from "../services/api";
// import axios from "axios";
// import "./myRequest.css";

// function MyRequest() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await getMyWaste(token);

//         if (Array.isArray(res)) setData(res);
//         else setData([]);
//       } catch {
//         setData([]);
//       }
//     };
//     fetch();
//   }, []);


//   // 🎨 STATUS COLORS
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "badge bg-warning";
//       case "Approved":
//         return "badge bg-primary";
//       case "Assigned":
//         return "badge bg-secondary";
//       case "Collected":
//         return "badge bg-info";
//       case "Completed":
//         return "badge bg-success";
//       default:
//         return "badge bg-dark";
//     }
//   };

//   // 📊 PROGRESS %
//   const getProgress = (status) => {
//     switch (status) {
//       case "Pending":
//         return 20;
//       case "Approved":
//         return 40;
//       case "Assigned":
//         return 60;
//       case "Collected":
//         return 80;
//       case "Completed":
//         return 100;
//       default:
//         return 0;
//     }
//   };
//   const handleFakePayment = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       setLoadingPay(true);

//       await axios.post(
//         `http://localhost:5000/api/waste/fake-payment/${selectedWaste._id}`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       alert("✅ Payment Successful");

//       setShowPayment(false);
//       window.location.reload();

//     } catch (err) {
//       alert(err.response?.data || "Payment failed");
//     } finally {
//       setLoadingPay(false);
//     }
//   };


//   const handlePayment = async (id) => {
//     const token = localStorage.getItem("token");


//     try {
//       // ✅ CREATE ORDER
//       const order = await axios.post(
//         `http://localhost:5000/api/waste/create-order/${id}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       console.log("ORDER:", order.data);

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY,
//         amount: order.data.amount,
//         currency: "INR",
//         order_id: order.data.id,

//         name: "Waste App",
//         description: "Waste Pickup Payment",

//         handler: async function (response) {
//           console.log("PAYMENT RESPONSE:", response);

//           await axios.post(
//             "http://localhost:5000/api/waste/verify-payment",
//             {
//               wasteId: id,
//               ...response,
//             },
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           alert("✅ Payment Successful");
//           window.location.reload();
//         },

//         theme: {
//           color: "#27ae60",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.log("PAYMENT ERROR:", err.response?.data || err.message);
//       alert(err.response?.data || "Payment failed");
//     }
//   };

//   return (
//     <div className="myrequest-container">

//       <h2 className="mb-4 text-success fw-bold">
//         📦 My Waste Requests
//       </h2>

//       {data.length > 0 ? (
//         <>
//           {data.map((w) => (
//             <div key={w._id} className="card mb-3 shadow request-card">

//               <div className="card-body">

//                 <div className="d-flex justify-content-between">
//                   <div>
//                     <h5>{w.wasteType}</h5>
//                     <p className="text-muted">₹ {w.price}</p>
//                   </div>

//                   <span className={getStatusColor(w.status)}>
//                     {w.status}
//                   </span>
//                 </div>

//                 <div className="progress my-3">
//                   <div
//                     className="progress-bar bg-success"
//                     style={{ width: `${getProgress(w.status)}%` }}
//                   >
//                     {getProgress(w.status)}%
//                   </div>
//                 </div>

//                 <p>
//                   💳 Payment:{" "}
//                   {w.paymentStatus === "Paid" ? (
//                     <span className="text-success fw-bold">Paid</span>
//                   ) : (
//                     <span className="text-danger">Not Paid</span>
//                   )}
//                 </p>

//                 {/* ✅ PAY BUTTON */}
//                 {/* {w.status === "Approved" && w.paymentStatus !== "Paid" && (
//                 <button
//                   className="btn btn-warning btn-sm"
//                   onClick={() => {
//                     setSelectedWaste(w);
//                     setShowPayment(true);
//                   }}
//                 >
//                   💳 Pay Now
//                 </button>
//               )} */}
//                 {w.status === "Approved" && w.paymentStatus !== "Paid" && (
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => handlePayment(w._id)}
//                   >
//                     💳 Pay Now
//                   </button>
//                 )}


//               </div>
//             </div>
//           ))}
//         </>
//       ) : (
//         <p>No requests found</p>
//       )}


//     </div>
//   );

// }

// export default MyRequest
// import { useEffect, useState } from "react";
// import { getMyWaste } from "../services/api";
// import axios from "axios";
// import "./myRequest.css";

// function MyRequest() {
//   const [data, setData] = useState([]);

//    useEffect(() => {
//      const fetch = async () => {
//        try {
//          const token = localStorage.getItem("token");
//          const res = await getMyWaste(token);

//          if (Array.isArray(res)) setData(res);
//          else setData([]);
//        } catch {
//          setData([]);
//        }
//      };
//      fetch();
//    }, []);


//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending": return "badge bg-warning";
//       case "Approved": return "badge bg-primary";
//       case "Assigned": return "badge bg-secondary";
//       case "Collected": return "badge bg-info";
//       case "Completed": return "badge bg-success";
//       default: return "badge bg-dark";
//     }
//   };

//   const getProgress = (status) => {
//     switch (status) {
//       case "Pending": return 20;
//       case "Approved": return 40;
//       case "Assigned": return 60;
//       case "Collected": return 80;
//       case "Completed": return 100;
//       default: return 0;
//     }
//   };

//   const handlePayment = async (id) => {
//     const token = localStorage.getItem("token");

//     try {
//       const order = await axios.post(
//         `http://localhost:5000/api/waste/create-order/${id}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY,
//         amount: order.data.amount,
//         currency: "INR",
//         order_id: order.data.id,
//         name: "Waste App",
//         description: "Waste Pickup Payment",
//         handler: async function (response) {
//           await axios.post(
//             "http://localhost:5000/api/waste/verify-payment",
//             {
//               wasteId: id,
//               ...response,
//             },
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           alert("✅ Payment Successful");
//           window.location.reload();
//         },
//         theme: {
//           color: "#27ae60",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.log("PAYMENT ERROR:", err.response?.data || err.message);
//       alert(err.response?.data || "Payment failed");
//     }
//   };

//   return (
//     <div className="myrequest-container">
//       <h2 className="mb-4 text-success fw-bold">📦 My Waste Requests</h2>
//       {data.length > 0 ? (
//         <>
//           {data.map((w) => (
//             <div key={w._id} className="card mb-3 shadow request-card">
//               <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                   <div>
//                     <h5>{w.wasteType}</h5>
//                     <p className="text-muted">₹ {w.price}</p>
//                   </div>
//                   <span className={getStatusColor(w.status)}>{w.status}</span>
//                 </div>

//                 <div className="progress my-3">
//                   <div
//                     className="progress-bar bg-success"
//                     style={{ width: `${getProgress(w.status)}%` }}
//                   >
//                     {getProgress(w.status)}%
//                   </div>
//                 </div>

//                 <p>
//                   💳 Payment:{" "}
//                   {w.paymentStatus === "Paid" ? (
//                     <span className="text-success fw-bold">Paid</span>
//                   ) : (
//                     <span className="text-danger">Not Paid</span>
//                   )}
//                 </p>

//                 {w.status === "Approved" && w.paymentStatus !== "Paid" && (
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => handlePayment(w._id)}
//                   >
//                     💳 Pay Now
//                   </button>
//                 )} 

//               </div>
//             </div>
//           ))}
//         </>
//       ) : (
//         <p>No requests found</p>
//       )}
//     </div>
//   );
// }

// export default MyRequest;


// 8==method
// import { useEffect, useState } from "react";
// import { getMyWaste } from "../services/api";
// import Announcements from "../Pages/Announcements";
// import AnnouncementPopup from "../Pages/AnnouncementPopup";
// import axios from "axios";
// import "./myRequest.css";

// function MyRequest() {
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await getMyWaste(token);

//         if (Array.isArray(res)) setData(res);
//         else setData([]);
//       } catch {
//         setData([]);
//       }
//     };

//     fetchData();

//     // 🔥 AUTO CHECK BACKEND EVERY 3 SEC
//     const interval = setInterval(fetchData, 3000);

//     return () => clearInterval(interval);
//   }, []);


//   // 🎨 STATUS COLORS
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending": return "badge bg-warning";
//       case "Approved": return "badge bg-primary";
//       case "Assigned": return "badge bg-secondary";
//       case "Collected": return "badge bg-info";
//       case "Completed": return "badge bg-success";
//       default: return "badge bg-dark";
//     }
//   };

//   // 📊 PROGRESS %
//   const getProgress = (status) => {
//     switch (status) {
//       case "Pending": return 20;
//       case "Approved": return 40;
//       case "Assigned": return 60;
//       case "Collected": return 80;
//       case "Completed": return 100;
//       default: return 0;
//     }
//   };

//   const handleDelete = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete this request?")) return;

//     try {
//       await axios.delete(`http://localhost:8000/api/waste/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Deleted successfully");
//       window.location.reload();
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   const handleEdit = (item) => {
//     localStorage.setItem("editData", JSON.stringify(item));
//     window.location.href = "/create";
//   };


//   const handlePayment = async (id) => {
//     const token = localStorage.getItem("token");

//     try {
//       const order = await axios.post(
//         `http://localhost:8000/api/waste/create-order/${id}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY,
//         amount: order.data.amount,
//         currency: "INR",
//         order_id: order.data.id,
//         name: "Waste App",
//         description: "Waste Pickup Payment",
//         handler: async function (response) {
//           await axios.post(
//             "http://localhost:8000/api/waste/verify-payment",
//             {
//               wasteId: id,
//               ...response,
//             },
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           alert("✅ Payment Successful");
//           window.location.reload();
//         },
//         theme: {
//           color: "#27ae60",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.log("PAYMENT ERROR:", err.response?.data || err.message);
//       alert(err.response?.data || "Payment failed");
//     }
//   };

//   return (
//     <div className="myrequest-container">
//        <Announcements />
//        <AnnouncementPopup />

//       <h2 className="mb-4 text-success fw-bold">📦 My Waste Requests</h2>

//       {data.length > 0 ? (
//         <>
//           {data.map((w) => (
//             <div key={w._id} className="card mb-3 shadow request-card">
//               <div className="card-body">

//                 <div className="d-flex justify-content-between">
//                   <div>
//                     <h5>{w.wasteType}</h5>
//                     <p className="text-muted">₹ {w.price}</p>
//                   </div>
//                   <span className={getStatusColor(w.status)}>
//                     {w.status}
//                   </span>
//                 </div>

//                 <div className="progress my-3">
//                   <div
//                     className="progress-bar bg-success"
//                     style={{ width: `${getProgress(w.status)}%` }}
//                   >
//                     {getProgress(w.status)}%
//                   </div>
//                 </div>

//                 <p>
//                   💳 Payment:{" "}
//                   {w.paymentStatus === "Paid" ? (
//                     <span className="text-success fw-bold">Paid</span>
//                   ) : (
//                     <span className="text-danger">Not Paid</span>
//                   )}
//                 </p>

//                 {/* 💰 ADMIN PAYMENT CASE */}
//                 {w.paidBy === "ADMIN" ? (
//                   <span className="text-success fw-bold">
//                     💰 Admin will pay you during pickup
//                   </span>
//                 ) : (
//                   <>
//                     {/* 💳 USER PAYMENT CASE */}
//                     {w.status === "Approved" && w.paymentStatus !== "Paid" && (
//                       <button
//                         className="btn btn-warning btn-sm"
//                         onClick={() => handlePayment(w._id)}
//                       >
//                         💳 Pay Now
//                       </button>
//                     )}
//                   </>
//                 )}

//                 {w.status?.toLowerCase() === "pending" && (
//                   <>
//                     <button
//                       className="btn btn-primary btn-sm me-2"
//                       onClick={() => handleEdit(w)}
//                     >
//                       ✏ Edit
//                     </button>

//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDelete(w._id)}
//                     >
//                       🗑 Delete
//                     </button>
//                   </>
//                 )}


//               </div>
//             </div>
//           ))}
//         </>
//       ) : (
//         <p>No requests found</p>
//       )}
//     </div>
//   );
// }

// export default MyRequest;



// import { useEffect, useState } from "react";
// import { getMyWaste } from "../services/api";
// import Announcements from "../Pages/Announcements";
// import AnnouncementPopup from "../Pages/AnnouncementPopup";
// import Footer from "../components/Footer";
// import axios from "axios";

// import "./myRequest.css";

// function MyRequest() {

//   const [data, setData] = useState([]);

//   useEffect(() => {

//     const fetchData = async () => {

//       try {

//         const token = localStorage.getItem("token");

//         const res = await getMyWaste(token);

//         if (Array.isArray(res)) setData(res);
//         else setData([]);

//       } catch {

//         setData([]);
//       }
//     };

//     fetchData();

//     const interval = setInterval(fetchData, 3000);

//     return () => clearInterval(interval);

//   }, []);

//   // 🎨 STATUS COLORS
//   const getStatusColor = (status) => {

//     switch (status) {

//       case "Pending":
//         return "badge bg-warning";

//       case "Approved":
//         return "badge bg-primary";

//       case "Assigned":
//         return "badge bg-secondary";

//       case "Collected":
//         return "badge bg-info";

//       case "Completed":
//         return "badge bg-success";

//       default:
//         return "badge bg-dark";
//     }
//   };

//   // 📊 PROGRESS %
//   const getProgress = (status) => {

//     switch (status) {

//       case "Pending":
//         return 20;

//       case "Approved":
//         return 40;

//       case "Assigned":
//         return 60;

//       case "Collected":
//         return 80;

//       case "Completed":
//         return 100;

//       default:
//         return 0;
//     }
//   };

//   // 🗑 DELETE
//   const handleDelete = async (id) => {

//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete this request?")) return;

//     try {

//       await axios.delete(
//         `http://localhost:8000/api/waste/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Deleted successfully");

//       window.location.reload();

//     } catch {

//       alert("Delete failed");
//     }
//   };

//   // ✏ EDIT
//   const handleEdit = (item) => {

//     localStorage.setItem(
//       "editData",
//       JSON.stringify(item)
//     );

//     window.location.href = "/create";
//   };

//   // 💳 PAYMENT
//   const handlePayment = async (id) => {

//     const token = localStorage.getItem("token");

//     try {

//       const order = await axios.post(
//         `http://localhost:8000/api/waste/create-order/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const options = {

//         key: import.meta.env.VITE_RAZORPAY_KEY,

//         amount: order.data.amount,

//         currency: "INR",

//         order_id: order.data.id,

//         name: "Waste App",

//         description: "Waste Pickup Payment",

//         handler: async function (response) {

//           await axios.post(
//             "http://localhost:8000/api/waste/verify-payment",
//             {
//               wasteId: id,
//               ...response,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           alert("✅ Payment Successful");

//           window.location.reload();
//         },

//         theme: {
//           color: "#27ae60",
//         },
//       };

//       const rzp = new window.Razorpay(options);

//       rzp.open();

//     } catch (err) {

//       console.log(
//         "PAYMENT ERROR:",
//         err.response?.data || err.message
//       );

//       alert(
//         err.response?.data || "Payment failed"
//       );
//     }
//   };

//   return (

//     <div className="myrequest-container">

//       {/* 📢 ANNOUNCEMENTS */}
//       <Announcements />
//       <AnnouncementPopup />

//       {/* PAGE TITLE */}
//       <div className="request-header">

//         <h2>📦 My Waste Requests</h2>

//         <p>
//           Track all your waste pickup requests,
//           payment updates and collection progress.
//         </p>

//       </div>

//       {/* REQUEST SECTION */}
//       <div className="request-wrapper">

//         {data.length > 0 ? (

//           <>
//             {data.map((w) => (

//               <div
//                 key={w._id}
//                 className="card mb-3 shadow request-card"
//               >

//                 <div className="card-body">

//                   <div className="d-flex justify-content-between">

//                     <div>
//                       <h5>{w.wasteType}</h5>

//                       <p className="text-muted">
//                         ₹ {w.price}
//                       </p>
//                     </div>

//                     <span className={getStatusColor(w.status)}>
//                       {w.status}
//                     </span>

//                   </div>

//                   {/* PROGRESS */}
//                   <div className="progress my-3">

//                     <div
//                       className="progress-bar bg-success"
//                       style={{
//                         width: `${getProgress(w.status)}%`
//                       }}
//                     >
//                       {getProgress(w.status)}%
//                     </div>

//                   </div>

//                   {/* PAYMENT */}
//                   <p>
//                     💳 Payment:
//                     {" "}

//                     {w.paymentStatus === "Paid" ? (

//                       <span className="text-success fw-bold">
//                         Paid
//                       </span>

//                     ) : (

//                       <span className="text-danger">
//                         Not Paid
//                       </span>

//                     )}
//                   </p>

//                   {/* ADMIN PAYMENT */}
//                   {w.paidBy === "ADMIN" ? (

//                     <span className="text-success fw-bold">
//                       💰 Admin will pay you during pickup
//                     </span>

//                   ) : (

//                     <>
//                       {/* USER PAYMENT */}
//                       {w.status === "Approved" &&
//                         w.paymentStatus !== "Paid" && (

//                           <button
//                             className="btn btn-warning btn-sm"
//                             onClick={() => handlePayment(w._id)}
//                           >
//                             💳 Pay Now
//                           </button>

//                         )}
//                     </>
//                   )}

//                   {/* EDIT DELETE */}
//                   {w.status?.toLowerCase() === "pending" && (

//                     <div className="action-buttons">

//                       <button
//                         className="btn btn-primary btn-sm me-2"
//                         onClick={() => handleEdit(w)}
//                       >
//                         ✏ Edit
//                       </button>

//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => handleDelete(w._id)}
//                       >
//                         🗑 Delete
//                       </button>

//                     </div>
//                   )}


//                 </div>

//               </div>

//             ))}
//           </>

//         ) : (

//           <p className="no-request">
//             No requests found
//           </p>

//         )}


//       </div>


//       {/* 🌱 ECO TIPS */}
//       <div className="eco-tips-section">

//         <div className="eco-header">

//           <h2>🌱 Eco-Friendly Tips</h2>

//           <p>
//             Small eco habits can create a huge impact
//             on our environment and future generations.
//           </p>

//         </div>

//         <div className="eco-tips-grid">

//           <div className="eco-tip-card">
//             ♻ Separate wet and dry waste properly
//           </div>

//           <div className="eco-tip-card">
//             🌍 Reduce single-use plastic usage
//           </div>

//           <div className="eco-tip-card">
//             ⚡ Recycle electronic waste safely
//           </div>

//           <div className="eco-tip-card">
//             🍃 Reuse old containers and bags
//           </div>

//           <div className="eco-tip-card">
//             🧴 Clean recyclable items before disposal
//           </div>

//           {/* NEW EXTRA TIP */}
//           <div className="eco-tip-card">
//             💧 Save water by avoiding unnecessary waste disposal
//           </div>

//         </div>
//       </div>


//         {/* FOOTER */}
//         <Footer />

//       </div>
//       );
// }
// export default MyRequest;



// import { useEffect, useState } from "react";
// import { getMyWaste } from "../services/api";
// import Announcements from "../Pages/Announcements";
// import AnnouncementPopup from "../Pages/AnnouncementPopup";
// import Footer from "../components/Footer";
// import axios from "axios";

// import "./myRequest.css";

// function MyRequest() {

//   const [data, setData] = useState([]);

//    // ✅ ACTIVE REQUESTS
//   const activeRequests = data.filter(
//     (w) => w.status !== "Completed"
//   );

//   // ✅ HISTORY REQUESTS
//   const historyRequests = data.filter(
//     (w) => w.status === "Completed"
//   );


//   useEffect(() => {

//     const fetchData = async () => {

//       try {

//         const token = localStorage.getItem("token");

//         const res = await getMyWaste(token);

//         if (Array.isArray(res)) {
//           setData(res);
//         } else {
//           setData([]);
//         }

//       } catch {

//         setData([]);

//       }
//     };

//     fetchData();

//     const interval = setInterval(fetchData, 3000);

//     return () => clearInterval(interval);

//   }, []);

//   // STATUS COLORS
//   const getStatusColor = (status) => {

//     switch (status) {

//       case "Pending":
//         return "badge bg-warning";

//       case "Approved":
//         return "badge bg-primary";

//       case "Assigned":
//         return "badge bg-secondary";

//       case "Collected":
//         return "badge bg-info";

//       case "Completed":
//         return "badge bg-success";

//       default:
//         return "badge bg-dark";
//     }
//   };

//   // PROGRESS
//   const getProgress = (status) => {

//     switch (status) {

//       case "Pending":
//         return 20;

//       case "Approved":
//         return 40;

//       case "Assigned":
//         return 60;

//       case "Collected":
//         return 80;

//       case "Completed":
//         return 100;

//       default:
//         return 0;
//     }
//   };

//   // DELETE
//   const handleDelete = async (id) => {

//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete this request?")) return;

//     try {

//       await axios.delete(
//         `http://localhost:8000/api/waste/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Deleted successfully");

//       window.location.reload();

//     } catch {

//       alert("Delete failed");

//     }
//   };

//   // EDIT
//   const handleEdit = (item) => {

//     localStorage.setItem(
//       "editData",
//       JSON.stringify(item)
//     );

//     window.location.href = "/create";
//   };

//   // PAYMENT
//   const handlePayment = async (id) => {

//     const token = localStorage.getItem("token");

//     try {

//       const order = await axios.post(
//         `http://localhost:8000/api/waste/create-order/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const options = {

//         key: import.meta.env.VITE_RAZORPAY_KEY,

//         amount: order.data.amount,

//         currency: "INR",

//         order_id: order.data.id,

//         name: "Waste App",

//         description: "Waste Pickup Payment",

//         handler: async function (response) {

//           await axios.post(
//             "http://localhost:8000/api/waste/verify-payment",
//             {
//               wasteId: id,
//               ...response,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           alert("✅ Payment Successful");

//           window.location.reload();
//         },

//         theme: {
//           color: "#27ae60",
//         },
//       };

//       const rzp = new window.Razorpay(options);

//       rzp.open();

//     } catch (err) {

//       console.log(
//         "PAYMENT ERROR:",
//         err.response?.data || err.message
//       );

//       alert(
//         err.response?.data || "Payment failed"
//       );
//     }
//   };

//   return (

//     <div className="myrequest-container">

//       {/* ANNOUNCEMENTS */}
//       <Announcements />
//       <AnnouncementPopup />

//       {/* HEADER */}
//       <div className="request-header">

//         <h2>📦 My Waste Requests</h2>

//         <p>
//           Track all your waste pickup requests,
//           payment updates and collection progress.
//         </p>

//       </div>

//       {/* REQUESTS */}
//       <div className="request-wrapper">

//         {data.length > 0 ? (

//           <>
//             {/* {data.map((w) => ( */}
//             {activeRequests.map((w) => (

//               <div
//                 key={w._id}
//                 className="card mb-3 shadow request-card"
//               >

//                 <div className="card-body">

//                   {/* TOP */}
//                   <div className="d-flex justify-content-between">

//                     <div>

//                       <h5>{w.wasteType}</h5>

//                       <p className="text-muted">
//                         ₹ {w.price}
//                       </p>

//                     </div>

//                     <span className={getStatusColor(w.status)}>
//                       {w.status}
//                     </span>

//                   </div>

//                   {/* PROGRESS */}
//                   <div className="progress my-3">

//                     <div
//                       className="progress-bar bg-success"
//                       style={{
//                         width: `${getProgress(w.status)}%`
//                       }}
//                     >
//                       {getProgress(w.status)}%
//                     </div>

//                   </div>

//                   {/* AGENT DETAILS */}
//                   {
//                     w.agent && (

//                       <div className="agent-box">

//                         <h4>
//                           🚛 Assigned Agent
//                         </h4>

//                         <p>
//                           <b>Name:</b>
//                           {" "}
//                           {w.agent.name}
//                         </p>

//                         <p>
//                           <b>Phone:</b>
//                           {" "}
//                           {w.agent.phone}
//                         </p>

//                         <p>
//                           <b>District:</b>
//                           {" "}
//                           {w.agent.district}
//                         </p>

//                         <p>
//                           <b>Pickup Date:</b>
//                           {" "}
//                           {w.pickupDate}
//                         </p>

//                         <p>
//                           <b>Pickup Time:</b>
//                           {" "}
//                           {w.pickupTime}
//                         </p>

//                       </div>

//                     )
//                   }

//                   {/* PAYMENT */}
//                   <p className="mt-3">

//                     💳 Payment:

//                     {" "}

//                     {w.paymentStatus === "Paid" ? (

//                       <span className="text-success fw-bold">
//                         Paid
//                       </span>

//                     ) : (

//                       <span className="text-danger">
//                         Not Paid
//                       </span>

//                     )}

//                   </p>

//                   {/* ADMIN PAYMENT */}
//                   {
//                     w.paidBy === "ADMIN" ? (

//                       <span className="text-success fw-bold">

//                         💰 Admin will pay you during pickup

//                       </span>

//                     ) : (

//                       <>
//                         {
//                           // w.status === "Approved" &&
//                           (w.status === "Approved" || w.status === "Assigned")&&
//                           w.paymentStatus !== "Paid" && (

//                             <button
//                               className="btn btn-warning btn-sm mt-2"
//                               onClick={() => handlePayment(w._id)}
//                             >
//                               💳 Pay Now
//                             </button>

//                           )
//                         }
//                       </>

//                     )
//                   }

//                   {/* EDIT DELETE */}
//                   {
//                     w.status?.toLowerCase() === "pending" && (

//                       <div className="action-buttons mt-3">

//                         <button
//                           className="btn btn-primary btn-sm me-2"
//                           onClick={() => handleEdit(w)}
//                         >
//                           ✏ Edit
//                         </button>

//                         <button
//                           className="btn btn-danger btn-sm"
//                           onClick={() => handleDelete(w._id)}
//                         >
//                           🗑 Delete
//                         </button>

//                       </div>

//                     )
//                   }

//                 </div>

//               </div>

//             ))}
//           </>

//       ))

//     ) : (

//       <p>No Completed Requests</p>

//     )
//   }

// </div>


//         ) : (

//           <p className="no-request">
//             No requests found
//           </p>

//         )}

//       </div>

//       {/* ECO TIPS */}
//       <div className="eco-tips-section">

//         <div className="eco-header">

//           <h2>🌱 Eco-Friendly Tips</h2>

//           <p>
//             Small eco habits can create a huge impact
//             on our environment and future generations.
//           </p>

//         </div>

//         <div className="eco-tips-grid">

//           <div className="eco-tip-card">
//             ♻ Separate wet and dry waste properly
//           </div>

//           <div className="eco-tip-card">
//             🌍 Reduce single-use plastic usage
//           </div>

//           <div className="eco-tip-card">
//             ⚡ Recycle electronic waste safely
//           </div>

//           <div className="eco-tip-card">
//             🍃 Reuse old containers and bags
//           </div>

//           <div className="eco-tip-card">
//             🧴 Clean recyclable items before disposal
//           </div>

//           <div className="eco-tip-card">
//             💧 Save water by avoiding unnecessary waste disposal
//           </div>

//         </div>

//       </div>

//       {/* FOOTER */}
//       <Footer />

//     </div>
//   );
// }

// export default MyRequest;


// 3-method

// import { useEffect, useState } from "react";
// import { getMyWaste } from "../services/api";
// import Announcements from "../Pages/Announcements";
// import AnnouncementPopup from "../Pages/AnnouncementPopup";
// import Footer from "../components/Footer";
// import axios from "axios";

// import "./myRequest.css";

// function MyRequest() {

//   const [data, setData] = useState([]);

//   // ✅ ACTIVE REQUESTS
//   const activeRequests = data.filter(
//     (w) => w.status !== "Completed"
//   );

//   // ✅ HISTORY REQUESTS
//   const historyRequests = data.filter(
//     (w) => w.status === "Completed"
//   );

//   useEffect(() => {

//     const fetchData = async () => {

//       try {

//         const token = localStorage.getItem("token");

//         const res = await getMyWaste(token);

//         if (Array.isArray(res)) {
//           setData(res);
//         } else {
//           setData([]);
//         }

//       } catch {

//         setData([]);

//       }
//     };

//     fetchData();

//     const interval = setInterval(fetchData, 3000);

//     return () => clearInterval(interval);

//   }, []);

//   // ✅ STATUS COLORS
//   const getStatusColor = (status) => {

//     switch (status) {

//       case "Pending":
//         return "badge bg-warning";

//       case "Approved":
//         return "badge bg-primary";

//       case "Assigned":
//         return "badge bg-secondary";

//       case "Collected":
//         return "badge bg-info";

//       case "Completed":
//         return "badge bg-success";

//       default:
//         return "badge bg-dark";
//     }
//   };

//   // ✅ PROGRESS
//   const getProgress = (status) => {

//     switch (status) {

//       case "Pending":
//         return 20;

//       case "Approved":
//         return 40;

//       case "Assigned":
//         return 60;

//       case "Collected":
//         return 80;

//       case "Completed":
//         return 100;

//       default:
//         return 0;
//     }
//   };

//   // ✅ DELETE
//   const handleDelete = async (id) => {

//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete this request?")) return;

//     try {

//       await axios.delete(
//         `http://localhost:8000/api/waste/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Deleted successfully");

//       window.location.reload();

//     } catch {

//       alert("Delete failed");

//     }
//   };

//   // ✅ EDIT
//   const handleEdit = (item) => {

//     localStorage.setItem(
//       "editData",
//       JSON.stringify(item)
//     );

//     window.location.href = "/create";
//   };

//   // ✅ PAYMENT
//   const handlePayment = async (id) => {

//     const token = localStorage.getItem("token");

//     try {

//       const order = await axios.post(
//         `http://localhost:8000/api/waste/create-order/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const options = {

//         key: import.meta.env.VITE_RAZORPAY_KEY,

//         amount: order.data.amount,

//         currency: "INR",

//         order_id: order.data.id,

//         name: "Waste App",

//         description: "Waste Pickup Payment",

//         handler: async function (response) {

//           await axios.post(
//             "http://localhost:8000/api/waste/verify-payment",
//             {
//               wasteId: id,
//               ...response,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           alert("✅ Payment Successful");

//           window.location.reload();
//         },

//         theme: {
//           color: "#27ae60",
//         },
//       };

//       const rzp = new window.Razorpay(options);

//       rzp.open();

//     } catch (err) {

//       console.log(
//         "PAYMENT ERROR:",
//         err.response?.data || err.message
//       );

//       alert(
//         err.response?.data || "Payment failed"
//       );
//     }
//   };

//   return (

//     <div className="myrequest-container">

//       {/* ANNOUNCEMENTS */}
//       <Announcements />
//       <AnnouncementPopup />

//       {/* HEADER */}
//       <div className="request-header">

//         <h2>📦 My Waste Requests</h2>

//         <p>
//           Track all your waste pickup requests,
//           payment updates and collection progress.
//         </p>

//       </div>

//       {/* ================= ACTIVE REQUESTS ================= */}

//       <div className="request-wrapper">

//         {activeRequests.length > 0 ? (

//           <>
//             {activeRequests.map((w) => (

//               <div
//                 key={w._id}
//                 className="card mb-3 shadow request-card"
//               >

//                 <div className="card-body">

//                   {/* TOP */}
//                   <div className="d-flex justify-content-between">

//                     <div>

//                       <h5>{w.wasteType}</h5>

//                       <p className="text-muted">
//                         ₹ {w.price}
//                       </p>

//                     </div>

//                     <span className={getStatusColor(w.status)}>
//                       {w.status}
//                     </span>

//                   </div>

//                   {/* PROGRESS */}
//                   <div className="progress my-3">

//                     <div
//                       className="progress-bar bg-success"
//                       style={{
//                         width: `${getProgress(w.status)}%`
//                       }}
//                     >
//                       {getProgress(w.status)}%
//                     </div>

//                   </div>

//                   {/* AGENT DETAILS */}
//                   {
//                     w.agent && (

//                       <div className="agent-box">

//                         <h4>
//                           🚛 Assigned Agent
//                         </h4>

//                         <p>
//                           <b>Name:</b>
//                           {" "}
//                           {w.agent.name}
//                         </p>

//                         <p>
//                           <b>Phone:</b>
//                           {" "}
//                           {w.agent.phone}
//                         </p>

//                         <p>
//                           <b>District:</b>
//                           {" "}
//                           {w.agent.district}
//                         </p>

//                         <p>
//                           <b>Pickup Date:</b>
//                           {" "}
//                           {w.pickupDate}
//                         </p>

//                         <p>
//                           <b>Pickup Time:</b>
//                           {" "}
//                           {w.pickupTime}
//                         </p>

//                       </div>

//                     )
//                   }

//                   {/* PAYMENT */}
//                   <p className="mt-3">

//                     💳 Payment:

//                     {" "}

//                     {w.paymentStatus === "Paid" ? (

//                       <span className="text-success fw-bold">
//                         Paid
//                       </span>

//                     ) : (

//                       <span className="text-danger">
//                         Not Paid
//                       </span>

//                     )}

//                   </p>

//                   {
//                     w.status === "Collected" &&
//                     w.paidBy === "ADMIN" && (

//                       <div className="payment-success-box">

//                         ✅ Waste Collected Successfully

//                         <br />

//                         💰 Payment Received From Pickup Agent

//                       </div>

//                     )
//                   }
//                   ) : (

//                   <>
//                     {
//                       (w.status === "Approved" ||
//                         w.status === "Assigned") &&

//                       w.paymentStatus !== "Paid" && (

//                         <button
//                           className="btn btn-warning btn-sm mt-2"
//                           onClick={() => handlePayment(w._id)}
//                         >
//                           💳 Pay Now
//                         </button>

//                       )
//                     }
//                   </>

//                   )
//                   }

//                   {/* EDIT DELETE */}
//                   {
//                     w.status?.toLowerCase() === "pending" && (

//                       <div className="action-buttons mt-3">

//                         <button
//                           className="btn btn-primary btn-sm me-2"
//                           onClick={() => handleEdit(w)}
//                         >
//                           ✏ Edit
//                         </button>

//                         <button
//                           className="btn btn-danger btn-sm"
//                           onClick={() => handleDelete(w._id)}
//                         >
//                           🗑 Delete
//                         </button>

//                       </div>

//                     )
//                   }

//                 </div>

//               </div>

//             ))}
//           </>

//         ) : (

//           <p className="no-request">
//             No Active Requests
//           </p>

//         )}

//       </div>

//       {/* ================= HISTORY SECTION ================= */}

//       <div className="history-section">

//         <h2>📜 Request History</h2>

//         {
//           historyRequests.length > 0 ? (

//             historyRequests.map((w) => (

//               <div
//                 key={w._id}
//                 className="card mb-3 shadow request-card"
//               >

//                 <div className="card-body">

//                   <h4>{w.wasteType}</h4>

//                   <p>

//                     Status:
//                     {" "}

//                     <span className="text-success">
//                       {w.status}
//                     </span>

//                   </p>

//                   <p>
//                     Price:
//                     ₹ {w.price}
//                   </p>

//                   <p>
//                     Pickup Date:
//                     {" "}
//                     {w.pickupDate}
//                   </p>

//                   <p>
//                     Pickup Time:
//                     {" "}
//                     {w.pickupTime}
//                   </p>

//                 </div>

//               </div>

//             ))

//           ) : (

//             <p>No Completed Requests</p>

//           )
//         }

//       </div>

//       {/* ================= ECO TIPS ================= */}

//       <div className="eco-tips-section">

//         <div className="eco-header">

//           <h2>🌱 Eco-Friendly Tips</h2>

//           <p>
//             Small eco habits can create a huge impact
//             on our environment and future generations.
//           </p>

//         </div>

//         <div className="eco-tips-grid">

//           <div className="eco-tip-card">
//             ♻ Separate wet and dry waste properly
//           </div>

//           <div className="eco-tip-card">
//             🌍 Reduce single-use plastic usage
//           </div>

//           <div className="eco-tip-card">
//             ⚡ Recycle electronic waste safely
//           </div>

//           <div className="eco-tip-card">
//             🍃 Reuse old containers and bags
//           </div>

//           <div className="eco-tip-card">
//             🧴 Clean recyclable items before disposal
//           </div>

//           <div className="eco-tip-card">
//             💧 Save water by avoiding unnecessary waste disposal
//           </div>

//         </div>

//       </div>

//       {/* FOOTER */}
//       <Footer />

//     </div>
//   );
// }

// export default MyRequest;

import { useEffect, useState } from "react";
import { getMyWaste } from "../services/api";
import Announcements from "../Pages/Announcements";
import AnnouncementPopup from "../Pages/AnnouncementPopup";
import Footer from "../Components/Footer";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./myRequest.css";


function MyRequest() {

  const [data, setData] = useState([]);

  // ✅ ACTIVE REQUESTS
  const activeRequests = data.filter(
    (w) => w.status !== "Completed"
  );

  // ✅ HISTORY REQUESTS
  const historyRequests = data.filter(
    (w) => w.status === "Completed"
  );

  useEffect(() => {

    const fetchData = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await getMyWaste(token);

        if (Array.isArray(res)) {

          setData(res);

        } else {

          setData([]);

        }

      } catch {

        setData([]);

      }

    };

    fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);

  }, []);

  // ✅ STATUS COLORS
  const getStatusColor = (status) => {

    switch (status) {

      case "Pending":
        return "badge bg-warning";

      case "Approved":
        return "badge bg-primary";

      case "Assigned":
        return "badge bg-secondary";

      case "Collected":
        return "badge bg-info";

      case "Completed":
        return "badge bg-success";

      default:
        return "badge bg-dark";

    }

  };

  // ✅ PROGRESS
  const getProgress = (status) => {

    switch (status) {

      case "Pending":
        return 20;

      case "Approved":
        return 40;

      case "Assigned":
        return 60;

      case "Collected":
        return 80;

      case "Completed":
        return 100;

      default:
        return 0;

    }

  };

  // ✅ DELETE
  const handleDelete = async (id) => {

  if (!window.confirm("Delete this request?"))
    return;

  try {

    await API.delete(
      `/waste/${id}`
    );

    toast.success(
      "Deleted Successfully ✅"
    );

    setTimeout(() => {
      window.location.reload();
    }, 1000);

  } catch {

    toast.error(
      "Delete Failed ❌"
    );

  }

};

  // ✅ EDIT
  const handleEdit = (item) => {

    localStorage.setItem(
      "editData",
      JSON.stringify(item)
    );

    window.location.href = "/create";

  };

  // ✅ PAYMENT
  const handlePayment = async (id) => {

  try {

    const order =
      await API.post(
        `/waste/create-order/${id}`
      );

    const options = {

      key:
        import.meta.env.VITE_RAZORPAY_KEY,

      amount:
        order.data.amount,

      currency: "INR",

      order_id:
        order.data.id,

      name: "Waste App",

      description:
        "Waste Pickup Payment",

      handler:
        async function (response) {

          await API.post(
            "/waste/verify-payment",
            {
              wasteId: id,
              ...response,
            }
          );

          toast.success(
            "Payment Successful ✅"
          );

          setTimeout(() => {
            window.location.reload();
          }, 1000);

        },

      theme: {
        color: "#27ae60",
      },

    };

    const rzp =
      new window.Razorpay(
        options
      );

    rzp.open();

  } catch (err) {

    console.log(
      err.response?.data ||
      err.message
    );

    toast.error(
      err.response?.data ||
      "Payment Failed ❌"
    );

  }

};
  return (
 <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
    <div className="myrequest-container">

      {/* ANNOUNCEMENTS */}
      <Announcements />
      <AnnouncementPopup />

      {/* HEADER */}
      <div className="request-header">

        <h2>📦 My Waste Requests</h2>

        <p>
          Track all your waste pickup requests,
          payment updates and collection progress.
        </p>

      </div>

      {/* ================= ACTIVE REQUESTS ================= */}

      <div className="request-wrapper">

        {activeRequests.length > 0 ? (

          <>
            {activeRequests.map((w) => (

              <div
                key={w._id}
                className="card mb-3 shadow request-card"
              >

                <div className="card-body">

                  {/* TOP */}
                  <div className="d-flex justify-content-between">

                    <div>

                      <h5>{w.wasteType}</h5>

                      <p className="text-muted">
                        ₹ {w.price}
                      </p>

                    </div>

                    <span className={getStatusColor(w.status)}>
                      {w.status}
                    </span>

                  </div>

                  {/* PROGRESS */}
                  <div className="progress my-3">

                    <div
                      className="progress-bar bg-success"
                      style={{
                        width: `${getProgress(w.status)}%`
                      }}
                    >
                      {getProgress(w.status)}%
                    </div>

                  </div>

                  {/* AGENT DETAILS */}
                  {
                    w.agent && (

                      <div className="agent-box">

                        <h4>
                          🚛 Assigned Agent
                        </h4>

                        <p>
                          <b>Name:</b>
                          {" "}
                          {w.agent.name}
                        </p>

                        <p>
                          <b>Phone:</b>
                          {" "}
                          {w.agent.phone}
                        </p>

                        <p>
                          <b>District:</b>
                          {" "}
                          {w.agent.district}
                        </p>

                        <p>
                          <b>Pickup Date:</b>
                          {" "}
                          {w.pickupDate}
                        </p>

                        <p>
                          <b>Pickup Time:</b>
                          {" "}
                          {w.pickupTime}
                        </p>

                      </div>

                    )
                  }

                  {/* PAYMENT STATUS */}
                  <p className="mt-3">

                    💳 Payment:

                    {" "}

                    {w.paymentStatus === "Paid" ? (

                      <span className="text-success fw-bold">
                        Paid
                      </span>

                    ) : (

                      <span className="text-danger">
                        Not Paid
                      </span>

                    )}

                  </p>

                  {/* ================= ADMIN PAYMENT FLOW ================= */}

                  {
                    w.paidBy === "ADMIN" && (

                      <>
                        {/* BEFORE COLLECTION */}

                        {
                          w.status !== "Collected" &&
                          w.status !== "Completed" && (

                            <div className="payment-success-box">

                              💰 Admin will pay you during pickup

                            </div>

                          )
                        }

                        {/* AFTER COLLECTION */}

                        {
                          w.status === "Collected" && (

                            <div className="payment-success-box">

                              ✅ Waste Collected Successfully

                              <br />

                              💰 Payment Received From Pickup Agent

                            </div>

                          )
                        }
                      </>

                    )
                  }

                  {/* ================= USER ONLINE PAYMENT ================= */}

                  {
                    w.paidBy !== "ADMIN" && (

                      <>
                        {
                          (w.status === "Approved" ||
                            w.status === "Assigned") &&

                          w.paymentStatus !== "Paid" && (

                            <button
                              className="btn btn-warning btn-sm mt-2"
                              onClick={() => handlePayment(w._id)}
                            >
                              💳 Pay Now
                            </button>

                          )
                        }
                      </>

                    )
                  }

                  {/* EDIT DELETE */}
                  {
                    w.status?.toLowerCase() === "pending" && (

                      <div className="action-buttons mt-3">

                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => handleEdit(w)}
                        >
                          ✏ Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(w._id)}
                        >
                          🗑 Delete
                        </button>

                      </div>

                    )
                  }

                </div>

              </div>

            ))}
          </>

        ) : (

          <p className="no-request">
            No Active Requests
          </p>

        )}

      </div>

      {/* ================= HISTORY SECTION ================= */}

      <div className="history-section">

        <h2>📜 Request History</h2>

        {
          historyRequests.length > 0 ? (

            historyRequests.map((w) => (

              <div
                key={w._id}
                className="card mb-3 shadow request-card"
              >

                <div className="card-body">

                  <h4>{w.wasteType}</h4>

                  <p>

                    Status:
                    {" "}

                    <span className="text-success">
                      {w.status}
                    </span>

                  </p>

                  <p>
                    Price:
                    ₹ {w.price}
                  </p>

                  <p>
                    Pickup Date:
                    {" "}
                    {w.pickupDate}
                  </p>

                  <p>
                    Pickup Time:
                    {" "}
                    {w.pickupTime}
                  </p>

                </div>

              </div>

            ))

          ) : (

            <p>No Completed Requests</p>

          )
        }

      </div>

      {/* ================= ECO TIPS ================= */}

      <div className="eco-tips-section">

        <div className="eco-header">

          <h2>🌱 Eco-Friendly Tips</h2>

          <p>
            Small eco habits can create a huge impact
            on our environment and future generations.
          </p>

        </div>

        <div className="eco-tips-grid">

          <div className="eco-tip-card">
            ♻ Separate wet and dry waste properly
          </div>

          <div className="eco-tip-card">
            🌍 Reduce single-use plastic usage
          </div>

          <div className="eco-tip-card">
            ⚡ Recycle electronic waste safely
          </div>

          <div className="eco-tip-card">
            🍃 Reuse old containers and bags
          </div>

          <div className="eco-tip-card">
            🧴 Clean recyclable items before disposal
          </div>

          <div className="eco-tip-card">
            💧 Save water by avoiding unnecessary waste disposal
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
    </>

  );

}

export default MyRequest;
