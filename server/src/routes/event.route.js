const express = require("express");
const {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} = require("../controllers/event.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/:id", getEventById);
router.get("/", getAllEvents);
router.post("/", createEvent);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

module.exports = router;
