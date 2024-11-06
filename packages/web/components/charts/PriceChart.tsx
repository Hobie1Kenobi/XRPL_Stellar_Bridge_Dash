import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface PriceChartProps {
  data: Array<{
    timestamp: string;
    price: number;
  }>;
}

export const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  return (
    <div className="card h-96">
      <h3 className="text-xl font-bold mb-4">Price Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff88" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00ff88" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#00ff88"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
