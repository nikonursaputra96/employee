// departmentController.js
const departmentService = require('../services/departmentService');

const getAllDepartments = async (req, res, next) => {
  try {
    const departments = await departmentService.getAllDepartments();
    res.status(200).json(departments);
  } catch (error) {
    next(error);
  }
};

const getDepartmentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const department = await departmentService.getDepartmentById(id);
    res.status(200).json(department);
  } catch (error) {
    next(error);
  }
};

const createDepartment = async (req, res) => {
  try {
    const data = req.body;
    const newDepartment = await departmentService.createDepartment(data);
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDepartment = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedDepartment = await departmentService.updateDepartment(id, data);
    res.status(200).json(updatedDepartment);
  } catch (error) {
    next(error);
  }
};

const deleteDepartment = async (req, res, next) => {
  const { id } = req.params;
  try {
    await departmentService.deleteDepartment(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
