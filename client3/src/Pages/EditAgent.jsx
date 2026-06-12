import React, { useEffect, useState } from "react";

import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditAgent() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    district: "",
    phone: "",
    address: "",
  });

  useEffect(() => {

    const data =
      localStorage.getItem("editAgent");

    if (data) {

      setForm(JSON.parse(data));
    }

  }, []);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {

    try {

      await API.put(
  `/agent/${form._id}`,
  form
);

      toast.success(
      "Agent Updated Successfully ✅"
    );

    setTimeout(() => {
      window.location.href =
        "/agent-profile";
    }, 1500);

  } catch (error) {

    console.log(error);

    toast.error(
      "Update Failed ❌"
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

    <div style={{ padding: "30px" }}>

      <h1>Edit Agent</h1>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <br /><br />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <br /><br />

      <input
        name="district"
        value={form.district}
        onChange={handleChange}
        placeholder="District"
      />

      <br /><br />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
      />

      <br /><br />

      <textarea
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
      />

      <br /><br />

      <button onClick={handleUpdate}>
        Update Agent
      </button>

    </div>
    </>
  );
}

export default EditAgent;