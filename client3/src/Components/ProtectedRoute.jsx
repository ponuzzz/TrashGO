import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  if (!token) {

    toast.error("Please login first 🔒");

    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;