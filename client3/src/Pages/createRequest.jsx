

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import "./createRequest.css";

// function CreateRequest() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     district: "",
//     place: "",
//     landmark: "",
//     wasteType: "",
//     weight: "",
//     address: "",
//     image: null,
//   });

//   const [price, setPrice] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [createdWasteId, setCreatedWasteId] = useState(null);
//   const [errors, setErrors] = useState({}); // ✅ NEW
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   // 🔥 AUTO PRICE
//   // useEffect(() => {
//   //   const fetchPrice = async () => {
//   //     if (!form.wasteType) return;

//   //     try {
//   //       const res = await axios.get(
//   //         `http://localhost:8000/api/waste/price/${form.wasteType}`,
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //         }
//   //       );


//   //        const rate = res.data.pricePerKg;
//   //       //  setPrice(rate * (form.weight || 0));
//   //         setPrice(rate * Number(form.weight || 0));

//   //     } catch (err) {
//   //       console.log("Price error:", err.response?.data || err.message);
//   //       setPrice(0);
//   //     }
//   //   };

//   //   fetchPrice();
//   // }, [form.wasteType, form.weight]);
//   // 🔥 AUTO PRICE
//   useEffect(() => {

//     const fetchPrice = async () => {

//       // if waste type empty
//       if (!form.wasteType) {
//         setPrice(0);
//         return;
//       }

//       try {

//         const res = await axios.get(
//           `http://localhost:8000/api/waste/price/${form.wasteType}`
//         );

//         const rate = Number(res.data.pricePerKg);

//         const weight = Number(form.weight);

//         // proper calculation
//         if (!weight || weight <= 0) {
//           setPrice(0);
//         } else {
//           setPrice(rate * weight);
//         }

//       } catch (err) {

//         console.log("Price error:", err.response?.data || err.message);

//         setPrice(0);
//       }
//     };

//     fetchPrice();

//   }, [form.wasteType, form.weight]);


//   useEffect(() => {
//     const data = localStorage.getItem("editData");

//     if (data) {
//       const parsed = JSON.parse(data);

//       setForm({
//         name: parsed.name || "",
//         phone: parsed.phone || "",
//         district: parsed.district || "",
//         place: parsed.place || "",
//         landmark: parsed.landmark || "",
//         wasteType: parsed.wasteType || "",
//         weight: parsed.weight || "",
//         address: parsed.address || "",
//         image: null, // ❗ keep null
//       });
//       localStorage.removeItem("editData");
//     }

//   }, []);



//   // 🔥 VALIDATION FUNCTION
//   const validateForm = () => {
//     let newErrors = {};

//     if (!form.name.trim()) newErrors.name = "Name is required";

//     if (!form.phone) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       newErrors.phone = "Enter valid 10-digit phone number";
//     }

//     if (!form.district) newErrors.district = "Select district";
//     if (!form.place.trim()) newErrors.place = "Place is required";
//     if (!form.landmark.trim()) newErrors.landmark = "Landmark is required";
//     if (!form.wasteType) newErrors.wasteType = "Select waste type";

//     if (!form.weight) {
//       newErrors.weight = "Weight is required";
//     } else if (form.weight <= 0) {
//       newErrors.weight = "Weight must be greater than 0";
//     }

//     if (!form.address.trim()) newErrors.address = "Address is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // 🔥 HANDLE INPUT
//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setForm({ ...form, image: e.target.files[0] });
//     } else {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     }

//     // 🔥 CLEAR ERROR WHILE TYPING
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   // 🔥 CREATE REQUEST
//   //  const handleSubmit = async (e) => {

//   // e.preventDefault();

//   // // ✅ LOGIN CHECK
//   // if (!token) {

//   //   const confirmLogin = window.confirm(
//   //     "Please Login or Register First To Submit Waste Request"
//   //   );

//   //   if (confirmLogin) {
//   //     navigate("/login");
//   //   }

//   //   return;
//   // }

//   // // ✅ VALIDATION
//   // if (!validateForm()) return;

//   // setLoading(true);
//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     //  LOGIN CHECK
//     if (!token) {

//       alert("Please Login First To Submit Request");

//       navigate("/login");

//       return;
//     }

//     //  VALIDATION
//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       const formData = new FormData();

//       formData.append("wasteType", form.wasteType);
//       formData.append("weight", form.weight);
//       formData.append("address", form.address);
//       formData.append("name", form.name);
//       formData.append("phone", form.phone);
//       formData.append("district", form.district);
//       formData.append("place", form.place);
//       formData.append("landmark", form.landmark);

//       if (form.image) {
//         formData.append("image", form.image);
//       }

//       // const res = await axios.post(
//       //   "http://localhost:5000/api/waste",
//       //   formData,
//       //   {
//       //     headers: {
//       //       Authorization: `Bearer ${token}`,
//       //       "Content-Type": "multipart/form-data",
//       //     },
//       //   }
//       // );

//       // setCreatedWasteId(res.data._id);
//       // alert("✅ Request Created!\n⏳ Wait for admin approval before payment.");
//       const editData = localStorage.getItem("editData");


//       if (editData) {
//         const parsed = JSON.parse(editData);

//         await axios.put(
//           `http://localhost:8000/api/waste/${parsed._id}`,
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );



//         localStorage.removeItem("editData");
//         navigate("/myrequest");
//         alert("✅ Request Updated");

//       } else {
//         const res = await axios.post(
//           "http://localhost:8000/api/waste",
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         setCreatedWasteId(res.data._id);
//         alert("✅ Request Created!\n⏳ Wait for admin approval before payment.");
//       }

//     } catch (err) {
//       console.log("CREATE ERROR:", err.response?.data || err.message);
//       alert(err.response?.data || "❌ Error creating request");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="create-page">
//       <div className="content-wrapper">
//         <div className="hero">
//           <h1>♻ Create Waste Request</h1>
//           <p>Submit your waste & contribute to a cleaner environment 🌍</p>
//           {
//             !token && (
//               <div className="login-warning">
//                 ⚠ Please Login or Register Before Submitting Request
//               </div>
//             )
//           }
//         </div>

//         <div className="request-container">
//           <div className="form-section">
//             <form onSubmit={handleSubmit}>

//               <div className="mb-3">
//                 <label>Full Name</label>
//                 <input name="name" value={form.name} onChange={handleChange} />
//                 {errors.name && <small className="text-danger">{errors.name}</small>}

//                 <label>Phone Number</label>
//                 <input name="phone" value={form.phone} onChange={handleChange} />
//                 {errors.phone && <small className="text-danger">{errors.phone}</small>}

//                 <label>District</label>
//                 <select name="district" value={form.district} onChange={handleChange}>
//                   <option value="">Select District</option>
//                   <option>Calicut</option>
//                   <option>Malappuram</option>
//                   <option>Wayand</option>
//                   <option>TVM</option>
//                   <option>Kollam</option>
//                   <option>Alappuzha</option>
//                   <option>Kottayam</option>
//                   <option>Idukki</option>
//                   <option>Thrissur</option>
//                   <option>palakkad</option>
//                   <option>Kannur</option>
//                 </select>
//                 {errors.district && <small className="text-danger">{errors.district}</small>}

//                 <label>Place</label>
//                 <input name="place" value={form.place} onChange={handleChange} />
//                 {errors.place && <small className="text-danger">{errors.place}</small>}

//                 <label>Landmark</label>
//                 <input name="landmark" value={form.landmark} onChange={handleChange} />
//                 {errors.landmark && <small className="text-danger">{errors.landmark}</small>}
//               </div>

//               <div className="mb-3">
//                 <label>Waste Type</label>
//                 <select name="wasteType" value={form.wasteType} onChange={handleChange}>
//                   <option value="">Select Waste Type</option>
//                   <option value="Plastic">Plastic</option>
//                   <option value="E-Waste">E-Waste</option>
//                   <option value="Organic">Organic</option>
//                   <option value="Recyclable">Recyclable</option>
//                   <option value="Glass">Glass</option>
//                   <option value="Metal">Metal</option>
//                   <option value="Paper">Paper</option>
//                   <option value="Rubber">Rubber</option>
//                   <option value="Textile">Textile</option>
//                   <option value="Wood">Wood</option>
//                   <option value="Battery Waste">Battery Waste</option>
//                   <option value="Aluminium">Aluminium</option>
//                   <option value="Hazardous Waste">Hazardous Waste</option>
//                   <option value="Food Waste">Food Waste</option>

//                 </select>
//                 {errors.wasteType && <small className="text-danger">{errors.wasteType}</small>}
//               </div>

//               <div className="mb-3">
//                 <label>Weight (kg)</label>
//                 {/* <input type="number" name="weight" value={form.weight} onChange={handleChange} /> */}
//                 <input
//                   type="number" name="weight" min="1" value={form.weight} onChange={handleChange} />

//                 {errors.weight && <small className="text-danger">{errors.weight}</small>}
//               </div>

//               <div className="mb-3">
//                 <label>Pickup Address</label>
//                 <textarea name="address" value={form.address} onChange={handleChange} />
//                 {errors.address && <small className="text-danger">{errors.address}</small>}
//               </div>

//               <div className="mb-3">
//                 <label>Upload Image</label>
//                 <input type="file" name="image" onChange={handleChange} />
//               </div>


//               <button className="btn btn-success w-100 mt-3" disabled={loading}>
//                 {loading ? "Processing..." : "🚀 Submit Request"}
//               </button>
//             </form>
//           </div>

//           <div className="summary-section">
//             <h4>💰 Price Summary</h4>
//             <p><b>Waste Type:</b> {form.wasteType || "-"}</p>
//             <p><b>Weight:</b> {form.weight || 0} kg</p>
//             <hr />
//             <h3 className="text-success">Total: ₹ {price}</h3>
//             <p className="text-muted">Auto-calculated based on waste type</p>
//             <div className="mt-3 p-3 bg-light">
//               🌍 Every request helps reduce pollution
//             </div>
//           </div>
//          {/* 🌍 AWARENESS SECTION */}

// <div className="awareness-section">

//   <div className="awareness-header">
//     <h2>🌱 Why Waste Management Matters?</h2>
//     <p>
//       Every waste request you submit helps create a cleaner,
//       greener and healthier future for everyone.
//     </p>
//   </div>

//   <div className="awareness-cards">

//     <div className="awareness-card">
//       <div className="icon">♻</div>
//       <h3>Recycling Saves Nature</h3>
//       <p>
//         Recycling plastic, paper and metal reduces pollution
//         and protects our environment from harmful waste.
//       </p>
//     </div>

//     <div className="awareness-card">
//       <div className="icon">🌍</div>
//       <h3>Cleaner Environment</h3>
//       <p>
//         Proper waste collection helps keep streets, rivers
//         and public places clean and safe for everyone.
//       </p>
//     </div>

//     <div className="awareness-card">
//       <div className="icon">⚡</div>
//       <h3>Energy Conservation</h3>
//       <p>
//         Reusing recyclable materials saves energy and reduces
//         the need for new raw materials.
//       </p>
//     </div>

//   </div>

//   <div className="impact-banner">
//     <div>
//       <h2>✨ Small Actions Create Big Impact</h2>
//       <p>
//         Your single waste request can contribute to a sustainable
//         future and inspire others to protect nature.
//       </p>
//     </div>

//     <button
//       className="learn-btn"
//       onClick={() => navigate("/about")}
//     >
//       Learn More →
//     </button>
//   </div>

// </div>

          

//           </div>
//         </div>
//       </div>
    
//   );
// }


// export default CreateRequest;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";

// import "./createRequest.css";

// function CreateRequest() {

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     district: "",
//     place: "",
//     landmark: "",
//     wasteType: "",
//     weight: "",
//     address: "",
//     image: null,
//   });

//   const [price, setPrice] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [createdWasteId, setCreatedWasteId] = useState(null);
//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   // ✅ AUTO PRICE CALCULATION
//    // ✅ EDIT DATA
//   // useEffect(() => {

//   //   const data = localStorage.getItem("editData");

//   //   if (data) {

//   //     const parsed = JSON.parse(data);

//   //     setForm({const fetchPrice = async () => {

//   //     if (!form.wasteType) {
//   //       setPrice(0);
//   //       return;
//   //     }
//   // useEffect(() => {

//   //   ;
//   //       } else {
//   //         setPrice(rate * weight);
//   //       }

//   //     } catch (err) {

//   //       console.log(
//   //         "Price error:",
//   //         err.response?.data || err.message
//   //       );

//   //       setPrice(0);
//   //     }
//   //   };

//   //   fetchPrice();

//   // }, [form.wasteType, form.weight]);

 

//       try {

//         const res = await axios.get(
//           `http://localhost:8000/api/waste/price/${form.wasteType}`
//         );

//         const rate = Number(res.data.pricePerKg);

//         const weight = Number(form.weight);

//         if (!weight || weight <= 0) {
//           setPrice(0)
//         name: parsed.name || "",
//         phone: parsed.phone || "",
//         district: parsed.district || "",
//         place: parsed.place || "",
//         landmark: parsed.landmark || "",
//         wasteType: parsed.wasteType || "",
//         weight: parsed.weight || "",
//         address: parsed.address || "",
//         image: null,
//       });

//       localStorage.removeItem("editData");
//     }

//   }, []);

//   // ✅ VALIDATION
//   const validateForm = () => {

//     let newErrors = {};

//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!form.phone) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       newErrors.phone = "Enter valid 10-digit phone number";
//     }

//     if (!form.district) {
//       newErrors.district = "Select district";
//     }

//     if (!form.place.trim()) {
//       newErrors.place = "Place is required";
//     }

//     if (!form.landmark.trim()) {
//       newErrors.landmark = "Landmark is required";
//     }

//     if (!form.wasteType) {
//       newErrors.wasteType = "Select waste type";
//     }

//     if (!form.weight) {
//       newErrors.weight = "Weight is required";
//     } else if (form.weight <= 0) {
//       newErrors.weight = "Weight must be greater than 0";
//     }

//     if (!form.address.trim()) {
//       newErrors.address = "Address is required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   // ✅ HANDLE INPUT
//   const handleChange = (e) => {

//     if (e.target.name === "image") {

//       setForm({
//         ...form,
//         image: e.target.files[0],
//       });

//     } else {

//       setForm({
//         ...form,
//         [e.target.name]: e.target.value,
//       });
//     }

//     setErrors({
//       ...errors,
//       [e.target.name]: "",
//     });
//   };

//   // ✅ SUBMIT
//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     if (!token) {

//       alert("Please Login First To Submit Request");

//       navigate("/login");

//       return;
//     }

//     if (!validateForm()) return;

//     setLoading(true);

//     try {

//       const formData = new FormData();

//       formData.append("wasteType", form.wasteType);
//       formData.append("weight", form.weight);
//       formData.append("address", form.address);
//       formData.append("name", form.name);
//       formData.append("phone", form.phone);
//       formData.append("district", form.district);
//       formData.append("place", form.place);
//       formData.append("landmark", form.landmark);

//       if (form.image) {
//         formData.append("image", form.image);
//       }

//       const editData = localStorage.getItem("editData");

//       // ✅ UPDATE
//       if (editData) {

//         const parsed = JSON.parse(editData);

//         await axios.put(
//           `http://localhost:8000/api/waste/${parsed._id}`,
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         localStorage.removeItem("editData");

//         alert("✅ Request Updated");

//         navigate("/myrequest");

//       } else {

//         // ✅ CREATE
//         const res = await axios.post(
//           "http://localhost:8000/api/waste",
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         setCreatedWasteId(res.data._id);

//         alert(
//           "✅ Request Created!\n⏳ Wait for admin approval before payment."
//         );
//       }

//     } catch (err) {

//       console.log(
//         "CREATE ERROR:",
//         err.response?.data || err.message
//       );

//       alert(
//         err.response?.data || "❌ Error creating request"
//       );

//     } finally {

//       setLoading(false);
//     }
//   };

//   return (

//     <div className="create-page">

//       <div className="content-wrapper">

//         {/* HERO */}
//         <div className="hero">

//           <h1>♻ Create Waste Request</h1>

//           <p>
//             Submit your waste & contribute to a cleaner environment 🌍
//           </p>

//           {
//             !token && (
//               <div className="login-warning">
//                 ⚠ Please Login or Register Before Submitting Request
//               </div>
//             )
//           }

//         </div>

//         {/* FORM + SUMMARY */}
//         <div className="request-container">

//           {/* FORM SECTION */}
//           <div className="form-section">

//             <form onSubmit={handleSubmit}>

//               <div className="mb-3">

//                 <label>Full Name</label>

//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                 />

//                 {errors.name && (
//                   <small className="text-danger">
//                     {errors.name}
//                   </small>
//                 )}

//                 <label>Phone Number</label>

//                 <input
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                 />

//                 {errors.phone && (
//                   <small className="text-danger">
//                     {errors.phone}
//                   </small>
//                 )}

//                 <label>District</label>

//                 <select
//                   name="district"
//                   value={form.district}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select District</option>
//                   <option>Calicut</option>
//                   <option>Malappuram</option>
//                   <option>Wayand</option>
//                   <option>TVM</option>
//                   <option>Kollam</option>
//                   <option>Alappuzha</option>
//                   <option>Kottayam</option>
//                   <option>Idukki</option>
//                   <option>Thrissur</option>
//                   <option>Palakkad</option>
//                   <option>Kannur</option>
//                 </select>

//                 {errors.district && (
//                   <small className="text-danger">
//                     {errors.district}
//                   </small>
//                 )}

//                 <label>Place</label>

//                 <input
//                   name="place"
//                   value={form.place}
//                   onChange={handleChange}
//                 />

//                 {errors.place && (
//                   <small className="text-danger">
//                     {errors.place}
//                   </small>
//                 )}

//                 <label>Landmark</label>

//                 <input
//                   name="landmark"
//                   value={form.landmark}
//                   onChange={handleChange}
//                 />

//                 {errors.landmark && (
//                   <small className="text-danger">
//                     {errors.landmark}
//                   </small>
//                 )}

//               </div>

//               {/* WASTE TYPE */}
//               <div className="mb-3">

//                 <label>Waste Type</label>

//                 <select
//                   name="wasteType"
//                   value={form.wasteType}
//                   onChange={handleChange}
//                 >

//                   <option value="">Select Waste Type</option>
//                   <option value="Plastic">Plastic</option>
//                   <option value="E-Waste">E-Waste</option>
//                   <option value="Organic">Organic</option>
//                   <option value="Recyclable">Recyclable</option>
//                   <option value="Glass">Glass</option>
//                   <option value="Metal">Metal</option>
//                   <option value="Paper">Paper</option>
//                   <option value="Rubber">Rubber</option>
//                   <option value="Textile">Textile</option>
//                   <option value="Wood">Wood</option>
//                   <option value="Battery Waste">Battery Waste</option>
//                   <option value="Aluminium">Aluminium</option>
//                   <option value="Hazardous Waste">Hazardous Waste</option>
//                   <option value="Food Waste">Food Waste</option>

//                 </select>

//                 {errors.wasteType && (
//                   <small className="text-danger">
//                     {errors.wasteType}
//                   </small>
//                 )}

//               </div>

//               {/* WEIGHT */}
//               <div className="mb-3">

//                 <label>Weight (kg)</label>

//                 <input
//                   type="number"
//                   name="weight"
//                   min="1"
//                   value={form.weight}
//                   onChange={handleChange}
//                 />

//                 {errors.weight && (
//                   <small className="text-danger">
//                     {errors.weight}
//                   </small>
//                 )}

//               </div>

//               {/* ADDRESS */}
//               <div className="mb-3">

//                 <label>Pickup Address</label>

//                 <textarea
//                   name="address"
//                   value={form.address}
//                   onChange={handleChange}
//                 />

//                 {errors.address && (
//                   <small className="text-danger">
//                     {errors.address}
//                   </small>
//                 )}

//               </div>

//               {/* IMAGE */}
//               <div className="mb-3">

//                 <label>Upload Image</label>

//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleChange}
//                 />

//               </div>

//               {/* BUTTON */}
//               <button
//                 className="btn btn-success w-100 mt-3"
//                 disabled={loading}
//               >
//                 {
//                   loading
//                     ? "Processing..."
//                     : "🚀 Submit Request"
//                 }
//               </button>

//             </form>

//           </div>

//           {/* SUMMARY SECTION */}
//           <div className="summary-section">

//             <h4>💰 Price Summary</h4>

//             <p>
//               <b>Waste Type:</b>
//               {" "}
//               {form.wasteType || "-"}
//             </p>

//             <p>
//               <b>Weight:</b>
//               {" "}
//               {form.weight || 0} kg
//             </p>

//             <hr />

//             <h3 className="text-success">
//               Total: ₹ {price}
//             </h3>

//             <p className="text-muted">
//               Auto-calculated based on waste type
//             </p>

//             <div className="mt-3 p-3 bg-light">
//               🌍 Every request helps reduce pollution
//             </div>

//           </div>

//         </div>

//         {/* 🌍 AWARENESS SECTION */}
//         <div className="awareness-section">

//           <div className="awareness-header">

//             <h2>🌱 Why Waste Management Matters?</h2>

//             <p>
//               Every waste request you submit helps create a cleaner,
//               greener and healthier future for everyone.
//             </p>

//           </div>

//           <div className="awareness-cards">

//             <div className="awareness-card">

//               <div className="icon">♻</div>

//               <h3>Recycling Saves Nature</h3>

//               <p>
//                 Recycling plastic, paper and metal reduces pollution
//                 and protects our environment from harmful waste.
//               </p>

//             </div>

//             <div className="awareness-card">

//               <div className="icon">🌍</div>

//               <h3>Cleaner Environment</h3>

//               <p>
//                 Proper waste collection helps keep streets,
//                 rivers and public places clean and safe.
//               </p>

//             </div>

//             <div className="awareness-card">

//               <div className="icon">⚡</div>

//               <h3>Energy Conservation</h3>

//               <p>
//                 Reusing recyclable materials saves energy
//                 and reduces environmental damage.
//               </p>

//             </div>

//           </div>

//           <div className="impact-banner">

//             <div>

//               <h2>✨ Small Actions Create Big Impact</h2>

//               <p>
//                 Your single waste request contributes to
//                 a cleaner and greener future.
//               </p>

//             </div>

//             <button
//               className="learn-btn"
//               onClick={() => navigate("/about")}
//             >
//               Learn More →
//             </button>

//           </div>

//         </div>

//       </div>
//       {/* FOOTER */}
//       <Footer />


//     </div>
//   );
// }

// export default CreateRequest;

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import "./createRequest.css";

function CreateRequest() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "",
    place: "",
    landmark: "",
    wasteType: "",
    weight: "",
    address: "",
    image: null,
  });

  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [createdWasteId, setCreatedWasteId] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // ✅ AUTO PRICE CALCULATION
  useEffect(() => {

    const fetchPrice = async () => {

      if (!form.wasteType) {
        setPrice(0);
        return;
      }

      // try {

        // const res = await axios.get(
          // `http://localhost:8000/api/waste/price/${form.wasteType}`
        // );

        // const rate = Number(res.data.pricePerKg);

        // const weight = Number(form.weight);

        // if (!weight || weight <= 0) {
          // setPrice(0);
        // } else {
          // setPrice(rate * weight);
        // }

      // } catch (err) {

        // console.log(
          // "Price error:",
          // err.response?.data || err.message
        // );

        // setPrice(0);

      // }
      try {

  const res = await axios.get(
    `http://localhost:8000/api/waste/price/${form.wasteType}`
  );

  const rate = Number(res.data.pricePerKg);

  const weight = Number(form.weight);

  if (!weight || weight <= 0) {

    setPrice(0);

  } else {

    const total = rate * weight;

    setPrice(total);
  }

} catch (err) {

  console.log(
    "Price error:",
    err.response?.data || err.message
  );

  setPrice(0);
}
    };

    fetchPrice();

  }, [form.wasteType, form.weight]);

  // ✅ EDIT DATA
  useEffect(() => {

    const data = localStorage.getItem("editData");

    if (data) {

      const parsed = JSON.parse(data);

      setForm({
        name: parsed.name || "",
        phone: parsed.phone || "",
        district: parsed.district || "",
        place: parsed.place || "",
        landmark: parsed.landmark || "",
        wasteType: parsed.wasteType || "",
        weight: parsed.weight || "",
        address: parsed.address || "",
        image: null,
      });

      localStorage.removeItem("editData");
    }

  }, []);

  // ✅ VALIDATION
  const validateForm = () => {

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }

    if (!form.district) {
      newErrors.district = "Select district";
    }

    if (!form.place.trim()) {
      newErrors.place = "Place is required";
    }

    if (!form.landmark.trim()) {
      newErrors.landmark = "Landmark is required";
    }

    if (!form.wasteType) {
      newErrors.wasteType = "Select waste type";
    }

    if (!form.weight) {
      newErrors.weight = "Weight is required";
    } else if (form.weight <= 0) {
      newErrors.weight = "Weight must be greater than 0";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ HANDLE INPUT
  const handleChange = (e) => {

    if (e.target.name === "image") {

      setForm({
        ...form,
        image: e.target.files[0],
      });

    } else {

      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!token) {

      alert("Please Login First To Submit Request");

      navigate("/login");

      return;
    }

    if (!validateForm()) return;

    setLoading(true);

    try {

      const formData = new FormData();

      formData.append("wasteType", form.wasteType);
      formData.append("weight", form.weight);
      formData.append("address", form.address);
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("district", form.district);
      formData.append("place", form.place);
      formData.append("landmark", form.landmark);

      if (form.image) {
        formData.append("image", form.image);
      }

      const editData = localStorage.getItem("editData");

      // ✅ UPDATE
      if (editData) {

        const parsed = JSON.parse(editData);

        await axios.put(
          `http://localhost:8000/api/waste/${parsed._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        localStorage.removeItem("editData");

        alert("✅ Request Updated");

        navigate("/myrequest");

      } else {

        // ✅ CREATE
        const res = await axios.post(
          "http://localhost:8000/api/waste",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setCreatedWasteId(res.data._id);

        alert(
          "✅ Request Created!\n⏳ Wait for admin approval before payment."
        );
      }

    } catch (err) {

      console.log(
        "CREATE ERROR:",
        err.response?.data || err.message
      );

      alert(
        err.response?.data || "❌ Error creating request"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="create-page">

      <div className="content-wrapper">

        {/* HERO */}
        <div className="hero">

          <h1>♻ Create Waste Request</h1>

          <p>
            Submit your waste & contribute to a cleaner environment 🌍
          </p>

          {
            !token && (
              <div className="login-warning">
                ⚠ Please Login or Register Before Submitting Request
              </div>
            )
          }

        </div>

        {/* FORM + SUMMARY */}
        <div className="request-container">

          {/* FORM SECTION */}
          <div className="form-section">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">

                <label>Full Name</label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <small className="text-danger">
                    {errors.name}
                  </small>
                )}

                <label>Phone Number</label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />

                {errors.phone && (
                  <small className="text-danger">
                    {errors.phone}
                  </small>
                )}

                <label>District</label>

                <select
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                >
                  <option value="">Select District</option>
                  <option>Calicut</option>
                  <option>Malappuram</option>
                  <option>Wayand</option>
                  <option>TVM</option>
                  <option>Kollam</option>
                  <option>Alappuzha</option>
                  <option>Kottayam</option>
                  <option>Idukki</option>
                  <option>Thrissur</option>
                  <option>Palakkad</option>
                  <option>Kannur</option>
                </select>

                {errors.district && (
                  <small className="text-danger">
                    {errors.district}
                  </small>
                )}

                <label>Place</label>

                <input
                  name="place"
                  value={form.place}
                  onChange={handleChange}
                />

                {errors.place && (
                  <small className="text-danger">
                    {errors.place}
                  </small>
                )}

                <label>Landmark</label>

                <input
                  name="landmark"
                  value={form.landmark}
                  onChange={handleChange}
                />

                {errors.landmark && (
                  <small className="text-danger">
                    {errors.landmark}
                  </small>
                )}

              </div>

              {/* WASTE TYPE */}
              <div className="mb-3">

                <label>Waste Type</label>

                <select
                  name="wasteType"
                  value={form.wasteType}
                  onChange={handleChange}
                >

                  <option value="">Select Waste Type</option>
                  <option value="Plastic">Plastic</option>
                  <option value="E-Waste">E-Waste</option>
                  <option value="Organic">Organic</option>
                  <option value="Recyclable">Recyclable</option>
                  <option value="Glass">Glass</option>
                  <option value="Metal">Metal</option>
                  <option value="Paper">Paper</option>
                  <option value="Rubber">Rubber</option>
                  <option value="Textile">Textile</option>
                  <option value="Wood">Wood</option>
                  <option value="Battery Waste">Battery Waste</option>
                  <option value="Aluminium">Aluminium</option>
                  <option value="Hazardous Waste">Hazardous Waste</option>
                  <option value="Food Waste">Food Waste</option>

                </select>

                {errors.wasteType && (
                  <small className="text-danger">
                    {errors.wasteType}
                  </small>
                )}

              </div>

              {/* WEIGHT */}
              <div className="mb-3">

                <label>Weight (kg)</label>

                <input
                  type="number"
                  name="weight"
                  min="1"
                  value={form.weight}
                  onChange={handleChange}
                />

                {errors.weight && (
                  <small className="text-danger">
                    {errors.weight}
                  </small>
                )}

              </div>

              {/* ADDRESS */}
              <div className="mb-3">

                <label>Pickup Address</label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />

                {errors.address && (
                  <small className="text-danger">
                    {errors.address}
                  </small>
                )}

              </div>

              {/* IMAGE */}
              <div className="mb-3">

                <label>Upload Image</label>

                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                />

              </div>

              {/* BUTTON */}
              <button
                className="btn btn-success w-100 mt-3"
                disabled={loading}
              >
                {
                  loading
                    ? "Processing..."
                    : "🚀 Submit Request"
                }
              </button>

            </form>

          </div>

          {/* SUMMARY SECTION */}
          <div className="summary-section">

            <h4>💰 Price Summary</h4>

            <p>
              <b>Waste Type:</b>
              {" "}
              {form.wasteType || "-"}
            </p>

            <p>
              <b>Weight:</b>
              {" "}
              {form.weight || 0} kg
            </p>

            <hr />

            <h3 className="text-success">
              Total: ₹ {price}
            </h3>

            <p className="text-muted">
              Auto-calculated based on waste type
            </p>

            <div className="mt-3 p-3 bg-light">
              🌍 Every request helps reduce pollution
            </div>

          </div>

        </div>

        {/* 🌍 AWARENESS SECTION */}
        <div className="awareness-section">

          <div className="awareness-header">

            <h2>🌱 Why Waste Management Matters?</h2>

            <p>
              Every waste request you submit helps create a cleaner,
              greener and healthier future for everyone.
            </p>

          </div>

          <div className="awareness-cards">

            <div className="awareness-card">

              <div className="icon">♻</div>

              <h3>Recycling Saves Nature</h3>

              <p>
                Recycling plastic, paper and metal reduces pollution
                and protects our environment from harmful waste.
              </p>

            </div>

            <div className="awareness-card">

              <div className="icon">🌍</div>

              <h3>Cleaner Environment</h3>

              <p>
                Proper waste collection helps keep streets,
                rivers and public places clean and safe.
              </p>

            </div>

            <div className="awareness-card">

              <div className="icon">⚡</div>

              <h3>Energy Conservation</h3>

              <p>
                Reusing recyclable materials saves energy
                and reduces environmental damage.
              </p>

            </div>

          </div>

          <div className="impact-banner">

            <div>

              <h2>✨ Small Actions Create Big Impact</h2>

              <p>
                Your single waste request contributes to
                a cleaner and greener future.
              </p>

            </div>

            <button
              className="learn-btn"
              onClick={() => navigate("/about")}
            >
              Learn More →
            </button>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default CreateRequest;
