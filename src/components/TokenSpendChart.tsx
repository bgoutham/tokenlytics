export default function TokenSpendChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const values = [42, 58, 65, 78, 92, 105];
  const max = 120;
  const chartH = 200;
  const chartW = 480;
  const barW = 40;
  const gap = (chartW - barW * months.length) / (months.length + 1);

  return (
    <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-sm">Total Token Spend</h3>
          <p className="text-muted text-xs mt-0.5">Monthly cost across all models</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-2.5 py-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          <span className="text-red-600 text-xs font-semibold">+150%</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${chartW} ${chartH + 40}`} className="w-full" role="img" aria-label="Bar chart showing rising monthly token spend from $42K to $105K over 6 months">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <g key={pct}>
            <line
              x1={0}
              y1={chartH - pct * chartH}
              x2={chartW}
              y2={chartH - pct * chartH}
              stroke="#e2e8f0"
              strokeWidth="1"
              strokeDasharray={pct === 0 ? "0" : "4 4"}
            />
            <text
              x={chartW + 2}
              y={chartH - pct * chartH + 4}
              className="fill-muted"
              fontSize="9"
              textAnchor="end"
            >
              ${Math.round(pct * max)}K
            </text>
          </g>
        ))}

        {/* Bars */}
        {values.map((val, i) => {
          const x = gap + i * (barW + gap);
          const barH = (val / max) * chartH;
          const intensity = 0.4 + (i / (values.length - 1)) * 0.6;

          return (
            <g key={months[i]}>
              <rect
                x={x}
                y={chartH - barH}
                width={barW}
                height={barH}
                rx={4}
                fill={`rgba(79, 70, 229, ${intensity})`}
              />
              {/* Value label */}
              <text
                x={x + barW / 2}
                y={chartH - barH - 6}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                className="fill-foreground"
              >
                ${val}K
              </text>
              {/* Month label */}
              <text
                x={x + barW / 2}
                y={chartH + 18}
                textAnchor="middle"
                fontSize="11"
                className="fill-muted"
              >
                {months[i]}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="text-muted text-xs mt-4 text-center">Without visibility, token costs grow unchecked quarter over quarter.</p>
    </div>
  );
}
