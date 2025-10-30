const express = require("express");
const studentRoutes = require("./routes/student.route");

const app = express();

app.use(express.json());

app.use("/api/students/", studentRoutes);

module.exports = app;
