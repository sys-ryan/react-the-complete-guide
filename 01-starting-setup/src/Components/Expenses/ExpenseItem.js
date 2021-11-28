import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //value, state updating function, initial value

  const clickHandler = () => {
    setTitle("updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
