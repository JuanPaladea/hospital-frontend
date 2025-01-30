import api from "./axiosConfig"

export const getBills = async (page: string, limit: string) => {
  const response = await api.get("/bills", {
    params: {
      page,
      limit
    }
  })
  return response.data
}

export const getBillById = async (id: string) => {
  const response = await api.get(`/bills/${id}`)
  return response.data
}

export const getBillsByPatientId = async (patientId: string) => {
  const response = await api.get(`/bills/patient/${patientId}`)
  return response.data
}

export const getBillsByPatientDni = async (dni: string) => {
  const response = await api.get(`/bills/patient/dni/${dni}`)
  return response.data
}

export const createBill = async (data: any) => {
  const response = await api.post("/bills", data)
  return response.data
}

export const updateBill = async (id: string, data: any) => {
  const response = await api.put(`/bills/${id}`, data)
  return response.data
}

export const deleteBill = async (id: string) => {
  const response = await api.delete(`/bills/${id}`)
  return response.data
}

export const uploadPayment = async (id: string, data: any) => {
  const formData = new FormData()
  formData.append("payment", data)
  const response = await api.post(`/bills/${id}/upload-payment`, formData)
  return response.data
}