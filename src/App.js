import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 13.23,
    date: new Date(2022, 2, 29),
  },
  {
    id: 'e2',
    title: 'Loan Insurance',
    amount: 232.23,
    date: new Date(2021, 2, 5),
  },
  {
    id: 'e3',
    title: 'Car Service',
    amount: 53,
    date: new Date(2020, 7, 29),
  },
  {
    id: 'e4',
    title: 'House chores expenses',
    amount: 353,
    date: new Date(2029, 2, 29),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const getNewExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={getNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
