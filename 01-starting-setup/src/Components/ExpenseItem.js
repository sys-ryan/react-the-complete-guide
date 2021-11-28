import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
