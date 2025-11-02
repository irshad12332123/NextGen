const Event = require("../models/event.model");

const getEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res
      .status(200)
      .json({ success: true, message: `Event fetched`, data: event });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Some error occured ${error.message}`,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "location",
        "thumbnail",
        "start",
        "end",
      ],
      order: [["start", "ASC"]],
    });

    res
      .status(200)
      .json({ success: true, message: "Fetched all events", data: events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const { title, description, location, thumbnail, start, end } = req.body;
    console.log(req.body);
    if (!title || !description || !location || !thumbnail || !start || !end)
      return res.status(400).json({
        success: false,
        message: `Fill every field`,
      });

    const newEvent = Event.create({
      title: title,
      description: description,
      location: location,
      thumbnail: thumbnail,
      start: start,
      end: end,
    });
    if (!newEvent)
      return res
        .status(400)
        .json({ success: false, message: "Failed to create event" });

    return res
      .status(200)
      .json({ success: true, message: `Event created successfully` });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: `Some error ocurred ${error.message}` });
  }
};

const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.destroy();
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.update(updatedData);
    res.json({ success: true, message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getEventById,
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
