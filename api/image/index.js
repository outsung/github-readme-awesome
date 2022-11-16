// @ts-check
const buffer = require("buffer");
const renderError = require("../../render/error");
const LZString = require("lz-string");

module.exports = async (req, res) => {
  const b64String = req.query.base64 || "";

  let decode = Buffer.from(
    (LZString.decompressFromEncodedURIComponent(b64String) || "").split(",")[1],
    "base64"
  );
  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Length", decode.length);
  res.send(decode);
};
