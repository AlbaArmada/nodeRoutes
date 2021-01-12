const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ok from user path')
});

router.get('/height', (req, res) => {
    res.send('ok from height path')
});

router.get('/age', (req, res) => {
    res.send('ok from age path')
});



module.exports = router;