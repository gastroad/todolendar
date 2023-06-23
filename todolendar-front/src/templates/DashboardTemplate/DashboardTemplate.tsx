import { FC, useMemo } from 'react';
import SectionTitle from '@atoms/SectionTitle';
import BarChart from '@organisms/BarChart';
import HalfPieChart from '@organisms/HalfPieChart';
import BubbleChart from '@organisms/BubbleChart';
import { Todo } from '@src/types/todoList';

import "./DashboardTemplate.scss"

export interface DashboardTemplateProps {
  todos: Todo[];
}
const DashboardTemplate: FC<DashboardTemplateProps> = ({ todos }) => {
  const { halfPieChartData, barChartData, bubbleChartData } = useMemo(() => {
    const groupedData = todos.reduce(
      (groups: { [month: string]: Todo[] }, item) => {
        const monthNumber = parseInt(item.date.split(' ')[1], 10);
        const month = `${monthNumber}월`;
        groups[month] = groups[month] ? [...groups[month], item] : [item];
        return groups;
      },
      {},
    );

    const halfPieChartData = [
      {
        name: 'Inprogress',
        value: todos.filter((todo) => !todo.completed).length,
        color: '#82ca9d',
      },
      {
        name: 'Completed',
        value: todos.filter((todo) => todo.completed).length,
        color: '#8884d8',
      },
    ];

    const barChartData = Array.from({ length: 12 }, (_, index) => {
      const month = `${index + 1}월`;
      const monthData = groupedData[month] || [];
      const inProgress = monthData.filter((item) => !item.completed).length;
      const completed = monthData.filter((item) => item.completed).length;
      return { name: month, inProgress, completed };
    });

    const bubbleChartData = Array.from({ length: 12 }, (_, index) => ({
      month: `${index + 1}월`,
      index: 1,
      value: (groupedData[`${index + 1}월`] || []).length,
    }));

    return { halfPieChartData, barChartData, bubbleChartData };
  }, [todos]);

  return (
    <>
      <section className="section">
        <SectionTitle title="DashBoard" />
        <div className="bubble-chart-wrapper">
          <h3>1년중 가장 바쁜달은?</h3>
          <BubbleChart data={bubbleChartData} />
          {/* 700 */}
        </div>
        <div className='chart-container'>
          <div className="bar-chart-wrapper">
            <h3>목표를 가장 잘 이룬 달은 언제인가요?</h3>
            <BarChart data={barChartData} />
            {/* 400 */}
          </div>
          <div className="half-pie-chart-wrapper">
            <h3>올해 목표는 얼마나 달성되었나요?</h3>
            <HalfPieChart data={halfPieChartData} width={260} />
            {/* 260 */}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardTemplate;
