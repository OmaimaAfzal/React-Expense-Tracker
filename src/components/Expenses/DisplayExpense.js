import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./DisplayExpense.css";
import ExpensesChart from "./ExpensesChart";
function DisplayExpense(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    // console.log("Expected Year!");
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* Filter */}
        <ExpensesFilter
          selected={filterYear}
          onchangefilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default DisplayExpense;
