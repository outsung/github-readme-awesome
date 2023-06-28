// @ts-check
const buffer = require("buffer");
const renderError = require("../../render/error");
const QRCode = require("qrcode");

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = async (req, res) => {
  const url = req.query.url || "";

  let decode = Buffer.from(
    (await QRCode.toDataURL(decodeURIComponent(url))).split(",")[1],
    "base64"
  );
  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Length", decode.length);
  res.send(decode);
};

module.exports = allowCors(handler);
