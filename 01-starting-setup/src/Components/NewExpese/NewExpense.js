import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const toggleExpenseFormHandler = () => {
    props.onToggleExpenseForm();
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        expenseFormState={props.expenseFormState}
        onToggleExpenseForm={toggleExpenseFormHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
