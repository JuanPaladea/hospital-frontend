import api from "./axiosConfig"

export const fetchBills = async (page: string, limit: string) => {
  try {
    const response = await api.get("/bills", {
      params: {
        page,
        limit
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error fetching bills"
  }
}

export const fetchBillById = async (id: string) => {
  try {
    const response = await api.get(`/bills/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error fetching bill by ID"
  }
}

export const fetchBillsByPatientId = async (patientId: string) => {
  try {
    const response = await api.get(`/bills/patient/${patientId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error fetching bills by patient ID"
  }
}

export const fetchBillsByPatientDni = async (dni: string) => {
  try {
    const response = await api.get(`/bills/patient/dni/${dni}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error fetching bills by patient DNI"
  }
}

export const createBill = async (data: any) => {
  try {
    const response = await api.post("/bills", data)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error creating bill"
  }
}

export const updateBill = async (id: string, data: any) => {
  try {
    const response = await api.put(`/bills/${id}`, data)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error updating bill"
  }
}

export const deleteBill = async (id: string) => {
  try {
    const response = await api.delete(`/bills/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data?.message || "Error deleting bill"
  }
}

export const uploadPayment = async (id: string, data: any) => {
  try {
    const formData = new FormData()
    formData.append("payment", data)
    const response = await api.post(`/bills/${id}/upload-payment`, formData)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message)
  }
}