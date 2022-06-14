// @ts-check
const renderCurrentTime = require("../render/currentTime");
const renderError = require("../render/error");

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  try {
    // 30분 동안 캐시
    res.setHeader("Cache-Control", `public, max-age=${1800}`);

    return res.send(renderCurrentTime());
  } catch (err) {
    return res.send(renderError());
  }
};
