import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
type BarChartDataType = {
  name: string;
  inProgress: number;
  completed: number;
};

export interface CustomBarChartProps {
  data: BarChartDataType[];
}
const CustomBarChart: FC<CustomBarChartProps> = ({
  data,
}) => {
  return (
    <ResponsiveContainer
      minWidth={304}
      minHeight={400}
    >
      <BarChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="inProgress" stackId="a" fill="#82ca9d" />
        <Bar dataKey="completed" label="asd" stackId="a" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer >
  );
};

export default CustomBarChart;
