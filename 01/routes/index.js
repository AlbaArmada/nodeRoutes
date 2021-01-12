const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok from index path')
});

router.get('/factory', (req, res) => {
  res.send('ok from factory path')
});

router.get('/employee', (req, res) => {
  res.send('ok from employee path')
});


module.exports = router;