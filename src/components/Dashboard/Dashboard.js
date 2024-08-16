import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const incomes = [
        { id: 1, amount: 2500 },
        { id: 2, amount: 5000 },
        { id: 3, amount: 7500 },
        { id: 4, amount: 10000 },
    ];

    const expenses = [
        { id: 1, amount: 1000 },
        { id: 2, amount: 3000 },
        { id: 3, amount: 5000 },
        { id: 4, amount: 7000 },
    ];

    const totalIncome = () => {
        return incomes.reduce((total, income) => total + income.amount, 0);
    };

    const totalExpenses = () => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart incomes={incomes} expenses={expenses} />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income: {dollar} {totalIncome()}</h2>
                            </div>
                            <div className="expense">
                                <h2>Total Expense: {dollar} {totalExpenses()}</h2>
                            </div>
                            <div className="profit">
                                <h2>Total Profit: {dollar} {totalBalance()}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
.stats-con{
    gap: 2rem;
    .chart-con{
        height: 400px;
        .amount-con{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 2rem;
            .income, .expense{
                grid-column: span 2;
            }
            .income, .expense, .profit{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                border-radius: 20px;
                padding: 1rem;

            }

            .profit{
                grid-column: 2 / 4;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 1rem;
                h2{
                    color: rgba(34, 34, 96, 0.9);
                }
            }
        }
    }
`;

export default Dashboard;
