
const { Department } = require('../models');

const getAllDepartments = async () => {
  return await Department.findAll();
};

const getDepartmentById = async (id) => {
  return await Department.findByPk(id);
};

const createDepartment = async (data) => {
  return await Department.create(data);
};

const updateDepartment = async (id, data) => {
  const department = await Department.findByPk(id);
  if (!department) {
    throw new Error('Department not found!');
  }

  return await department.update(data);
};

const deleteDepartment = async (id) => {
  const department = await Department.findByPk(id);
  if (!department) {
    throw new Error('Department not found!');
  }

  await department.destroy();
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
