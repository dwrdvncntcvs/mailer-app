const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.post("/send-mail", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is up in PORT: ${PORT}`);
});
