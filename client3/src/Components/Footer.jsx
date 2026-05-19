import "./footer.css";

function Footer() {

  return (

    <footer className="footer-section">

      <div className="footer-container">

        {/* ================= LEFT ================= */}

        <div className="footer-brand">

          <div className="footer-logo-area">

            <div className="footer-main-logo">
              🌎
            </div>

            <div className="footer-small-logo">
              ⚡
            </div>

          </div>

          <h2>TrashGo</h2>

          <p>
            Building a cleaner and smarter future through
            sustainable waste management and eco-friendly solutions.
          </p>

          <div className="social-icons">

            <span>🌐</span>

            <span>📘</span>

            <span>📸</span>

            <span>▶</span>

          </div>

        </div>

        {/* ================= LINKS ================= */}

        <div className="footer-links">

          <h3>Explore</h3>

          <a href="/">Home</a>

          <a href="/about">About Us</a>

          <a href="/create">Create Request</a>

          <a href="/my">My Requests</a>

          <a href="/complaint">Complaint</a>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="footer-contact">

          <h3>Green Mission</h3>

          <p>
            Every waste request contributes to a cleaner
            environment and a greener tomorrow.
          </p>

          <div className="mission-box">

            <div className="mission-item">
              ♻ Smart Recycling
            </div>

            <div className="mission-item">
              🌱 Eco Friendly
            </div>

            <div className="mission-item">
              ⚡ Sustainable Future
            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © 2026 TrashGo Waste Management • Designed For A Cleaner Future 🌿
        </p>

      </div>

    </footer>

  );
}

export default Footer;
