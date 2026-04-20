import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { month: 'Jan', apiCalls: 1000, successRate: 650 },
  { month: 'Feb', apiCalls: 850, successRate: 720 },
  { month: 'Mar', apiCalls: 600, successRate: 900 },
  { month: 'Apr', apiCalls: 650, successRate: 950 },
  { month: 'May', apiCalls: 820, successRate: 800 },
  { month: 'Jun', apiCalls: 910, successRate: 520 },
  { month: 'Jul', apiCalls: 750, successRate: 480 },
  { month: 'Aug', apiCalls: 650, successRate: 600 },
  { month: 'Sept', apiCalls: 720, successRate: 850 },
  { month: 'Oct', apiCalls: 750, successRate: 880 },
  { month: 'Nov', apiCalls: 1100, successRate: 800 },
  { month: 'Dec', apiCalls: 1050, successRate: 820 },
];

export default function MetricsChart() {
  return (
    <div className="bg-white rounded-xl p-4 w-full border border-[#E4E7EC]">
      <h3 className="text-base font-bold pb-4">
        Verification Metrics - Last one year
      </h3>

      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorApi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FDB022" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#FDB022" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#49B0C9" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#49B0C9" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#363635', fontSize: 10 }} 
            dy={15}
          />
          
                      <YAxis 
                          domain={[0, 1200]}
                          ticks={[100, 300, 500, 700, 900, 1100]}
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#363635', fontSize: 10 }}
            tickFormatter={(value) => value >= 1000 ? `${(value/1000).toFixed(2)}m` : `${value}k`}
          />

          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-bold relative">
                    {payload[0].value} %
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                  </div>
                );
              }
              return null;
            }}
          />

          <Area
            type="monotone"
            dataKey="apiCalls"
            stroke="#FDB022"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorApi)"
          />

          <Area
            type="monotone"
            dataKey="successRate"
            stroke="#49B0C9"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorSuccess)"
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>

      <div className="flex gap-4 pt-7.25 pl-12">
        <div className="flex items-center gap-3.25 text-[#46446A] text-sm ">
          <span className="w-3 h-3 bg-[#FFC222] rounded-[2.91px]"></span>
          API Calls
        </div>
        <div className="flex items-center gap-3.25 text-[#46446A] text-sm">
          <span className="w-3 h-3 bg-[#48B0C9] rounded-[2.91px]"></span>
          Success Rate
        </div>
      </div>
    </div>
  );
}