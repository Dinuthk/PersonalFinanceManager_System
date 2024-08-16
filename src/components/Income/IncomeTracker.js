// IncomeTracker.js
import React, { useState } from 'react';
import styled from 'styled-components';
import IncomeForm from './IncomeForm';
import Categories from '../Categories/Categories';

function IncomeTracker() {
    const [incomeData, setIncomeData] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);

    const addIncome = (newIncome) => {
        setIncomeData((prevIncomeData) => [...prevIncomeData, newIncome]);
        setTotalIncome((prevTotalIncome) => prevTotalIncome + parseFloat(newIncome.amount));
    };

    const deleteIncome = (id) => {
        setIncomeData((prevIncomeData) => {
            const updatedIncomeData = prevIncomeData.filter((item) => item.id !== id);
            return updatedIncomeData;
        });

        setTotalIncome((prevTotalIncome) => {
            const deletedIncome = incomeData.find((item) => item.id === id);
            return prevTotalIncome - parseFloat(deletedIncome.amount);
        });
    };

    return (
        <IncomeStyled>
            <div className='container'>
                <div className='totalIncome'>
                    Total Income: <span id='green-text'>${totalIncome.toFixed(2)}</span>
                </div>
                <IncomeForm addIncome={addIncome} />
        
                {incomeData.map((income) => (
                    <Categories
                        key={income.id}
                        deleteItem={deleteIncome}
                        {...income}
                        type="income"
                    />
                ))}
            </div>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
    .container {
        text-align: center;
    }

    .totalIncome {
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

    #green-text {
        color: #42AD00;
    }
`;

export default IncomeTracker;
