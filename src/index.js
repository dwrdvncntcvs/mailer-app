const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is up in PORT: ${PORT}`);
});
