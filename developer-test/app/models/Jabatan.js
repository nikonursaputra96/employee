const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Jabatan = sequelize.define('Jabatan', {
    id_department: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nama_jabatan: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Jabatan;
};
