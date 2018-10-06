// production keys
// keys shold be saved in the environment NOT in this file
const keys = {
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleProjectId: process.env.GOOGLE_PROJECT_ID,
  gcsBucketName: process.env.GCS_BUCKET_NAME,
  facebookClientId: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  discordClientId: process.env.DISCORD_CLIENT_ID,
  discordClientSecret: process.env.DISCORD_CLIENT_SECRET,
  dbString: process.env.DB_STRING,
  cookieKey: process.env.COOKIE_KEY
};

module.exports = keys;
