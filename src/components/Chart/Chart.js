import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const gridTemplateLargeScreens = `
  "a a a a b b"
  "a a a a c c"
  "a a a a d d"
  "a a a a e e"
  "a a a a f f"
  "g g h h i i"
  "g g h h k k"
  "m j j o l l"
  "n j j p q r"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "c"
  "d"
  "e"
  "f"
  "g"
  "g"
  "h"
  "h"
  "i"
  "j"
  "j"
`;

const Chart = ({ incomes, expenses }) => {
  const [expenseData] = useState(expenses);
  const [incomeData] = useState(incomes);

  const totalExpenses = expenseData.reduce((accumulator, expense) => accumulator + expense.amount, 0);
  const totalIncome = incomeData.reduce((accumulator, income) => accumulator + income.amount, 0);
  const totalBalance = totalIncome - totalExpenses;

  const data = {
    labels: ['Expenses', 'Income', 'Balance'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [totalExpenses, totalIncome, totalBalance],
        backgroundColor: [
          'rgba(255, 99, 100, 0.6)',
          'rgba(54, 252, 150, 0.6)',
          'rgba(171, 235, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 100, 1)',
          'rgba(54, 252, 150, 1)',
          'rgba(171, 235, 255, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const isAboveMediumScreens = window.innerWidth >= 1000;

  const containerStyles = {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    gap: '1.5rem',
    gridTemplateColumns: isAboveMediumScreens ? 'repeat(6, minmax(170px, 1fr))' : '1fr',
    gridAutoRows: isAboveMediumScreens ? '80px' : null,
    gridTemplateAreas: isAboveMediumScreens ? gridTemplateLargeScreens : gridTemplateSmallScreens,
  };

  const chartContainerStyles = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridArea: 'a',
    backgroundColor: 'rgba(252, 246, 249, 0.78)',
    borderRadius: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  return (
    <div className='sm:px-12 sm:ml-3 md:px-[120px] px-5 pr-1 pb-[120px] pt-[100px] w-full h-screen overflow-y-scroll z-0 relative bg-[#12372A]'>
      <div style={containerStyles}>
        <div style={chartContainerStyles}>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
