import api from "./axiosConfig"

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/session/login", { email, password })
    console.log(response.data)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Login failed"
  }
}

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post("/session/register", { username, email, password })
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Registration failed"
  }
}

export const logOut = async () => {
  try {
    const response = await api.delete("session//logout")
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Logout failed"
  }
}