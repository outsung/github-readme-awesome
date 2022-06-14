// // @ts-check
function notionCalendarSum({ icon, text, time }) {
  const title = "일대기:시계";
  const desc = "해당 이벤트를 몇시간 동안 했는지 표시함";

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
        <svg x="16" y="12">
          <text class="stat" x="0" y="14">
            ${icon} ${text} ${time}시간
          </text>
        </svg>
      </g>
    </svg>
  `;
}

module.exports = notionCalendarSum;
