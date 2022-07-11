const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

const createTemplate = (file_path, replacements) => {
  if (typeof replacements !== "object") {
    throw new Error("Replacements must be a object.");
  }

  const filePath = path.join(__dirname, file_path);
  const source = fs.readFileSync(filePath, "utf8").toString();
  const template = handlebars.compile(source);
  return template(replacements);
};

module.exports = { createTemplate };
