const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('auth route')
});

module.exports = router;