const express = require("express");
const {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");
const router = express.Router();

router.get("/get-events", getAllEvents);
router.post("/create-event", createEvent);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);

module.exports = router;
