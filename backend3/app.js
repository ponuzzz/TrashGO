// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const path = require('path');
// const announcementRoutes = require("./routes/announcementRoutes");


// const connectDB = require("./Config/db")

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/waste", require("./routes/wasteRoutes"));


// app.use("/api/complaints", require("./routes/complaintRoutes"));

// app.use("/api/price", require("./routes/priceRoutes"));
// app.use("/uploads", express.static("uploads"));


// app.use("/api/announcements", require("./routes/announcementRoutes"));

// app.use("/api/agent", require("./routes/agentRoutes"));
// //images
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));

// //dashboard
// // app.use("/api/dashboard", require("./routes/dashboardRoutes"));
// app.use("/api/admin", require("./routes/dashboardRoutes"));

// // Test
// app.get("/", (req, res) => {
//   res.send("API Running...");
// });

// app.use("/api/announcements", announcementRoutes);


// app.listen(process.env.PORT, () =>
//   console.log(`Server running on ${process.env.PORT}`)
// );

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

const connectDB =
require("./Config/db");

dotenv.config();

connectDB();

const app = express();

// MIDDLEWARE
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

// STATIC
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

// ROUTES
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/waste",
  require("./routes/wasteRoutes")
);

app.use(
  "/api/complaints",
  require("./routes/complaintRoutes")
);

app.use(
  "/api/price",
  require("./routes/priceRoutes")
);

app.use(
  "/api/announcements",
  require("./routes/announcementRoutes")
);

app.use(
  "/api/agent",
  require("./routes/agentRoutes")
);

app.use(
  "/api/admin",
  require("./routes/adminRoutes")
);

// app.use(
//   "/api/dashboard",
//   require("./routes/dashboardRoutes")
// );

app.use(
  "/api/admin",
  require("./routes/dashboardRoutes")
);

// TEST
app.get("/", (req, res) => {
  res.send("API Running...");
});

// agent
app.use(
  "/api/agent",
  require("./routes/agentRoutes")
);

// START
app.listen(process.env.PORT, () => {
  console.log(
    `Server running on ${process.env.PORT}`
  );
});
