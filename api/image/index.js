// @ts-check
const buffer = require("buffer");
const renderError = require("../../render/error");

module.exports = async (req, res) => {
  const b64String = req.query.base64 || "";
  let decode = Buffer.from(b64String, "base64");

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Length", decode.length);
  res.send(decode);
};
