import Event from "../models/event.model";

export const getAllEvents = async (req, res) => {
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
      order: [["startTime", "ASC"]],
    });
    res
      .status(200)
      .json({ success: true, message: "Fetched all events", data: events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findByPK(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.destroy();
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const event = await Event.findByPK(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.update(updatedData);
    res.json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
