export const useCoursesApi = (fetchData) => {
  const getCoursesBySlug = async (slug) => {
    const data = await fetchData(`/courses/${slug}`);

    if (!data?.success) {
      return {
        success: false,
        message: data?.message || "Failed to fetch courses",
      };
    }

    return {
      success: true,
      message: "Successfully retrieved courses",
      data,
    };
  };

  const getAllCourses = async () => {
    const data = await fetchData(`/courses`, "GET");

    if (!data?.success) {
      return {
        success: false,
        message: data?.message || "Failed to fetch courses",
      };
    }

    return data;
  };

  return { getCoursesBySlug, getAllCourses };
};
