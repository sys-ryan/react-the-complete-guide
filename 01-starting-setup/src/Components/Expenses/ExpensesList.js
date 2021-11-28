import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filteredExpenses = props.filteredExpenses;

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return filteredExpenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
};

export default ExpensesList;
