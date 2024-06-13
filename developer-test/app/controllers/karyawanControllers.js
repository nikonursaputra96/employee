const karyawanService = require('../services/karyawanServices');

const getAllKaryawan = async (req, res, next) => {
  try {
    const karyawan = await karyawanService.getAllKaryawan();
    res.status(200).json(karyawan);
  } catch (error) {
    next(error);
  }
};

const getKaryawanById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const karyawan = await karyawanService.getKaryawanById(id);
    res.status(200).json(karyawan);
  } catch (error) {
    next(error);
  }
};

const createKaryawan = async (req, res) => {
  try {
    const data = req.body;
    const newKaryawan = await karyawanService.createKaryawan(data);
    res.status(201).json(newKaryawan);
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
};

const updateKaryawan = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedKaryawan = await karyawanService.updateKaryawan(id, data);
    res.status(200).json(updatedKaryawan);
  } catch (error) {
    next(error);
  }
};

const deleteKaryawan = async (req, res, next) => {
  const { id } = req.params;
  try {
    await karyawanService.deleteKaryawan(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllKaryawan,
  getKaryawanById,
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
};
