
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  barColor?: string;
  title?: string;
  height?: number;
}

const BarChart = ({ 
  data, 
  dataKey, 
  xAxisKey = 'name', 
  barColor = '#4BEED1',
  title,
  height = 300
}: BarChartProps) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
      {title && <h3 className="font-medium mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false} 
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Bar dataKey={dataKey} fill={barColor} radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
