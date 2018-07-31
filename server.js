const express = require('express');

const app = express();

// routes
app.get('/api/cats', (req, res) => {
  cats = ['toan'];
  res.send(cats);
});

const port = 5000;
app.listen(port, () => {
  console.log('server started on port' + port);
});
