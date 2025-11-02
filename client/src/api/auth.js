import { BASE_URL } from "./api";

export const handleAdminLogin = async ({ name, email }) => {
  try {
    if (!name || !email)
      return { success: false, message: "Fields are required" };
    const response = await fetch(`${BASE_URL}/admin/login`, {
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
    localStorage.setItem("token", data.token);

    return data;
  } catch (error) {}
};
