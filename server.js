const express = require('express');

const app = express();

// routes
app.get('/api/cats', (req, res) => {
  cats = ['toan'];
  res.send(cats);
});

// if the user's request reaches this point, it means that it is not an api call
// so they want to actually VIEW our app (react app)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    const path = require('path');
    app.use(express.static('./client/build'));
    // send them the react bundle
    res.sendFile(path.resolve(__dirname, 'client', 'build'));
  });
}

// listen to whatever port heroku serves our app on
// OR port 5000 (in dev environment)
app.listen(process.env.PORT || 5000);
