import React, { useState } from 'react';
import styled from 'styled-components';
import ExpensesForm from './ExpensesForm';
import Categories from '../Categories/Categories';

function ExpensesTracker() {
    const [expensesData, setExpensesData] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);

    const addExpenses = (newExpenses) => {
        setExpensesData((prevExpensesData) => [...prevExpensesData, newExpenses]);
        setTotalExpenses((prevTotalExpenses) => prevTotalExpenses + parseFloat(newExpenses.amount));
    };

    const deleteExpenses = (id) => {
        setExpensesData((prevExpensesData) => {
            const updatedExpensesData = prevExpensesData.filter((item) => item.id !== id);
            return updatedExpensesData;
        });

        setTotalExpenses((prevTotalExpenses) => {
            const deletedExpenses = expensesData.find((item) => item.id === id);
            return prevTotalExpenses - parseFloat(deletedExpenses.amount);
        });
    };

    return (
        <ExpensesStyled>
            <div className='container'>
                <div className='totalExpenses'>
                    Total Expenses: <span id='red-text'>-${totalExpenses.toFixed(2)}</span>
                </div>
                <ExpensesForm addExpenses={addExpenses} />
        
                {expensesData.map((expenses) => (
                    <Categories
                        key={expenses.id}
                        deleteItem={deleteExpenses}
                        {...expenses}
                        type="expenses"
                    />
                ))}
            </div>
        </ExpensesStyled>
    );
}

const ExpensesStyled = styled.div`
    .container {
        text-align: center;
    }

    .totalExpenses {
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        color: #222260;
        margin-top: 20px;
        font-size: 2rem;
        font-weight: bold;
    }

    #red-text {
        color: red;
    }
`;

export default ExpensesTracker;
