const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ok from product path')
});

router.get('/shoes', (req, res) => {
    res.send('ok from shoes path')
});

router.get('/trousers', (req, res) => {
    res.send('ok from trousers path')
});

router.get('/watch', (req, res) => {
    res.send('ok from watch path')
});


module.exports = router;