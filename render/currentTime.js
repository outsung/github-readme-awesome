// // @ts-check
function currentTime() {
  const title = "일대기:시계";
  const desc = "현재 시각을 나타낸다.";

  const date = new Date();
  const time =
    date.getFullYear() +
    "년 " +
    date.getMonth() +
    "월 " +
    date.getDate() +
    "일 " +
    date.getHours() +
    ":" +
    date.getMinutes();

  const bgColor = "#fffefe";
  const borderColor = "#e4e2e2";
  const textColor = "#434d58";

  const borderRadius = 4.5;

  const style = `
  .stat {
    font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${textColor};
  }
  `;

  return `
  <svg
      width="${"100%"}"
      height="${"100%"}"
      viewBox="0 0 ${"100%"} ${"100%"}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="descId"
    >
      <title id="titleId">${title}</title>
      <desc id="descId">${desc}</desc>
      <style>${style}</style>
      <rect
        data-testid="card-bg"
        x="0.5"
        y="0.5"
        rx="${borderRadius}"
        height="99%"
        stroke="${borderColor}"
        width="${"99%"}"
        stroke-opacity="1"
      />

      <g>
        <svg x="0" y="0">
          <text class="stat" x="16" y="12">
            ${time}
          </text>
        </svg>
      </g>
    </svg>
  `;
}

module.exports = currentTime;
