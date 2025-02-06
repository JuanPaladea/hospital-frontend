import api from "./axiosConfig"

export const fetchPatients = async (page: string, limit: string) => {
  try {
    const response = await api.get("/patients", {
      params: {
        page,
        limit
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error fetching patients"
  }
}

export const fetchPatientById = async (id: string) => {
  try {
    const response = await api.get(`/patients/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || `Error fetching patient with ID ${id}`
  }
}

export const fetchPatientByDni = async (dni: string) => {
  try {
    const response = await api.get(`/patients/dni/${dni}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || `Error fetching patient with DNI ${dni}`
  }
}

export const fetchPatientDetails = async (id: string) => {
  try {
    const response = await api.get(`/patients/${id}/details`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || `Error fetching patient details for ID ${id}`
  }
}

export const createPatient = async (data: any) => {
  try {
    const response = await api.post("/patients", data)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error creating patient"
  }
}

export const updatePatient = async (id: string, data: any) => {
  try {
    const response = await api.put(`/patients/${id}`, data)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || `Error updating patient with ID ${id}`
  }
}

export const deletePatient = async (id: string) => {
  try {
    const response = await api.delete(`/patients/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || `Error deleting patient with ID ${id}`
  }
}
