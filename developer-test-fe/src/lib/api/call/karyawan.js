import API from "../index";

export const createKaryawan = async (karyawan) => {
    try {
      const response = await API.post('/karyawan', karyawan);
      return response.data;
    } catch (error) {
      console.error('Error creating karyawan:', error);
    }
  };

  export const getKaryawan = async () => {
    try {
      const response = await API.get('/karyawan');
      return response.data;
    } catch (error) {
      console.error('Error fetching karyawan:', error);
    }
  };
  export const getKaryawanById = async (id) => {
    try {
      const response = await API.get(`/karyawan/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching karyawan:', error);
    }
  };

  export const deleteKaryawan = async (id) => {
    try {
      await API.delete(`/karyawan/${id}`);
    } catch (error) {
      console.error('Error deleting karyawan:', error);
    }
  };

  export const updateKaryawan = async (id, data) => {
    try {
      const response = await API.put(`/karyawan/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };