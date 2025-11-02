export const getEventById = async (endpoint = "", fetchData) => {
  try {
    const result = await fetchData(endpoint, "GET");
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getAllEvents = async (endpoint = "", fetchData) => {
  try {
    const result = await fetchData(endpoint, "GET");
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const createEvent = async (endpoint = "", fetchData, body = null) => {
  try {
    const result = await fetchData(endpoint, "POST", body);
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const updateEvent = async (endpoint = "", fetchData, body = null) => {
  try {
    const result = await fetchData(endpoint, "PUT", body);
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const deleteEvent = async (endpoint = "", fetchData) => {
  try {
    const result = await fetchData(endpoint, "DELETE");
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
