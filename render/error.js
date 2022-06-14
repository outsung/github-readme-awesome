// // @ts-check
function error() {
  const width = 313;
  const height = 58;
  const title = "일대기:시계";
  const desc = "현재 시각을 나타낸다.";

  const date = new Date();
  const time =
    date.getFullYear() +
    "년 " +
    date.getMonth() +
    "월 " +
    date.getDate() +
    "일";

  const bgColor = "#fffefe";
  const borderColor = "#e4e2e2";
  const textColor = "#434d58";

  const borderRadius = 4.5;

  return `
  <svg
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="descId"
    >
      <title id="titleId">${title}</title>
      <desc id="descId">${desc}</desc>
      <rect
        data-testid="card-bg"
        x="0.5"
        y="0.5"
        rx="${borderRadius}"
        height="99%"
        stroke="${borderColor}"
        width="${width - 1}"
        stroke-opacity="1"
      />

      <g>
        <svg x="0" y="0">
          <text x="16" y="12">
            ${time}
          </text>
        </svg>
      </g>
    </svg>
  `;
}

module.exports = error;
