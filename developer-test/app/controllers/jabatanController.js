
const jabatanService = require('../services/jabatanService');

const getAllJabatan = async (req, res, next) => {
  try {
    const jabatan = await jabatanService.getAllJabatan();
    res.status(200).json(jabatan);
  } catch (error) {
    next(error);
  }
};

const getJabatanById = async (req, res, next) => {
  const { id_department } = req.params;
  try {
    const jabatan = await jabatanService.getJabatanById(id_department);
    res.status(200).json(jabatan);
  } catch (error) {
    next(error);
  }
};

const createJabatan = async (req, res, next) => {
  const data = req.body;
  try {
    const newJabatan = await jabatanService.createJabatan(data);
    res.status(201).json(newJabatan);
  } catch (error) {
    next(error);
  }
};

const updateJabatan = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedJabatan = await jabatanService.updateJabatan(id, data);
    res.status(200).json(updatedJabatan);
  } catch (error) {
    next(error);
  }
};

const deleteJabatan = async (req, res, next) => {
  const { id } = req.params;
  try {
    await jabatanService.deleteJabatan(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllJabatan,
  getJabatanById,
  createJabatan,
  updateJabatan,
  deleteJabatan,
};
