import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Button from '../Button/Button'
import { plus } from '../../utils/Icons'

function IncomeForm({addIncome}) {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })
    
    const{ title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({
          ...inputState,
            [name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIncome = {
            id: Date.now(),
            title,
            amount,
            date,
            category,
            description,
        };
        addIncome(newIncome);
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className = "input-control" >
                <input 
                    type = "text" 
                    value = {title}
                    name = {'title'}
                    placeholder="Income Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className = "input-control" >
                <input 
                    type = "text" 
                    value = {amount}
                    name = {'amount'}
                    placeholder="Income Amount"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className = "input-control" >
                <DatePicker
                    id = 'date'
                    placeholderText='Enter a date'
                    selected = {date}
                    dateFormat = 'yyyy-MM-dd'
                    onChange = {(date) => 
                        setInputState({
                        ...inputState,
                            date: date
                    })}
                />
            </div>
            <div className="selects input-control">
                <select required 
                    value={category} 
                    name="category" 
                    id="category" 
                    onChange={handleInput('category')}
                >
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="rent">Rent</option>
                    <option value="bank">Bank Interest</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea 
                    name="description" 
                    value={description} 
                    placeholder='Add A Description' 
                    id="description" 
                    cols="30" 
                    rows="4" 
                    onChange={handleInput('description')}>
                </textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .input-control{
        input, textarea, select{
            font-family: inherit;
            font-size: inherit;
            outline: none;
            border: none;
            padding: .5rem 1rem;
            border-radius: 5px;
            border: 2px solid #fff;
            background: transparent;
            resize: none;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            color: rgba(34, 34, 96, 0.9);
            width: 100%;
            &::placeholder{
                color: rgba(34, 34, 96, 0.4);
            }
        }
    }

    .selects{
        display: flex;
        justify-content: flex;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
        padding{
            margin-bottom: 10px;
        }
    }
`;

export default IncomeForm