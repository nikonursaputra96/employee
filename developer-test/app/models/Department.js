const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define('Department', {
    nama_department: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Department;
};
