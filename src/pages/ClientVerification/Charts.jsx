import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const data = [
  { name: "Jan", api: 90000, success: 70000 },
  { name: "Feb", api: 80000, success: 72000 },
  { name: "Mar", api: 60000, success: 78000 },
  { name: "Apr", api: 65000, success: 90000 },
  { name: "May", api: 75000, success: 82000 },
  { name: "Jun", api: 70000, success: 60000 },
  { name: "Jul", api: 68000, success: 50000 },
  { name: "Aug", api: 72000, success: 52000 },
  { name: "Sep", api: 70000, success: 70000 },
  { name: "Oct", api: 65000, success: 85000 },
  { name: "Nov", api: 72000, success: 80000 },
  { name: "Dec", api: 90000, success: 82000 },
];

export default function MetricsChart() {
  return (
    <div className="bg-white rounded-xl p-4 w-full border border-[#E4E7EC]">
      <h3 className="text-sm font-semibold mb-4">
        Verification Metrics - Last one year
      </h3>

      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopOpacity={0.3} />
                <stop offset="95%" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="success"
              stroke="#22C55E"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="api"
              stroke="#FACC15"
              strokeWidth={2}
              dot={false}
            />

            <Area
              type="monotone"
              dataKey="success"
              fill="url(#colorSuccess)"
              stroke="none"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          API Calls
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Success Rate
        </div>
      </div>
    </div>
  );
}