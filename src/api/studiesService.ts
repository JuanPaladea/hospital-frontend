import api from "./axiosConfig"

export const fetchStudies = async (page: string, limit: string) => {
  try {
    const response = await api.get("/studies", {
      params: {
        page,
        limit
      }
    })
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to fetch studies"
  }
}

export const fetchStudyById = async (id: string) => {
  try {
    const response = await api.get(`/studies/${id}`)
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to fetch study by ID"
  }
}

export const fetchStudiesByPatientId = async (patientId: string) => {
  try {
    const response = await api.get(`/studies/patient/${patientId}`)
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to fetch studies by patient ID"
  }
}

export const fetchStudiesByPatientDni = async (dni: string) => {
  try {
    const response = await api.get(`/studies/patient/dni/${dni}`)
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to fetch studies by patient DNI"
  }
}

export const createStudy = async (data: any) => {
  try {
    const response = await api.post("/studies", data)
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to create study"
  }
}

export const updateStudy = async (id: string, data: any) => {
  try {
    const response = await api.put(`/studies/${id}`, data)
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to update study"
  }
}

export const deleteStudy = async (id: string) => {
  try {
    const response = await api.delete(`/studies/${id}`)
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to delete study"
  }
}

export const uploadResult = async (id: string, file: File) => {
  try {
    const formData = new FormData()
    formData.append("result", file)
    const response = await api.post(`/studies/${id}/upload-result`, formData)
    return response.data
  } catch (error: any) {
    return error.response?.data?.message || "Failed to upload result"
  }
}
