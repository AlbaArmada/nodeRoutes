const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
res.send('ok from login path')
});

router.get('/yes', (req,res) => {
    res.send('ok from yes path')
    });
    
    router.get('/no/:message', (req,res) => {
        console.log(req.params);
        console.log(req.params.message);
        res.send('ok from no/message path')
        });
module.exports = router;