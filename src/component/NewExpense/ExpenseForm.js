import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState(' ');
  // const [userInput, SetUserinput] = useState({
  //   enterTitle: '',
  //   enterAmount: ' ',
  //   enterDate: '',
  // });
  const handleTitle = (event) => {
    setEnterTitle(event.target.value);
    // SetUserinput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    // SetUserinput((prev) => {
    //   return { ...prev, enterTitle: event.target.value };
    // });
  };
  const handleAmount = (event) => {
    setEnterAmount(event.target.value);
    // SetUserinput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
    // SetUserinput((prev) => {
    //   return { ...prev, enterAmount: event.target.value };
    // });
  };
  const handleDate = (event) => {
    setEnterDate(event.target.value);
    // SetUserinput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
    // SetUserinput((prev) => {
    //   return { ...prev, enterDate: event.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnterTitle(' ');

    setEnterAmount(' ');
    setEnterDate(' ');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={handleTitle} />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={handleAmount}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2019-01-01"
            max="2030-12-31"
            onChange={handleDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
