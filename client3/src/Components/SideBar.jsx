// import { Link, useLocation } from "react-router-dom";
// import "./sidebar.css";

// function Sidebar() {
//   const location = useLocation();

//   const menu = [
//     { name: "Home", path: "/user/home", icon: "🏠" },
//     { name: "Create Request", path: "/create", icon: "♻️" },
//     { name: "My Requests", path: "/my", icon: "📦" },
//     { name: "Complaints", path: "/complaint", icon: "⚠️" },
//   ];

//   return (
//     <div className="sidebar">
//       <h2 className="logo">♻ WasteApp</h2>

//       {menu.map((item) => (
//         <Link
//           key={item.path}
//           to={item.path}
//           className={
//             location.pathname === item.path ? "active link" : "link"
//           }
//         >
//           <span>{item.icon}</span> {item.name}
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;
