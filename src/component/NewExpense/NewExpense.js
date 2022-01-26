import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const onUpdate = (passingUpdate) => {
    const expense = {
      ...passingUpdate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onUpdate} />
    </div>
  );
};
export default NewExpense;
