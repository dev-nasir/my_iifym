
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HorizontalBarChartProps {
  data: any[];
  dataKey: string;
  nameKey?: string;
  barColor?: string;
  title?: string;
  height?: number;
}

const HorizontalBarChart = ({
  data,
  dataKey,
  nameKey = 'name',
  barColor = '#4BEED1',
  title,
  height = 300
}: HorizontalBarChartProps) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
      {title && <h3 className="font-medium mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 60, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis 
            dataKey={nameKey} 
            type="category" 
            axisLine={false} 
            tickLine={false}
            width={100}
            tick={{ fontSize: 12 }} 
          />
          <Tooltip />
          <Bar dataKey={dataKey} fill={barColor} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBarChart;
