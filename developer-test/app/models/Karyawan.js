const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Karyawan = sequelize.define('Karyawan', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_jabatan: {
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
    },
    alamat: {
      type: DataTypes.TEXT,
    },
  });

  return Karyawan;
};
