const express = require('express')
const router = express.Router();
const path = require('path');

const docPath = path.resolve(__dirname, '../static/doc-index.html');
// router.use('/doc', express.static(path.resolve(__dirname, '../static')));

router.get('/doc', (req, res) => {
    res.sendFile(docPath);
});

module.exports = router;
