import React, { useEffect, useState } from "react";
import axios from "axios";

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

      await axios.put(
        `http://localhost:8000/api/agent/${form._id}`,
        form
      );

      alert("✅ Agent Updated");

      window.location.href =
        "/agent-profile";

    } catch (error) {

      console.log(error);

      alert("❌ Update Failed");
    }
  };

  return (

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
  );
}

export default EditAgent;