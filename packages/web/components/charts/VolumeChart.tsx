import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface VolumeChartProps {
  data: Array<{
    timestamp: string;
    volume: number;
  }>;
}

export const VolumeChart: React.FC<VolumeChartProps> = ({ data }) => {
  return (
    <div className="card h-96">
      <h3 className="text-xl font-bold mb-4">Volume Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume" fill="#7C3AED" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
