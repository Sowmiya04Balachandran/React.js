import ExpenseItem from "../Expense/ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
//import './ExpenseItem.css';
import React ,{ useState } from 'react';


const Expenses=(props)=>{
 const [filteredYear,setFilteredYear]=useState('2020');

 const filterChangeHandler=selectedYear=>
 {
  setFilteredYear(selectedYear);
 };

  //console.log(props);
    return(
      <div>
        <Card className="expenses">
      <ExpenseFilter 
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
        />

      {props.items.map((expense)=>(
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>
      ))}
        
      </Card>
      </div>
    )
}
export default Expenses;