// @ts-check
const renderError = require("../../../render/error");
const { makeBadge } = require("badge-maker");

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
      makeBadge({
        label: `${eventInfo?.icon || ""} ${eventInfo?.text || ""}`,
        message: `${eventInfo?.hours || "0"} hours`,
        color: eventInfo?.color || "",
      })
    );
  } catch (err) {
    return res.send(renderError());
  }
};
