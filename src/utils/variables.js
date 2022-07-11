// require("dotenv").config();

const GOOGLE_CRED = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
  refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  user: process.env.GOOGLE_EMAIL,
  password: process.env.GOOGLE_PASSWORD,
};

module.exports = { GOOGLE_CRED };
