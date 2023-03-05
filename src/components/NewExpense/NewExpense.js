import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div>
      {isEditing === true ? (
        <div className="new-expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditing}
          />
        </div>
      ) : (
        <div className="new-expense">
          <button onClick={startEditingHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};
// const NewExpense = (props) => {
//   return (
//     <div className="new-expense">
//       <ExpenseForm />
//     </div>
//   );
// };

export default NewExpense;
