import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import IncomeTracker from './IncomeTracker';

function Income() {
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <div className="income-container">
                    <div className="incomes">
                        <IncomeTracker />
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    
`;

export default Income