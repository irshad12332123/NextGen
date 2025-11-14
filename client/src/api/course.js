import { BASE_URL } from "./api";

export const getCoursesBySlug = async (slug) => {
  try {
    const response = await fetch(`${BASE_URL}/courses/:${slug}`, {
      method: "POST",
      body: JSON.stringify({ slug }),
    });

    const data = await response.json();

    if (!data?.success)
      return {
        success: false,
        message: `Failed to fetch courses ${data?.message}`,
      };

    return {
      success: true,
      message: "succesfully retrieved courses",
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to fetch courses ${error.message}`,
    };
  }
};

export const getAllCourses = async () => {
  try {
    const response = await fetch(`${BASE_URL}/courses`, {
      method: "POST",
    });

    const data = await response.json();
  } catch (error) {
    return {
      success: false,
      message: `Failed to fetch courses ${error.message}`,
    };
  }
};
