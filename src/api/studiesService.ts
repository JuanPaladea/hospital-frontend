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
  const response = await api.get(`/studies/${id}`)
  return response.data
}

export const fetchStudiesByPatientId = async (patientId: string) => {
  const response = await api.get(`/studies/patient/${patientId}`)
  return response.data
}

export const fetchStudiesByPatientDni = async (dni: string) => {
  const response = await api.get(`/studies/patient/dni/${dni}`)
  return response.data
}

export const createStudy = async (data: any) => {
  const response = await api.post("/studies", data)
  return response.data
}

export const updateStudy = async (id: string, data: any) => {
  const response = await api.put(`/studies/${id}`, data)
  return response.data
}

export const deleteStudy = async (id: string) => {
  const response = await api.delete(`/studies/${id}`)
  return response.data
}

export const uploadResult = async (id: string, file: File) => {
  const formData = new FormData()
  formData.append("result", file)
  const response = await api.post(`/studies/${id}/upload-result`, formData)
  return response.data
}
