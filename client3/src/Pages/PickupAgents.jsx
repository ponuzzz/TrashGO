import React, { useEffect, useState } from "react";

import {
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaIdCard,
  FaRecycle,
  FaSearch
} from "react-icons/fa";

import { getAllAgents } from "../services/api";

import "./pickupAgent.css";

function PickupAgents() {

  const [agents, setAgents] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchAgents();

  }, []);

  const fetchAgents = async () => {

    try {

      const data = await getAllAgents();

      setAgents(data);

    } catch (error) {

      console.log(error);

    }

  };

  // ================= FILTER =================

  const filteredAgents =
    agents.filter((agent) =>

      agent.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      agent.district
        ?.toLowerCase()
        .includes(search.toLowerCase())

    );

  return (

    <div className="pickup-page">

      {/* ================= HERO ================= */}

      <div className="pickup-hero">

        <div>

          <h1>
            🚛 Pickup Agents
          </h1>

          <p>
            Manage and monitor all waste pickup
            agents working across districts.
          </p>

        </div>

        <div className="hero-circle">

          <FaRecycle />

        </div>

      </div>

      {/* ================= TOP BAR ================= */}

      <div className="pickup-topbar">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search by name or district..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="agent-count">

          Total Agents:
          {" "}
          <span>
            {filteredAgents.length}
          </span>

        </div>

      </div>

      {/* ================= GRID ================= */}

      <div className="pickup-grid">

        {
          filteredAgents.length === 0 ? (

            <div className="empty-box">

              No Agents Found

            </div>

          ) : (

            filteredAgents.map((agent) => (

              <div
                className="pickup-card"
                key={agent._id}
              >

                {/* TOP */}

                <div className="card-top">

                  <div className="profile-circle">

                    <FaUserTie />

                  </div>

                  <div>

                    <h2>
                      {agent.name}
                    </h2>

                    <span className="active-badge">

                      Active Agent

                    </span>

                  </div>

                </div>

                {/* DETAILS */}

                <div className="agent-details">

                  <p>

                    <FaEnvelope />

                    {agent.email}

                  </p>

                  <p>

                    <FaPhoneAlt />

                    {agent.phone}

                  </p>

                  <p>

                    <FaMapMarkerAlt />

                    {agent.district}

                  </p>

                  <p>

                    <FaIdCard />

                    {agent.idNumber}

                  </p>

                </div>

                {/* ADDRESS */}

                <div className="address-box">

                  <h4>
                    📍 Address
                  </h4>

                  <p>
                    {agent.address}
                  </p>

                </div>

              </div>

            ))

          )
        }

      </div>

    </div>

  );
}

export default PickupAgents;
