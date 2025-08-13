// components/ResultsCharts.tsx
"use client";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import NetworkGraph from "@/components/charts/NetworkGraph";

const HEX = [
  "#8b5cf6",
  "#22d3ee",
  "#f59e0b",
  "#ef4444",
  "#10b981",
  "#3b82f6",
  "#a78bfa",
  "#f472b6",
];
const withA = (hex: string, a = 0.35) =>
  `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(
    hex.slice(3, 5),
    16
  )},${parseInt(hex.slice(5, 7), 16)},${a})`;

const pieData = {
  labels: ["긍정", "중립", "부정"],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: [
        withA(HEX[0], 0.85),
        withA(HEX[1], 0.85),
        withA(HEX[2], 0.85),
      ],
      borderColor: [HEX[0], HEX[1], HEX[2]],
      borderWidth: 2,
      hoverOffset: 8,
      offset: 4,
    },
  ],
};

const lineData = {
  labels: ["이재명", "대통령", "사실", "의견", "편향"],
  datasets: [
    {
      label: "연관도",
      data: [12, 19, 3, 5, 2],
      borderColor: HEX[0],
      backgroundColor: withA(HEX[0], 0.25),
      fill: true,
      tension: 0.35,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: "#0b1220",
      pointBorderColor: HEX[0],
      borderWidth: 2,
    },
  ],
};

const barData = {
  labels: ["이재명", "대통령", "검증", "사실", "보도"],
  datasets: [
    {
      label: "빈도",
      data: [30, 22, 18, 17, 9],
      backgroundColor: HEX.slice(0, 5).map((h) => withA(h, 0.7)),
      borderColor: HEX.slice(0, 5),
      borderWidth: 1.5,
      borderRadius: 8,
      barPercentage: 0.65,
      categoryPercentage: 0.6,
    },
  ],
};

const graphNodes = [
  { id: 1, label: "이재명", value: 30, color: "#8b5cf6" },
  { id: 2, label: "대통령", value: 24, color: "#22d3ee" },
  { id: 3, label: "사실", value: 18, color: "#f59e0b" },
  { id: 4, label: "의견", value: 12, color: "#f472b6" },
  { id: 5, label: "편향", value: 10, color: "#10b981" },
];

const graphEdges = [
  { from: 1, to: 2, value: 5 },
  { from: 1, to: 3, value: 3 },
  { from: 2, to: 3, value: 2 },
  { from: 3, to: 4, value: 2 },
  { from: 4, to: 5, value: 1 },
];

const commonOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top", labels: { boxWidth: 12 } },
    tooltip: {
      backgroundColor: "#0f1117",
      borderColor: "#312e81",
      borderWidth: 1,
      titleColor: "#fff",
      bodyColor: "#e5e7eb",
    },
  },
  scales: {
    x: { grid: { color: "rgba(255,255,255,.06)" } },
    y: { grid: { color: "rgba(255,255,255,.06)" }, beginAtZero: true },
  },
} as const;

export default function ResultsCharts() {
  return (
    <>
      <li className="results_list03">
        <span className="results_list_tit">해당 기사의 분위기에요</span>
        <div className="chart_box chart_box03">
          <PieChart data={pieData} />
        </div>
      </li>
      <li className="results_list04">
        <span className="results_list_tit">키워드들간의 관계</span>
        <div className="chart_box chart_box04">
          <NetworkGraph nodes={graphNodes} edges={graphEdges} height={260} />
        </div>
      </li>
      <li className="results_list05">
        <span className="results_list_tit">이 키워드들이 많이 나왔어요</span>
        <div className="chart_box chart_box05">
          <BarChart data={barData} options={commonOpts} />
        </div>
      </li>
    </>
  );
}
