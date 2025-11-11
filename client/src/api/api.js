export const BASE_URL = "http://localhost:3000/api";

export const handleApply = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const handleFeedback = async (feedbackData) => {
  try {
    const response = 
  } catch (error) {
    return { message: `Some error occured: ${error.message}` };
  }
};
