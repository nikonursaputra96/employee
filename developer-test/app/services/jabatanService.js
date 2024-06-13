
const { Jabatan } = require('../models');
const { Department } = require('../models');
const getAllJabatan = async () => {
  return await Jabatan.findAll();
};

const getJabatanById = async (id_department) => {
  return await Jabatan.findAll({
    where: { id_department },
    include: [{ model: Department, as: 'department', attributes: ['id', 'nama_department'] }] 
  });
};

const createJabatan = async (data) => {
  return await Jabatan.create(data);
};

const updateJabatan = async (id, data) => {
  const jabatan = await Jabatan.findByPk(id);
  if (!jabatan) {
    throw new Error('Jabatan not found!');
  }

  return await jabatan.update(data);
};

const deleteJabatan = async (id) => {
  const jabatan = await Jabatan.findByPk(id);
  if (!jabatan) {
    throw new Error('Jabatan not found!');
  }

  await jabatan.destroy();
};

module.exports = {
  getAllJabatan,
  getJabatanById,
  createJabatan,
  updateJabatan,
  deleteJabatan,
};
