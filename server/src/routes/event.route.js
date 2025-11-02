const express = require("express");
const {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", getAllEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
