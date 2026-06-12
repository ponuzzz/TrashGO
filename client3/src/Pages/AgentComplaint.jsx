import {
  useEffect,
  useState
} from "react";

import API from "../api/axios";
import { toast } from "react-toastify";

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

  const fetchData = async () => {

  try {

    const res = await API.get(
      "/complaints/my"
    );

    setData(
      res.data.filter(
        (c) => c.role === "agent"
      )
    );

  } catch (err) {

    toast.error(
      "Failed to load complaints ❌"
    );

  }

};

  useEffect(() => {

    fetchData();

  }, []);

  // SUBMIT

  const submit = async () => {

  if (!msg) {

    toast.warning(
      "Enter complaint ⚠️"
    );

    return;
  }

  try {

    if (editId) {

      await API.put(
        `/complaints/${editId}`,
        {
          message: msg
        }
      );

      toast.success(
        "Complaint updated ✅"
      );

    } else {

      await API.post(
        "/complaints",
        {
          message: msg
        }
      );

      toast.success(
        "Complaint sent ✅"
      );

    }

    setMsg("");
    setEditId(null);

    fetchData();

  } catch (err) {

    toast.error(
      "Something went wrong ❌"
    );

  }

};


  // DELETE
const deleteComplaint = async (id) => {

  try {

    await API.delete(
      `/complaints/user/${id}`
    );

    toast.success(
      "Complaint deleted 🗑️"
    );

    fetchData();

  } catch (err) {

    toast.error(
      "Delete failed ❌"
    );

  }

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
