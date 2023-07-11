import { FC } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type PieChartDataType = { name: string; value: number; color: string };
export interface PieChartProps {
  data: PieChartDataType[];
  width?: number;
  height?: number;
}
const CustomPieChart: FC<PieChartProps> = ({
  data,
  width = 730,
  height = 250,
}) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name">
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
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
