import { FC } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const renderTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #999',
          margin: 0,
          padding: 10,
        }}
      >
        <p>{`${data.month} : ${data.value}건`}</p>
      </div>
    );
  }
  return null;
};

type BubbleChartDataType = { month: string; index: number; value: number };

export interface BubbleChartProps {
  data: BubbleChartDataType[];
}
const BubbleChart: FC<BubbleChartProps> = ({ data = [] }) => {
  const parseDomain = () => [0, Math.max(...data.map((entry) => entry.value))];
  const domain = parseDomain();
  return (
    <ResponsiveContainer width="100%" height={60}>
      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          left: 0,
        }}
      >
        <XAxis
          dataKey="month"
          name="month"
          interval={0}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <ZAxis
          type="number"
          dataKey="value"
          domain={domain}
          range={[16, 225]}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleChart;
