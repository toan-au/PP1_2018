const fs = require('fs');
const keys = require('./keys');
process.env.DB_STRING = keys.dbString;

writeKeys = async () => {
  if (process.env.NODE_ENV === 'production') {
    const gcsKeys = {
      type: process.env.GCS_TYPE,
      project_id: process.env.GCS_PROJECT_ID,
      private_key_id: process.env.GCS_PRIVATE_KEY_ID,
      private_key: process.env.GCS_PRIVATE_KEY,
      client_email: process.env.GCS_CLIENT_EMAIL,
      client_id: process.env.GCS_CLIENT_ID,
      auth_uri: process.env.GCS_AUTH_URI,
      token_uri: process.env.GCS_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.GCS_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.GCS_CLIENT_X509_CERT_URL
    };

    await fs.writeFile(
      './config/gcs_keys.json',
      JSON.stringify(gcsKeys),
      err => {
        if (err) console.log(err);
        const f = await fs.readFile('./config/gcs_keys.json', (err, contents) => {

          console.log(contents);
        });
      }
    );
  }
};

writeKeys();
