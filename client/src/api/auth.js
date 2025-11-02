import { BASE_URL } from "./api";

export const handleAdminLogin = async (formData) => {
  try {
    if (!formData) return { success: false, message: "Fields are required" };
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    throw new Error("Could not verify");
  }
};

export const handleAdminLogOut = async () => {
  localStorage.removeItem("token");
};
