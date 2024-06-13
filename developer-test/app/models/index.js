const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false,
});

const KaryawanModel = require('./Karyawan');
const JabatanModel = require('./Jabatan');
const DepartmentModel = require('./Department');

const Karyawan = KaryawanModel(sequelize, Sequelize);
const Jabatan = JabatanModel(sequelize, Sequelize);
const Department = DepartmentModel(sequelize, Sequelize);

Karyawan.belongsTo(Jabatan, { foreignKey: 'id_jabatan', as: 'jabatan' });
Jabatan.belongsTo(Department, { foreignKey: 'id_department', as: 'department' });
Department.hasMany(Jabatan, { foreignKey: 'id_department', as: 'jabatan' });

module.exports = {
  Sequelize,
  sequelize,
  Karyawan,
  Jabatan,
  Department,
};
