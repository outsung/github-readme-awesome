// @ts-check
const buffer = require("buffer");
const renderError = require("../../render/error");
const QRCode = require("qrcode");

const handler = async (req, res) => {
  const url = req.query.url || "";
  const isDownload = req.query.isDownload || false;

  let decode = Buffer.from(
    (await QRCode.toDataURL(decodeURIComponent(url))).split(",")[1],
    "base64"
  );
  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Length", decode.length);
  isDownload && res.setHeader("Content-Disposition", "attachment");
  res.res.send(decode);
};

module.exports = handler;
