const express = require('express');
const router = express.Router();
const karyawanController = require('../controllers/karyawanControllers');

router.get('/karyawan', karyawanController.getAllKaryawan);
router.get('/karyawan/:id', karyawanController.getKaryawanById);
router.post('/karyawan', karyawanController.createKaryawan);
router.put('/karyawan/:id', karyawanController.updateKaryawan);
router.delete('/karyawan/:id', karyawanController.deleteKaryawan);

module.exports = router;
