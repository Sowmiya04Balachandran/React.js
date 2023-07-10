//import ExpenseItem from "../Expense/ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
//import './ExpenseItem.css';
import React ,{ useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart'

const Expenses=(props)=>{
 const [filteredYear,setFilteredYear]=useState('2020');

 const filterChangeHandler=selectedYear=>
 {
  setFilteredYear(selectedYear);
 };

 const filteredExpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredYear;
 });

  //console.log(props);
    return(
      <div>
        <Card className="expenses">
      <ExpenseFilter 
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
        />
<ExpensesChart  expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />
        
      </Card>
      </div>
    )
}
export default Expenses;