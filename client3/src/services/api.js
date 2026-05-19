
// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // attach token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });
// export default API;

const BASE_URL = "http://localhost:8000/api";

// AUTH
// export const registerUser = async (data) => {
//   const res = await fetch(`${BASE_URL}/auth/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const loginUser = async (data) => {
//   const res = await fetch(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result); // 🔥 IMPORTANT
  }

  return result;
};

// ✅ LOGIN
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result);
  }

  return result;
};

// WASTE
export const createWaste = async (formData, token) => {
  const res = await fetch(`${BASE_URL}/waste`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return res.json();
};

export const getMyWaste = async (token) => {
  const res = await fetch("http://localhost:8000/api/waste/my", {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ MUST
    },
  });

  return res.json();
};


// ANNOUNCEMENTS
export const getAnnouncements = async (token) => {
  const res = await fetch(`${BASE_URL}/announcements`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const getAllAgents = async () => {

  const response = await fetch(

    "http://localhost:8000/api/agent/all"

  );

  return response.json();

};
export const getPickupAgents = async () => {

  const response = await fetch(
    "http://localhost:8000/api/agent/pickup-agents"
  );

  return response.json();

};
