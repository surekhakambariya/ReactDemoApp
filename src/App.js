import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.0, date: new Date(2018, 3, 28)},
  { id: 'e2', title: 'New TV', amount: 180.01, date: new Date(2020, 4, 21) },
  { id: 'e3', title: 'Car Insurance', amount: 399.45, date: new Date(2021, 5, 18) },
  { id: 'e4', title: 'New Decks(wooden)', amount: 450, date: new Date(2019, 6, 20) }
]
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} ></Expenses>
    </div>
  );
}

export default App;
