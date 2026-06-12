  // const BASE_URL = "http://localhost:8000/api";
 const BASE_URL = "https://trashgo-backend-zow6.onrender.com/api";
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

//  LOGIN
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
  //  const res = await fetch("http://localhost:8000/api/waste/my", {
  const res = await fetch(`${BASE_URL}/waste/my`, {
    headers: {
      Authorization: `Bearer ${token}`, 
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

  //  const response = await fetch(

  //    "http://localhost:8000/api/agent/all"

  //  );
  const response = await fetch(
   `${BASE_URL}/agent/all`
 );

  return response.json();

};
export const getPickupAgents = async () => {

  //  const response = await fetch(
  //    "http://localhost:8000/api/agent/pickup-agents"
  // );

   const response = await fetch(
   `${BASE_URL}/agent/pickup-agents`
 );

  return response.json();

};
