import api from "./axiosConfig"

export const fetchPatients = async (page: string, limit: string) => {
  const response = await api.get("/patients", {
    params: {
      page,
      limit
    }
  })
  return response.data
}

export const fetchPatient = async (id: string) => {
  const response = await api.get(`/patients/${id}`)
  return response.data
}

export const createPatient = async (data: any) => {
  const response = await api.post("/patients", data)
  return response.data
}

export const updatePatient = async (id: string, data: any) => {
  const response = await api.put(`/patients/${id}`, data)
  return response.data
}

export const deletePatient = async (id: string) => {
  const response = await api.delete(`/patients/${id}`)
  return response.data
}