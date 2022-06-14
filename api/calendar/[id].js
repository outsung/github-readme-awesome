// @ts-check
const notionCalendarSum = require("../../../render/notionCalendarSum");
const renderError = require("../../../render/error");
const axios = require("axios").default;

module.exports = async (req, res) => {
  const { id } = req.query;

  const eventInfo = (
    await axios({
      method: "get",
      url: `https://notion-management.vercel.app/api/calendar/${id}`,
      headers: { "Content-Type": "application/json" },
    })
  ).data;

  res.setHeader("Content-Type", "image/svg+xml");

  try {
    // 30분 동안 캐시
    res.setHeader("Cache-Control", `public, max-age=${60}`);

    return res.send(
      notionCalendarSum({
        icon: eventInfo.icon,
        text: eventInfo.eventName,
        time: eventInfo.hours,
      })
    );
  } catch (err) {
    return res.send(renderError());
  }
};
