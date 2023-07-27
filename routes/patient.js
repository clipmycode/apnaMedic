const express = require('express');
const router = express.Router();
const path = require('path');

const patientPath = path.resolve(__dirname, '../static/patient-index.html');
router.use('/patient', express.static(patientPath));

router.get('/patient', (req, res) => {
    res.sendFile(patientPath);
});

module.exports = router;
