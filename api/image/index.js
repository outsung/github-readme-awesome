// @ts-check
const buffer = require("buffer");
const renderError = require("../../render/error");
const QRCode = require("qrcode");

module.exports = async (req, res) => {
  const url = req.query.url || "";

  let decode = Buffer.from(
    (await QRCode.toDataURL(decodeURIComponent(url))).split(",")[1],
    "base64"
  );
  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Length", decode.length);
  res.send(decode);
};
