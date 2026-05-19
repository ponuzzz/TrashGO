// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// import {
//   FaRecycle,
//   FaLeaf,
//   FaTruckMoving,
//   FaTrash,
//   FaWhatsapp,
//   FaArrowUp,
//   FaSearch,
//   FaGlobeAsia,
//   FaSolarPanel,
//   FaHandsHelping,
//   FaLaptop,
//   FaWineBottle,
//   FaCogs,
//   FaAppleAlt,
//   FaNewspaper,
//   FaTshirt,
//   FaTree,
//   FaBatteryHalf,
//   FaUtensils,
//   FaHospital,
//   FaFlask,
// } from "react-icons/fa";

// import { useState, useEffect } from "react";
// import image1 from "../assets/images/image-1.png";
// import image2 from "../assets/images/image-2.png";
// import image3 from "../assets/images/image-3.png";
// import image4 from "../assets/images/image-4.png";
// import "./home.css";

// function Home() {

//   const [search, setSearch] = useState("");

//   /* IMPACT COUNTER */

//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   const [count4, setCount4] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {

//       setCount1((prev) => (prev < 10000 ? prev + 100 : 10000));

//       setCount2((prev) => (prev < 95 ? prev + 1 : 95));

//       setCount3((prev) => (prev < 500 ? prev + 5 : 500));

//       setCount4((prev) => (prev < 14 ? prev + 1 : 14));

//     }, 30);

//     return () => clearInterval(interval);

//   }, []);

//   /* WASTE TYPES */

//   const wasteTypes = [
//     {
//       name: "Plastic Waste",
//       icon: <FaRecycle className="waste-icon" />,
//     },
//     {
//       name: "E-Waste",
//       icon: <FaLaptop className="waste-icon" />,
//     },
//     {
//       name: "Glass Waste",
//       icon: <FaWineBottle className="waste-icon" />,
//     },
//     {
//       name: "Metal Waste",
//       icon: <FaCogs className="waste-icon" />,
//     },
//     {
//       name: "Organic Waste",
//       icon: <FaLeaf className="waste-icon" />,
//     },
//     {
//       name: "Paper Waste",
//       icon: <FaNewspaper className="waste-icon" />,
//     },
//     {
//       name: "Rubber Waste",
//       icon: <FaRecycle className="waste-icon" />,
//     },
//     {
//       name: "Textile Waste",
//       icon: <FaTshirt className="waste-icon" />,
//     },
//     {
//       name: "Wood Waste",
//       icon: <FaTree className="waste-icon" />,
//     },
//     {
//       name: "Battery Waste",
//       icon: <FaBatteryHalf className="waste-icon" />,
//     },
//     {
//       name: "Food Waste",
//       icon: <FaUtensils className="waste-icon" />,
//     },
//     {
//       name: "Medical Waste",
//       icon: <FaHospital className="waste-icon" />,
//     },
//     {
//       name: "Chemical Waste",
//       icon: <FaFlask className="waste-icon" />,
//     },
//     {
//       name: "Aluminium Waste",
//       icon: <FaRecycle className="waste-icon" />,
//     },
//   ];

//   const filteredWaste = wasteTypes.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const cards = [
//     {
//       title: "WHY",
//       text: "Creating cleaner cities and sustainable waste solutions.",
//     },
//     {
//       title: "WHAT",
//       text: "Digital smart recycling and eco waste management.",
//     },
//     {
//       title: "WHERE",
//       text: "Connected across Kerala districts and local bodies.",
//     },
//     {
//       title: "HOW",
//       text: "Doorstep pickup with AI based tracking systems.",
//     },
//   ];

//   return (
//     <>

      

//       {/* HERO SECTION */}

//       <div
//         id="heroCarousel"
//         className="carousel slide hero-carousel"
//         data-bs-ride="carousel"
//         data-bs-interval="3000"
//       >

//         <div className="carousel-indicators">

//           <button
//             type="button"
//             data-bs-target="#heroCarousel"
//             data-bs-slide-to="0"
//             className="active"
//           ></button>

//           <button
//             type="button"
//             data-bs-target="#heroCarousel"
//             data-bs-slide-to="1"
//           ></button>

//           <button
//             type="button"
//             data-bs-target="#heroCarousel"
//             data-bs-slide-to="2"
//           ></button>

//           <button
//             type="button"
//             data-bs-target="#heroCarousel"
//             data-bs-slide-to="3"
//           ></button>

//         </div>

//         <div className="carousel-inner">

//           {/* IMAGE 1 */}

//           <div className="carousel-item active">

//             <img
//               src={image1}
//               className="d-block w-100 hero-img"
//               alt="slide1"
//             />

//             <div className="hero-overlay">

//               <div className="hero-content">

//                 {/* <h1 className="hero-title">
//                   Smart Waste Management
//                 </h1> */}
// {/* 
//                 <p className="hero-text">
//                   Building Cleaner Cities With Smart Technology
//                 </p> */}
// {/* 
//                 <button className="hero-btn">
//                   Explore More
//                 </button> */}

//               </div>

//             </div>

//           </div>

//           {/* IMAGE 2 */}

//           <div className="carousel-item">

//             <img
//               src={image2}
//               className="d-block w-100 hero-img"
//               alt="slide2"
//             />

//             <div className="hero-overlay">

//               <div className="hero-content">

//                 {/* cycle For Future
//                 </h1><h1 className="hero-title">
//                   Re

//                 <p className="hero-text">
//                   Green Earth • Smart Recycling
//                 </p>

//                 <button className="hero-btn">
//                   Join Mission
//                 </button> */}

//               </div>

//             </div>

//           </div>

//           {/* IMAGE 3 */}

//           <div className="carousel-item">

//             <img
//               src={image3}
//               className="d-block w-100 hero-img"
//               alt="slide3"
//             />

//             <div className="hero-overlay">

//               <div className="hero-content">

//                 {/* <h1 className="hero-title">
//                   Eco Smart Kerala
//                 </h1>

//                 <p className="hero-text">
//                   Sustainable Collection Platform
//                 </p>

//                 <button className="hero-btn">
//                   Start Today
//                 </button> */}

//               </div>

//             </div>

//           </div>

//           {/* IMAGE 4 */}

//           <div className="carousel-item">

//             <img
//               src={image4}
//               className="d-block w-100 hero-img"
//               alt="slide4"
//             />

//             <div className="hero-overlay">

//               <div className="hero-content">
// {/* 
//                 <h1 className="hero-title">
//                   Future Green Cities
//                 </h1>

//                 <p className="hero-text">
//                   Smart Pickup • Smart Environment
//                 </p>

//                 <button className="hero-btn">
//                   Learn More
//                 </button> */}

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* LEFT */}

//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#heroCarousel"
//           data-bs-slide="prev"
//         >

//           <span
//             className="carousel-control-prev-icon custom-arrow"
//           ></span>

//         </button>

//         {/* RIGHT */}

//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#heroCarousel"
//           data-bs-slide="next"
//         >

//           <span
//             className="carousel-control-next-icon custom-arrow"
//           ></span>

//         </button>

//       </div>

//       {/* INFO */}

//       <div className="info-section">

//         <div className="container">

//           <h1 className="section-heading">
//             Why Smart Waste System ?
//           </h1>

//           <div className="row mt-5">

//             {cards.map((item, index) => (

//               <div className="col-lg-3 col-md-6 mb-4" key={index}>

//                 <div className="info-card">

//                   <h2>{item.title}</h2>

//                   <p>{item.text}</p>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//       {/* FILTER */}

//       <div className="filter-section">

//         <h1 className="main-heading">
//           ♻ Waste Categories
//         </h1>

//         <p className="sub-heading">
//           Search & Explore Waste Types
//         </p>

//         <div className="search-box">

//           <FaSearch className="search-icon" />

//           <input
//             type="text"
//             placeholder="Search Waste Type..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//         </div>

//         <div className="waste-scroll">

//           {filteredWaste.map((item, index) => (

//             <div className="waste-card" key={index}>

//               {item.icon}

//               <h5>{item.name}</h5>

//             </div>

//           ))}

//         </div>

//       </div>

//       {/* SERVICES */}

// <div className="services-section">

//   <div className="container">

//     <h1 className="service-title">
//       🌍 Smart Eco Services
//     </h1>

//     <div className="row mt-5">

//       <div className="col-lg-3 col-md-6 mb-4">

//         <div className="modern-card">

//           <FaRecycle className="modern-icon" />

//           <h4>Smart Recycling</h4>

//           <p>
//             AI based recycling management system for cleaner cities.
//           </p>

//         </div>

//       </div>

//       <div className="col-lg-3 col-md-6 mb-4">

//         <div className="modern-card">

//           <FaLeaf className="modern-icon" />

//           <h4>Green Earth</h4>

//           <p>
//             Sustainable environment and eco-friendly waste solutions.
//           </p>

//         </div>

//       </div>

//       <div className="col-lg-3 col-md-6 mb-4">

//         <div className="modern-card">

//           <FaTruckMoving className="modern-icon" />

//           <h4>Pickup Service</h4>

//           <p>
//             Fast doorstep waste collection with smart tracking.
//           </p>

//         </div>

//       </div>

//       <div className="col-lg-3 col-md-6 mb-4">

//         <div className="modern-card">

//           <FaTrash className="modern-icon" />

//           <h4>Waste Control</h4>

//           <p>
//             Advanced monitoring and smart waste reduction system.
//           </p>

//         </div>

//       </div>

//     </div>

//   </div>

// </div>


//       {/* IMPACT */}

//       <div className="impact-section">

//         <div className="container">

//           <h1 className="impact-title">
//             🌎 Global Impact
//           </h1>

//           <div className="row mt-5">

//             <div className="col-lg-3 col-md-6 mb-4">

//               <div className="impact-box">

//                 <h2>{count1}+</h2>

//                 <p>Waste Requests</p>

//               </div>

//             </div>

//             <div className="col-lg-3 col-md-6 mb-4">

//               <div className="impact-box">

//                 <h2>{count2}%</h2>

//                 <p>Recycling Success</p>

//               </div>

//             </div>

//             <div className="col-lg-3 col-md-6 mb-4">

//               <div className="impact-box">

//                 <h2>{count3}+</h2>

//                 <p>Pickup Vehicles</p>

//               </div>

//             </div>

//             <div className="col-lg-3 col-md-6 mb-4">

//               <div className="impact-box">

//                 <h2>{count4}+</h2>

//                 <p>Waste Categories</p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       <Footer />

//     </>
//   );
// }

// export default Home;

// Home.jsx

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import {
  FaRecycle,
  FaLeaf,
  FaTruckMoving,
  FaTrash,
  FaWhatsapp,
  FaArrowUp,
  FaSearch,
  FaLaptop,
  FaWineBottle,
  FaCogs,
  FaNewspaper,
  FaTshirt,
  FaTree,
  FaBatteryHalf,
  FaUtensils,
  FaHospital,
  FaFlask,
  FaSolarPanel,
  FaHandsHelping,
} from "react-icons/fa";

import { useState, useEffect } from "react";

import "./home.css";

function Home() {

  const [search, setSearch] = useState("");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  /* COUNTER */

  useEffect(() => {

    const interval = setInterval(() => {

      setCount1((prev) => (prev < 10000 ? prev + 100 : 10000));

      setCount2((prev) => (prev < 95 ? prev + 1 : 95));

      setCount3((prev) => (prev < 500 ? prev + 5 : 500));

      setCount4((prev) => (prev < 14 ? prev + 1 : 14));

    }, 30);

    return () => clearInterval(interval);

  }, []);

  /* WASTE TYPES */

  const wasteTypes = [

    {
      name: "Plastic Waste",
      icon: <FaRecycle className="waste-icon" />,
    },

    {
      name: "E-Waste",
      icon: <FaLaptop className="waste-icon" />,
    },

    {
      name: "Glass Waste",
      icon: <FaWineBottle className="waste-icon" />,
    },

    {
      name: "Metal Waste",
      icon: <FaCogs className="waste-icon" />,
    },

    {
      name: "Organic Waste",
      icon: <FaLeaf className="waste-icon" />,
    },

    {
      name: "Paper Waste",
      icon: <FaNewspaper className="waste-icon" />,
    },

    {
      name: "Textile Waste",
      icon: <FaTshirt className="waste-icon" />,
    },

    {
      name: "Wood Waste",
      icon: <FaTree className="waste-icon" />,
    },

    {
      name: "Battery Waste",
      icon: <FaBatteryHalf className="waste-icon" />,
    },

    {
      name: "Food Waste",
      icon: <FaUtensils className="waste-icon" />,
    },

    {
      name: "Medical Waste",
      icon: <FaHospital className="waste-icon" />,
    },

    {
      name: "Chemical Waste",
      icon: <FaFlask className="waste-icon" />,
    },

  ];

  const filteredWaste = wasteTypes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const cards = [

    {
      title: "WHY",
      text: "Creating cleaner cities and sustainable waste solutions.",
    },

    {
      title: "WHAT",
      text: "Digital smart recycling and eco waste management.",
    },

    {
      title: "WHERE",
      text: "Connected across Kerala districts and local bodies.",
    },

    {
      title: "HOW",
      text: "Doorstep pickup with smart live tracking systems.",
    },

  ];

  return (

    <>

      

      {/* HERO SECTION */}

      <div
        id="heroCarousel"
        className="carousel slide hero-carousel"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        {/* INDICATORS */}

        <div className="carousel-indicators">

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          ></button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="3"
          ></button>

        </div>

        <div className="carousel-inner">

          {/* IMAGE 1 */}

          <div className="carousel-item active">

            <img
              src="/images/image-1.png"
              className="d-block w-100 hero-img"
              alt="slide1"
            />

            <div className="hero-overlay">

              <div className="hero-content">

                {/* <h1 className="hero-title">
                  Smart Waste Management
                </h1>

                <p className="hero-text">
                  Building Cleaner Cities With Smart Technology
                </p>

                <button className="hero-btn">
                  Explore More
                </button> */}

              </div>

            </div>

          </div>

          {/* IMAGE 2 */}

          <div className="carousel-item">

            <img
              src="/images/image-2.png"
              className="d-block w-100 hero-img"
              alt="slide2"
            />

            <div className="hero-overlay">

              <div className="hero-content">
{/* 
                <h1 className="hero-title">
                  Recycle For Future
                </h1>

                <p className="hero-text">
                  Green Earth • Smart Recycling
                </p>

                <button className="hero-btn">
                  Join Mission
                </button> */}

              </div>

            </div>

          </div>

          {/* IMAGE 3 */}

          <div className="carousel-item">

            <img
              src="/images/image-3.png"
              className="d-block w-100 hero-img"
              alt="slide3"
            />

            <div className="hero-overlay">

              <div className="hero-content">

                {/* <h1 className="hero-title">
                  Eco Smart Kerala
                </h1>

                <p className="hero-text">
                  Sustainable Collection Platform
                </p>

                <button className="hero-btn">
                  Start Today
                </button> */}

              </div>

            </div>

          </div>

          {/* IMAGE 4 */}

          <div className="carousel-item">

            <img
              src="/images/image-4.png"
              className="d-block w-100 hero-img"
              alt="slide4"
            />

            <div className="hero-overlay">

              <div className="hero-content">

                {/* <h1 className="hero-title">
                  Future Green Cities
                </h1>

                <p className="hero-text">
                  Smart Pickup • Smart Environment
                </p>

                <button className="hero-btn">
                  Learn More
                </button> */}

              </div>

            </div>

          </div>

        </div>

        {/* LEFT ARROW */}

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >

          <span className="carousel-control-prev-icon"></span>

        </button>

        {/* RIGHT ARROW */}

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >

          <span className="carousel-control-next-icon"></span>

        </button>

      </div>

      {/* INFO SECTION */}

      <div className="info-section">

        <div className="container">

          <h1 className="section-heading">
            Why Smart Waste System ?
          </h1>

          <div className="row mt-5">

            {cards.map((item, index) => (

              <div className="col-lg-3 col-md-6 mb-4" key={index}>

                <div className="info-card">

                  <h2>{item.title}</h2>

                  <p>{item.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* FILTER SECTION */}

      <div className="filter-section">

        <h1 className="main-heading">
          ♻ Waste Categories
        </h1>

        <p className="sub-heading">
          Search & Explore Waste Types
        </p>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search Waste Type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="waste-scroll">

          {filteredWaste.map((item, index) => (

            <div className="waste-card" key={index}>

              {item.icon}

              <h5>{item.name}</h5>

            </div>

          ))}

        </div>

      </div>

      {/* SERVICES */}

      <div className="services-section">

        <div className="container">

          <h1 className="service-title">
            🌍 Smart Eco Services
          </h1>

          <div className="row mt-5">

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="modern-card">

                <FaRecycle className="modern-icon" />

                <h4>Smart Recycling</h4>

                <p>
                  AI based recycling management system.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="modern-card">

                <FaLeaf className="modern-icon" />

                <h4>Green Earth</h4>

                <p>
                  Sustainable environment and eco solutions.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="modern-card">

                <FaTruckMoving className="modern-icon" />

                <h4>Pickup Service</h4>

                <p>
                  Fast doorstep collection with tracking.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="modern-card">

                <FaTrash className="modern-icon" />

                <h4>Waste Control</h4>

                <p>
                  Smart monitoring and waste reduction.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* EXTRA SECTION */}

      <div className="extra-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6 mb-4">

              <img
                src="/images/eco-tips.png"
                alt="eco"
                className="extra-img"
              />

            </div>

            <div className="col-lg-6">

              <h1>
                Smart Digital Waste Platform
              </h1>

              <p className="mt-4">

                Trasho helps users request waste pickup,
                manage recycling, connect agents and
                build cleaner eco friendly cities.

              </p>

              <div className="extra-icons">

                <div>

                  <FaSolarPanel className="modern-icon" />

                  <h5>Green Energy</h5>

                </div>

                <div>

                  <FaHandsHelping className="modern-icon" />

                  <h5>Community Help</h5>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* IMPACT */}

      <div className="impact-section">

        <div className="container">

          <h1 className="impact-title">
            🌎 Global Impact
          </h1>

          <div className="row mt-5">

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="impact-box">

                <h2>{count1}+</h2>

                <p>Waste Requests</p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="impact-box">

                <h2>{count2}%</h2>

                <p>Recycling Success</p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="impact-box">

                <h2>{count3}+</h2>

                <p>Pickup Vehicles</p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="impact-box">

                <h2>{count4}+</h2>

                <p>Waste Categories</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FLOATING BUTTON */}

      <a
        href="https://wa.me/919999999999"
        className="whatsapp-btn"
      >

        <FaWhatsapp />

      </a>

      <button
        className="top-btn"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >

        <FaArrowUp />

      </button>

      <Footer />

    </>

  );

}

export default Home;
