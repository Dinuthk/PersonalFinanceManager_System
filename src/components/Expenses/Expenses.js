import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import ExpensesTracker from './ExpensesTracker';

function Expenses() {
    return (
        <ExpensesStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <div className="income-container">
                    <div className="incomes">
                        <ExpensesTracker />
                    </div>
                </div>
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    
`;

export default Expenses