import { FC } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

type HalfPieChartDataType = { name: string; value: number; color: string };
export interface HalfPieChartProps {
  data: HalfPieChartDataType[];
  width?: number;
  height?: number;
}
const HalfPieChart: FC<HalfPieChartProps> = ({
  data,
  width = 730,
  height = 250,
}) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        startAngle={180}
        endAngle={0}
      >
        {data.map((entry, index) => {
          return (
            <Cell key={`cell-${index}`} fill={entry.color}>
              {entry.name}
            </Cell>
          );
        })}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default HalfPieChart;
