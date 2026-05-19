// import Footer from "../Components/Footer";
// import "./about.css";

// import {
//   FaRecycle,
//   FaLeaf,
//   FaGlobeAsia,
//   FaTruckMoving,
//   FaHandsHelping,
//   FaSolarPanel,
// } from "react-icons/fa";

// function About() {

//   const services = [
//     {
//       icon: <FaRecycle />,
//       title: "Smart Recycling",
//       text: "AI based waste recycling and eco management.",
//     },
//     {
//       icon: <FaLeaf />,
//       title: "Green Environment",
//       text: "Cleaner cities with sustainable solutions.",
//     },
//     {
//       icon: <FaTruckMoving />,
//       title: "Pickup Service",
//       text: "Fast doorstep waste collection system.",
//     },
//   ];

//   return (
//     <>

//       {/* HERO SECTION */}

//       <div className="about-hero">

//         <div className="hero-overlay">

//           <div className="container">

//             <h1>
//               About Smart Waste
//             </h1>

//             <p>
//               Building cleaner cities through smart recycling,
//               technology and sustainable eco solutions.
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* ABOUT SECTION */}

//       <div className="about-section">

//         <div className="container">

//           <div className="row align-items-center">

//             <div className="col-lg-6 mb-4">

//               <img
//                 src="/images/image-2.png"
//                 alt="about"
//                 className="about-img"
//               />

//             </div>

//             <div className="col-lg-6">

//               <h2>
//                 Smart Eco Waste Platform
//               </h2>

//               <p>
//                 Our platform helps users manage waste efficiently
//                 with modern recycling technology, smart pickup
//                 systems and eco-friendly solutions.
//               </p>

//               <div className="about-points">

//                 <div>
//                   <FaGlobeAsia />
//                   <span>Clean Environment</span>
//                 </div>

//                 <div>
//                   <FaHandsHelping />
//                   <span>Community Support</span>
//                 </div>

//                 <div>
//                   <FaSolarPanel />
//                   <span>Green Energy</span>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* SERVICES */}

//       <div className="service-section">

//         <div className="container">

//           <h1 className="section-title">
//             Smart Services
//           </h1>

//           <div className="row mt-5">

//             {services.map((item, index) => (

//               <div className="col-lg-4 col-md-6 mb-4" key={index}>

//                 <div className="service-card">

//                   <div className="service-icon">
//                     {item.icon}
//                   </div>

//                   <h3>{item.title}</h3>

//                   <p>{item.text}</p>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//       {/* MISSION & VISION */}

//       <div className="mission-section">

//         <div className="container">

//           <div className="row">

//             <div className="col-lg-6 mb-4">

//               <div className="mission-card">

//                 <h2>
//                   🌍 Our Mission
//                 </h2>

//                 <p>
//                   To reduce pollution and create cleaner,
//                   greener and smarter cities through
//                   sustainable waste management systems.
//                 </p>

//               </div>

//             </div>

//             <div className="col-lg-6 mb-4">

//               <div className="mission-card">

//                 <h2>
//                   🚀 Our Vision
//                 </h2>

//                 <p>
//                   To build a future where technology and
//                   sustainability work together for a
//                   healthier environment.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       <Footer />

//     </>
//   );
// }

// export default About;

// import Footer from "../Components/Footer";

// import "./about.css";

// import {
//   FaRecycle,
//   FaLeaf,
//   FaGlobeAsia,
//   FaTruckMoving,
//   FaHandsHelping,
//   FaSolarPanel,
//   FaUsers,
//   FaAward,
//   FaChartLine,
//   FaArrowRight
// } from "react-icons/fa";

// import aboutImage from "../assets/images/image-2.png";
// import heroImage from "../assets/images/image-3.png";

// function About() {

//   const services = [

//     {
//       icon: <FaRecycle />,
//       title: "Smart Recycling",
//       text:
//         "Advanced recycling management for eco-friendly waste processing.",
//     },

//     {
//       icon: <FaTruckMoving />,
//       title: "Fast Pickup",
//       text:
//         "Doorstep waste collection with real-time request tracking.",
//     },

//     {
//       icon: <FaLeaf />,
//       title: "Green Future",
//       text:
//         "Building cleaner cities through sustainable waste solutions.",
//     },

//   ];

//   const features = [

//     "AI Based Waste Monitoring",
//     "Live Pickup Tracking",
//     "District Wise Agent System",
//     "Secure Online Payments",
//     "Complaint & Support Center",
//     "Eco Reward Collection",

//   ];

//   return (

//     <>

//       {/* HERO SECTION */}

//       <section className="about-hero"
//         style={{
//     backgroundImage:
//       `linear-gradient(
//         rgba(0,0,0,0.55),
//         rgba(0,0,0,0.55)
//       ), url(${heroImage})`
//   }}
// >

//         <div className="hero-overlay">

//           <div className="hero-content">

//             <span className="hero-badge">
//               ♻ Smart Eco Waste Platform
//             </span>

//             <h1>
//               Creating Cleaner Cities
//               With Smart Waste Solutions
//             </h1>

//             <p>
//               Trasho helps users manage waste easily with
//               modern recycling systems, smart pickups,
//               eco-friendly technology and faster support.
//             </p>

//             <div className="hero-buttons">

//               <button className="hero-btn">

//                 Explore Services

//                 <FaArrowRight />

//               </button>

//               <button className="hero-btn light-btn">

//                 Learn More

//               </button>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* STATS SECTION */}

//       <section className="stats-section">

//         <div className="stats-card">

//           <h1>15K+</h1>

//           <p>Waste Collections</p>

//         </div>

//         <div className="stats-card">

//           <h1>120+</h1>

//           <p>Pickup Agents</p>

//         </div>

//         <div className="stats-card">

//           <h1>98%</h1>

//           <p>Success Rate</p>

//         </div>

//         <div className="stats-card">

//           <h1>24/7</h1>

//           <p>Customer Support</p>

//         </div>

//       </section>

//       {/* ABOUT SECTION */}

//       <section className="about-section">

//         <div className="about-left">

//           <img
//             src={aboutImage}
//             alt="about"
//             className="about-img"
//           />

//         </div>

//         <div className="about-right">

//           <span className="section-badge">
//             🌱 About Trasho
//           </span>

//           <h2>
//             Smart Technology Meets Sustainable Environment
//           </h2>

//           <p>
//             Our platform connects users, agents and admins
//             through a smart waste management ecosystem.
//             Users can raise waste pickup requests,
//             track collections and contribute to
//             a greener future.
//           </p>

//           <div className="about-points">

//             <div className="point-card">

//               <FaGlobeAsia />

//               <h4>Clean Environment</h4>

//             </div>

//             <div className="point-card">

//               <FaHandsHelping />

//               <h4>Community Support</h4>

//             </div>

//             <div className="point-card">

//               <FaSolarPanel />

//               <h4>Eco Technology</h4>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* SERVICES */}

//       <section className="service-section">

//         <div className="section-header">

//           <span className="section-badge">
//             🚛 Smart Services
//           </span>

//           <h2>
//             Waste Management Features
//           </h2>

//           <p>
//             Modern features designed for better recycling,
//             faster collection and eco-friendly cities.
//           </p>

//         </div>

//         <div className="service-grid">

//           {services.map((item, index) => (

//             <div
//               className="service-card"
//               key={index}
//             >

//               <div className="service-icon">
//                 {item.icon}
//               </div>

//               <h3>
//                 {item.title}
//               </h3>

//               <p>
//                 {item.text}
//               </p>

//             </div>

//           ))}

//         </div>

//       </section>

//       {/* PLATFORM FEATURES */}

//       <section className="feature-section">

//         <div className="feature-left">

//           <span className="section-badge">
//             ⚡ Platform Features
//           </span>

//           <h2>
//             Everything Needed For Smart Waste Collection
//           </h2>

//           <p>
//             Trasho includes modern tools for users,
//             agents and admins to improve waste
//             management performance.
//           </p>

//           <div className="feature-list">

//             {features.map((item, index) => (

//               <div
//                 className="feature-item"
//                 key={index}
//               >

//                 ✅ {item}

//               </div>

//             ))}

//           </div>

//         </div>

//         <div className="feature-right">

//           <div className="feature-box">

//             <FaChartLine />

//             <h3>
//               Real-Time Tracking
//             </h3>

//             <p>
//               Monitor waste requests and collection
//               progress instantly.
//             </p>

//           </div>

//           <div className="feature-box">

//             <FaAward />

//             <h3>
//               Eco Performance
//             </h3>

//             <p>
//               Improve recycling quality with
//               sustainable systems.
//             </p>

//           </div>

//           <div className="feature-box">

//             <FaUsers />

//             <h3>
//               Community Impact
//             </h3>

//             <p>
//               Building cleaner cities together
//               with public support.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* MISSION */}

//       <section className="mission-section">

//         <div className="mission-card">

//           <h2>
//             🌍 Our Mission
//           </h2>

//           <p>
//             To reduce pollution and create
//             cleaner cities through smart
//             recycling technology and modern
//             waste management systems.
//           </p>

//         </div>

//         <div className="mission-card">

//           <h2>
//             🚀 Our Vision
//           </h2>

//           <p>
//             To build a sustainable future where
//             technology and environmental care
//             work together for healthier living.
//           </p>

//         </div>

//       </section>

//       {/* FINAL BANNER */}

//       <section className="final-banner">

//         <div>

//           <h1>
//             Join The Smart Recycling Revolution
//           </h1>

//           <p>
//             Together we can build greener,
//             cleaner and smarter cities.
//           </p>

//         </div>

//         <button>
//           Get Started
//         </button>

//       </section>

//       <Footer />

//     </>

//   );

// }

// export default About;


// About.jsx

// import Footer from "../Components/Footer";

// import "./about.css";

// import {
//   FaRecycle,
//   FaLeaf,
//   FaGlobeAsia,
//   FaTruckMoving,
//   FaHandsHelping,
//   FaSolarPanel,
//   FaUsers,
//   FaAward,
//   FaChartLine,
//   FaArrowRight,
//   FaPlayCircle,
//   FaShieldAlt,
//   FaCity,
//   FaTrash,
// } from "react-icons/fa";

// function About() {

//   const services = [

//     {
//       icon: <FaRecycle />,
//       title: "Smart Recycling",
//       text:
//         "Advanced recycling management for eco-friendly waste processing.",
//     },

//     {
//       icon: <FaTruckMoving />,
//       title: "Fast Pickup",
//       text:
//         "Doorstep waste collection with real-time request tracking.",
//     },

//     {
//       icon: <FaLeaf />,
//       title: "Green Future",
//       text:
//         "Building cleaner cities through sustainable waste solutions.",
//     },

//     // {
//     //   icon: <FaUsers />,
//     //   title: "Community Support",
//     //   text:
//     //     "Connecting users, agents and local eco communities.",
//     // },

//   ];

//   return (

//     <>

//       {/* HERO */}

//       <section className="about-hero">

//         <div className="hero-overlay"></div>

//         <div className="floating-circle one"></div>
//         <div className="floating-circle two"></div>
//         <div className="floating-circle three"></div>

//         <div className="hero-content">

//            <span className="hero-badge">
//             ♻ Smart Eco Waste Platform
//           </span>

          
//           <p>
//             Trasho helps create cleaner cities through
//             smart recycling, waste collection and eco
//             technology solutions across Kerala.
//           </p>

//           <div className="hero-buttons">

//             {/* <button className="hero-btn">

//               Explore Services

//               <FaArrowRight />

//             </button>  */}

//           </div> 
         

//         </div>

//       </section>

//       {/* ABOUT */}

//       <section className="about-section">

//         <div className="about-left">

//           <img
//             src="/images/image-2.png"
//             alt="about"
//             className="about-img"
//           />

//         </div>

//         <div className="about-right">

//           <span className="section-badge">
//             🌱 About Trasho
//           </span>

//           <h2>
//             Digital Waste Management Platform
//           </h2>

//           <p>
//             Trasho connects users, agents and admins
//             through smart waste management and
//             eco-friendly recycling systems.
//           </p>

//           <div className="about-points">

//             <div className="point-card">

//               <FaGlobeAsia />

//               <h4>Clean Environment</h4>

//             </div>

//             <div className="point-card">

//               <FaHandsHelping />

//               <h4>Community Support</h4>

//             </div>

//             <div className="point-card">

//               <FaSolarPanel />

//               <h4>Eco Technology</h4>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* VIDEO SECTION */}

//       {/* <section className="video-section">

//         <div className="video-left">

//           <span className="section-badge">
//             🎥 Haritha Karma Awareness
//           </span>

//           <h2>
//             Waste Awareness Program
//           </h2>

//           <p>
//             Creating awareness about smart recycling,
//             waste segregation and sustainable eco systems
//             for cleaner future generations.
//           </p>

//           <button className="video-btn">

//             <FaPlayCircle />

//             Watch Awareness

//           </button>

//         </div>

//         <div className="video-right">

//           <video
//             controls
//             autoPlay
//             muted
//             loop
//             className="awareness-video"
//           >

//             <source
//               src="/videos/waste-awareness.mp4"
//               type="video/mp4"
//             />

//           </video>

//         </div>

//       </section> */}

//       <section className="video-section">

//   <div className="video-left">

//     <span className="section-badge">
//       🎥 Haritha Karma Awareness
//     </span>

//     <h2>
//       Waste Awareness Program
//     </h2>

//     <p>
//       Creating awareness about smart recycling
//       and eco friendly waste management.
//     </p>

//   </div>

//   <div className="video-right">

//     <iframe
//       className="awareness-video"
//       src="https://www.youtube.com/embed/3FEywMvpUeA?"
//       title="Waste Awareness"
//       allowFullScreen
//     ></iframe>

//   </div>

// </section>
//       {/* DOOR TO DOOR */}

//       <section className="door-section">

//         <div className="door-image">

//           <img
//             src="/images/image-5.png"
//             alt="door"
//           />

//         </div>

//         <div className="door-content">

//           <span className="section-badge">
//             🚛 Door To Door Pickup
//           </span>

//           <h2>
//             Smart Collection Service
//           </h2>

//           <p>
//             Easy doorstep pickup requests with live
//             tracking and district based waste agents.
//           </p>

//           <div className="door-grid">

//             <div className="door-card">

//               <FaTruckMoving />

//               <h4>Pickup</h4>

//             </div>

//             <div className="door-card">

//               <FaShieldAlt />

//               <h4>Safe Handling</h4>

//             </div>

//             <div className="door-card">

//               <FaCity />

//               <h4>Smart Cities</h4>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* SERVICES */}

//       <section className="service-section">

//         <div className="section-top">

//           <span className="section-badge">
//             🌍 Our Services
//           </span>

//           <h2>
//             Eco Smart Features
//           </h2>

//         </div>

//         <div className="service-grid">

//           {services.map((item, index) => (

//             <div
//               className="service-card"
//               key={index}
//             >

//               <div className="service-icon">
//                 {item.icon}
//               </div>

//               <h3>
//                 {item.title}
//               </h3>

//               <p>
//                 {item.text}
//               </p>

//             </div>

//           ))}

//         </div>

//       </section>

//       {/* EXTRA SECTION */}

//       <section className="extra-section">

//         <div className="extra-box">

//           <FaTrash className="extra-icon" />

//           <h2>
//             Smart Waste Avoidance
//           </h2>

//           <p>
//             Reducing waste generation through digital
//             monitoring and eco recycling solutions.
//           </p>

//         </div>

//         <div className="extra-box">

//           <FaAward className="extra-icon" />

//           <h2>
//             Sustainable Mission
//           </h2>

//           <p>
//             Building a green future with modern waste
//             management technologies and awareness.
//           </p>

//         </div>

//         <div className="extra-box">

//           <FaChartLine className="extra-icon" />

//           <h2>
//             Future Growth
//           </h2>

//           <p>
//             Expanding eco smart collection systems
//             across districts and local communities.
//           </p>

//         </div>

//       </section>

//       <Footer />

//     </>

//   );

// }

// export default About;


import Footer from "../Components/Footer";

import "./about.css";

import {
  FaRecycle,
  FaLeaf,
  FaGlobeAsia,
  FaTruckMoving,
  FaHandsHelping,
  FaSolarPanel,
  FaShieldAlt,
  FaCity,
  FaTrash,
  FaAward,
  FaChartLine,
} from "react-icons/fa";

function About() {

  const services = [

    {
      icon: <FaRecycle />,
      title: "Smart Recycling",
      text:
        "Advanced recycling management for eco-friendly waste processing.",
    },

    {
      icon: <FaTruckMoving />,
      title: "Fast Pickup",
      text:
        "Doorstep waste collection with real-time request tracking.",
    },

    {
      icon: <FaLeaf />,
      title: "Green Future",
      text:
        "Building cleaner cities through sustainable waste solutions.",
    },

  ];

  return (

    <>

      {/* HERO */}

      <section className="about-hero">

        <div className="hero-overlay"></div>

        <div className="floating-circle one"></div>
        <div className="floating-circle two"></div>
        <div className="floating-circle three"></div>

        <div className="hero-content">

          <span className="hero-badge">
            ♻ Smart Eco Waste Platform
          </span>

          {/* <h1>
            Clean Kerala <br />
            Green Future
          </h1> */}

          <p>
            Trasho connects users, agents and smart
            waste systems together for a cleaner,
            greener and sustainable tomorrow.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about-section">

        <div className="about-left">

          <img
            src="/images/image-6.png"
            alt="about"
            className="about-img"
          />

        </div>

        <div className="about-right">

          <span className="section-badge">
            🌱 About Trasho
          </span>

          <h2 className="main-heading">
            Smart Eco Waste Solution
          </h2>

          <p>
            Trasho helps manage waste collection,
            recycling and eco awareness through
            modern digital technology and smart
            waste management systems.
          </p>

          <div className="about-points">

            <div className="point-card">

              <FaGlobeAsia />

              <h4>Clean Environment</h4>

            </div>

            <div className="point-card">

              <FaHandsHelping />

              <h4>Community Support</h4>

            </div>

            <div className="point-card">

              <FaSolarPanel />

              <h4>Eco Technology</h4>

            </div>

          </div>

        </div>

      </section>

      {/* VIDEO SECTION */}

      <section className="video-section">

        <div className="video-left">

          <span className="section-badge">
            🎥 Waste Awareness
          </span>

          <h2 className="main-heading">
            Haritha Karma Awareness
          </h2>

          <p>
            Learn how proper waste segregation,
            recycling and eco-friendly practices
            can protect nature and create cleaner
            cities for future generations.
          </p>

          <div className="awareness-box">

            <h3>
              Smart Awareness Campaign
            </h3>

            <p>
              Educating people about plastic waste,
              sustainable living and smart recycling
              through modern awareness programs.
            </p>

          </div>

        </div>

        <div className="video-right">

          <iframe
            className="awareness-video"
            src="https://www.youtube.com/embed/3FEywMvpUeA"
            title="Waste Awareness"
            allowFullScreen
          ></iframe>

        </div>

      </section>

      {/* DOOR SECTION */}

      <section className="door-section">

        <div className="door-image">

          <img
            src="/images/image-5.png"
            alt="door"
          />

        </div>

        <div className="door-content">

          <span className="section-badge">
            🚛 Door To Door Pickup
          </span>

          <h2 className="main-heading">
            Smart Collection Service
          </h2>

          <p>
            Easy doorstep pickup requests with
            district based agents and secure
            waste handling systems.
          </p>

          <div className="door-grid">

            <div className="door-card">

              <FaTruckMoving />

              <h4>Fast Pickup</h4>

            </div>

            <div className="door-card">

              <FaShieldAlt />

              <h4>Safe Handling</h4>

            </div>

            <div className="door-card">

              <FaCity />

              <h4>Smart Cities</h4>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="service-section">

        <div className="section-top">

          <span className="section-badge">
            🌍 Our Services
          </span>

          <h2 className="main-heading">
            Eco Smart Features
          </h2>

        </div>

        <div className="service-grid">

          {services.map((item, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* EXTRA */}

      <section className="extra-section">

        <div className="extra-box">

          <FaTrash className="extra-icon" />

          <h2>
            Smart Waste Control
          </h2>

          <p>
            Reducing waste pollution through
            eco-friendly digital monitoring.
          </p>

        </div>

        <div className="extra-box">

          <FaAward className="extra-icon" />

          <h2>
            Sustainable Mission
          </h2>

          <p>
            Building greener communities with
            modern recycling awareness systems.
          </p>

        </div>

        <div className="extra-box">

          <FaChartLine className="extra-icon" />

          <h2>
            Future Growth
          </h2>

          <p>
            Expanding smart waste collection
            services across Kerala districts.
          </p>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default About;
