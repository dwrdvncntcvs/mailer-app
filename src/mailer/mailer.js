const { createTransport } = require("nodemailer");
const { google } = require("googleapis");
const { GOOGLE_CRED } = require("../utils/variables");

class Mailer {
  transport;

  constructor() {
    const OAuth2 = google.auth.OAuth2;

    const oAuth2Client = new OAuth2({
      clientId: GOOGLE_CRED.clientId,
      clientSecret: GOOGLE_CRED.clientSecret,
      redirectUri: GOOGLE_CRED.redirectUri,
    });

    oAuth2Client.setCredentials({ refresh_token: GOOGLE_CRED.refreshToken });

    const accessToken = oAuth2Client.getAccessToken();

    this.transport = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        accessToken,
        refreshToken: GOOGLE_CRED.refreshToken,
        clientId: GOOGLE_CRED.clientId,
        clientSecret: GOOGLE_CRED.clientSecret,
        user: GOOGLE_CRED.user,
        pass: GOOGLE_CRED.password,
      },
    });
  }
}

module.exports = { Mailer };
