// production keys
// keys shold be saved in the environment NOT in this file
const keys = {
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  facebookClientId: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  dbString: process.env.DB_STRING,
  cookieKey: process.env.COOKIE_KEY
};

module.exports = keys;
