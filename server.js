const express = require('express');
const { potentialMatches } = require('./matchingAlgorithm/dummyData');
const app = express();

// routes
app.get('/api/cats', (req, res) => {
  cats = ['toan'];
  res.send(cats);
});

app.get('/api/match/:id', (req, res) => {
  const matches = potentialMatches;
  res.send(potentialMatches);
});

// if the user's request reaches this point, it means that it is not an api call
// so they want to actually VIEW our app (react app)
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
    // send them the react bundle
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// listen to whatever port heroku serves our app on
// OR port 5000 (in dev environment)
app.listen(process.env.PORT || 5000);
