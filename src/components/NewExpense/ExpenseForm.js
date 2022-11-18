import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({ enteredTitle: '', enteredAmount: '', enteredDate: '' });

    const titleChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        });
    }

    const amountChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        });
    }

    const dateChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        });
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.onSaveExpenseData({
            id: Math.random().toString(),
            title: userInput.enteredTitle,
            amount: Number(userInput.enteredAmount),
            date: new Date(userInput.enteredDate),
        });
        setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
    }

    return (
        <form onSubmit={submitForm}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2030-01-01" value={userInput.enteredDate} onChange={dateChange} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;