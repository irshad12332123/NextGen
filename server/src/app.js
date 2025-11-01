const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/student.route");
const eventRoutes = require("./routes/event.route");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/submit", studentRoutes);
app.use("/api/event/", eventRoutes);

module.exports = app;
