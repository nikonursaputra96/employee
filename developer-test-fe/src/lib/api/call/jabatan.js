import API from "../index";

export const createJabatan = async (jabatan) => {
    try {
      const response = await API.post('/jabatan', jabatan);
      return response.data;
    } catch (error) {
      console.error('Error creating jabatan:', error);
    }
  };

  export const getJabatanByDepartment = async (departmentId) => {
    try {
      const response = await API.get(`/jabatan/${departmentId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching jabatans:', error);
    }
  };

  export const deleteKaryawan = async (id) => {
    try {
      await API.delete(`/jabatan/${id}`);
    } catch (error) {
      console.error('Error deleting jabatan:', error);
    }
  };