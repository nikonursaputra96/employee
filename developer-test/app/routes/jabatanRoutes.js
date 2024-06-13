const express = require('express');
const router = express.Router();
const jabatanController = require('../controllers/jabatanController');

router.get('/jabatan', jabatanController.getAllJabatan);
router.get('/jabatan/:id_department', jabatanController.getJabatanById);
router.post('/jabatan', jabatanController.createJabatan);
router.put('/jabatan/:id', jabatanController.updateJabatan);
router.delete('/jabatan/:id', jabatanController.deleteJabatan);

module.exports = router;
