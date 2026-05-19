import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import "./agentComplaint.css";

function AgentComplaint() {

  const [msg, setMsg] =
    useState("");

  const [data, setData] =
    useState([]);

  const [editId, setEditId] =
    useState(null);

  const token =
    localStorage.getItem("token");

  // FETCH

  const fetchData =
    async () => {

      const res =
        await axios.get(

          "http://localhost:8000/api/complaints/my",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }

        );

      setData(
        res.data.filter(
          (c) => c.role === "agent"
        )
      );

    };

  useEffect(() => {

    fetchData();

  }, []);

  // SUBMIT

  const submit =
    async () => {

      if (!msg)
        return alert(
          "Enter complaint"
        );

      if (editId) {

        await axios.put(

          `http://localhost:8000/api/complaints/${editId}`,

          {
            message: msg
          },

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }

        );

        alert("Updated");

      } else {

        await axios.post(

          "http://localhost:8000/api/complaints",

          {
            message: msg
          },

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }

        );

        alert("Complaint Sent");

      }

      setMsg("");

      setEditId(null);

      fetchData();

    };

  // DELETE

  const deleteComplaint =
    async (id) => {



      // `http://localhost:8000/api/complaints/${id}`,

      await axios.delete(

        `http://localhost:8000/api/complaints/user/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }

      );

      fetchData();

    };

  return (

    <div className="agent-complaint-page">

      <div className="agent-complaint-hero">

        <h1>
          ⚠ Agent Support
        </h1>

        <p>
          Report pickup issues,
          payment delays and
          collection problems
          directly to admin.
        </p>

      </div>

      {/* INPUT */}

      <div className="agent-complaint-box">

        <textarea

          value={msg}

          placeholder="Write issue here..."

          onChange={(e) =>
            setMsg(e.target.value)
          }

        />

        <button onClick={submit}>

          {
            editId
              ? "Update Complaint"
              : "Submit Complaint"
          }

        </button>

      </div>

      {/* LIST */}

      <div className="agent-complaint-list">

        {
          data.map((c) => (

            <div
              className="agent-complaint-card"
              key={c._id}
            >

              <div className="top">

                <h3>
                  🚛 Agent Complaint
                </h3>

                <span>
                  {c.status}
                </span>

              </div>

              <p>
                {c.message}
              </p>

              <small>

                🕒 {
                  new Date(
                    c.createdAt
                  ).toLocaleString()
                }

              </small>

              {
                c.reply && (

                  <div className="reply-box">

                    ✅ Admin Reply:
                    {" "}
                    {c.reply}

                  </div>

                )
              }

              <div className="btns">

                <button
                  onClick={() => {

                    setMsg(c.message);

                    setEditId(c._id);

                  }}
                >
                  ✏ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteComplaint(c._id)
                  }
                >
                  ❌ Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default AgentComplaint;
