export default function OptimizationChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const before = [105, 112, 118, 124, 130, 138];
  const after = [105, 95, 82, 74, 68, 63];
  const max = 160;
  const chartH = 200;
  const chartW = 480;
  const padL = 4;
  const padR = 4;
  const usableW = chartW - padL - padR;

  function toX(i: number) {
    return padL + (i / (months.length - 1)) * usableW;
  }
  function toY(val: number) {
    return chartH - (val / max) * chartH;
  }

  function buildPath(data: number[]) {
    return data.map((val, i) => `${i === 0 ? "M" : "L"}${toX(i)},${toY(val)}`).join(" ");
  }

  function buildAreaPath(data: number[]) {
    const linePath = buildPath(data);
    return `${linePath} L${toX(data.length - 1)},${chartH} L${toX(0)},${chartH} Z`;
  }

  const savings = before[before.length - 1] - after[after.length - 1];
  const savingsPct = Math.round((savings / before[before.length - 1]) * 100);

  return (
    <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-sm">After Tokenlytics Optimization</h3>
          <p className="text-muted text-xs mt-0.5">Projected vs. optimized token spend</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span className="text-emerald-600 text-xs font-semibold">{savingsPct}% saved</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${chartW} ${chartH + 40}`} className="w-full" role="img" aria-label="Line chart comparing projected token spend of $138K versus optimized spend of $63K after using Tokenlytics">
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

        {/* "Before" area (projected) — red */}
        <path
          d={buildAreaPath(before)}
          fill="rgba(239, 68, 68, 0.06)"
        />
        <path
          d={buildPath(before)}
          fill="none"
          stroke="#ef4444"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
        />

        {/* "After" area (optimized) — green */}
        <path
          d={buildAreaPath(after)}
          fill="rgba(16, 185, 129, 0.08)"
        />
        <path
          d={buildPath(after)}
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Savings annotation arrow */}
        <line
          x1={toX(5) + 16}
          y1={toY(before[5])}
          x2={toX(5) + 16}
          y2={toY(after[5])}
          stroke="#4f46e5"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <text
          x={toX(5) + 28}
          y={(toY(before[5]) + toY(after[5])) / 2 + 4}
          fontSize="11"
          fontWeight="700"
          fill="#4f46e5"
        >
          -${savings}K/mo
        </text>

        {/* Data point dots — before */}
        {before.map((val, i) => (
          <circle key={`b${i}`} cx={toX(i)} cy={toY(val)} r="3.5" fill="#fff" stroke="#ef4444" strokeWidth="2" />
        ))}

        {/* Data point dots — after */}
        {after.map((val, i) => (
          <circle key={`a${i}`} cx={toX(i)} cy={toY(val)} r="3.5" fill="#fff" stroke="#10b981" strokeWidth="2" />
        ))}

        {/* End labels */}
        <text x={toX(5) - 4} y={toY(before[5]) - 10} textAnchor="end" fontSize="10" fontWeight="600" fill="#ef4444">
          ${before[5]}K projected
        </text>
        <text x={toX(5) - 4} y={toY(after[5]) + 16} textAnchor="end" fontSize="10" fontWeight="600" fill="#10b981">
          ${after[5]}K optimized
        </text>

        {/* Month labels */}
        {months.map((m, i) => (
          <text key={m} x={toX(i)} y={chartH + 18} textAnchor="middle" fontSize="11" className="fill-muted">
            {m}
          </text>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-red-400 rounded" style={{ borderTop: "2px dashed #ef4444" }} />
          <span className="text-xs text-muted">Projected spend</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-emerald-500 rounded" />
          <span className="text-xs text-muted">With Tokenlytics</span>
        </div>
      </div>
    </div>
  );
}
