const express = require("express");

const cors = require("cors");
const { transport } = require("./mailer/mailer");
const { GOOGLE_CRED } = require("./utils/variables");
const { createTemplate } = require("./utils/helper");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Node mailer app");
});

app.post("/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const htmlTemplate = createTemplate(
    "../templates/email/template-email.html",
    {
      message,
      name,
      email,
    }
  );

  const messageInfo = {
    to: "edwardvincentcuevas7@gmail.com",
    from: `Portfolio Support Team <noreply.${GOOGLE_CRED.user}>`,
    subject: subject,
    html: htmlTemplate,
  };

  transport.sendMail(messageInfo, (err, data) => {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .send({ message: "Email not sent due to an error." });
    }

    return res.status(200).send({ message: "Email sent successfully." });
  });
});

app.listen(PORT, () => {
  console.log(`Server is up in PORT: ${PORT}`);
});
