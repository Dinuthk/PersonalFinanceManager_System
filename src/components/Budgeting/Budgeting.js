import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';

function Budget() {
  const initialBudgets = {
    education: 500,
    groceries: 400,
    health: 300,
    clothes: 200,
    travelling: 100,
    other: 500,
  };

  const [budgets, setBudgets] = useState(initialBudgets);
  const [editMode, setEditMode] = useState({
    education: false,
    groceries: false,
    health: false,
    clothes: false,
    travelling: false,
    other: false,
  });

  const handleEditClick = (category) => {
    setEditMode({
      ...editMode,
      [category]: true,
    });
  };

  const handleSaveClick = (category) => {
    setEditMode({
      ...editMode,
      [category]: false,
    });
  };

  const handleBudgetChange = (category, e) => {
    setBudgets({
      ...budgets,
      [category]: parseFloat(e.target.value) || 0,
    });
  };

  return (
    <BudgetStyled>
      <InnerLayout>
        <h1>Budgeting</h1>
        <div className='container'>
          Edit the maximum budget you plan to spend on each expense per month
          {Object.keys(budgets).map((category) => (
            <div className='content' key={category}>
              {editMode[category] ? (
                <>
                  <input
                    type='number'
                    value={budgets[category]}
                    onChange={(e) => handleBudgetChange(category, e)}
                    placeholder='Enter budget'
                  />
                  <span onClick={() => handleSaveClick(category)}>Save</span>
                </>
              ) : (
                <>
                  <h1>{`${category.charAt(0).toUpperCase() + category.slice(1)}: $${budgets[category]}`}</h1>
                  <span onClick={() => handleEditClick(category)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </InnerLayout>
    </BudgetStyled>
  );
}

const BudgetStyled = styled.div`
  .container {
    text-align: center;
    margin-top: 1em;
    h1 {
      color: rgba(34, 34, 96, 1);
      font-size: 20px;
    }
  }

  .content {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
    width: 100%;
    color: #222260;
    margin-top: 20px;
    font-weight: bold;
    text-align: left;

    input {
      width: 120px;
      padding: 0.5rem;
      border-radius: 5px;
      border: 2px solid #fff;
      background: transparent;
      outline: none;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      color: rgba(34, 34, 96, 0.9);
      &::placeholder {
        color: rgba(34, 34, 96, 0.4);
      }
    }

    span {
      cursor: pointer;
    }
  }
`;

export default Budget;
