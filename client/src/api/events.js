export const getEvents = async (
  endpoint = "",
  body = null,
  fetchData,
  refetch
) => {
  try {
    await fetchData(endpoint, "GET", body);
    refetch();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const createEvent = async (
  endpoint = "",
  body = null,
  fetchData,
  refetch
) => {
  try {
    await fetchData(endpoint, "POST", body);
    refetch();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const deleteEvent = async (
  endpoint = "",
  body = null,
  fetchData,
  refetch
) => {
  try {
    await fetchData(endpoint, "DELETE", body);
    refetch();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const updateEvent = async (
  endpoint = "",
  body = null,
  fetchData,
  refetch
) => {
  try {
    await fetchData(endpoint, "PUT", body);
    refetch();
  } catch (error) {
    return { success: false, message: error.message };
  }
};
