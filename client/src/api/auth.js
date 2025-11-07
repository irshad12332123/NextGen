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

    return data;
  } catch (error) {
    throw new Error("Could not verify");
  }
};

export const handleAdminRegister = async (formData) => {
  try {
    if (!formData) return { success: false, message: "Fields are required" };
    const { id, password } = formData;
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, password }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Could not Register", error?.message);
  }
};

export const handleAdminLogOut = async () => {
  localStorage.removeItem("token");
};
