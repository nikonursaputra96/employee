const {Karyawan} = require('../models');
const { Jabatan } = require('../models');
const getAllKaryawan = async () => {
  try {
    const karyawanList = await Karyawan.findAll({
      include: {
        model: Jabatan,
        as: 'jabatan',
        attributes: ['nama_jabatan'],
      },
    });
    return karyawanList;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getKaryawanById = async (id) => {
  return await Karyawan.findByPk(id);
};

const createKaryawan = async (data) => {
  return await Karyawan.create(data);
};

const updateKaryawan = async (id, data) => {
  const karyawan = await Karyawan.findByPk(id);
  if (!karyawan) {
    throw new Error('Karyawan not found!');
  }

  return await karyawan.update(data);
};

const deleteKaryawan = async (id) => {
  const karyawan = await Karyawan.findByPk(id);
  if (!karyawan) {
    throw new Error('Karyawan not found!');
  }

  await karyawan.destroy();
};

module.exports = {
  getAllKaryawan,
  getKaryawanById,
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
};
