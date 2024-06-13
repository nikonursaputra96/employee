import API from "../index";

export const getDepartments = async () => {
    try {
      const response = await API.get('/department');
      return response.data;
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  export const createDepartment = async (department) => {
    try {
      const response = await API.post('/department', department);
      return response.data;
    } catch (error) {
      console.error('Error creating department:', error);
    }
  };

  export const deletedDepartment = async (id) => {
    try {
      await API.delete(`/department/${id}`);
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };