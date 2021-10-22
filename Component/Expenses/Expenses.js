import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./Expenses-List";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [fiilteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === fiilteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={fiilteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart  expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};
export default Expenses;
