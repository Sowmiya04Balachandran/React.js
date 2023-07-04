import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';


function ExpenseItem(props) {
  
  
    
    return (
      //<h2>Expense Item!</h2>
      <div className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />


      </div>
    );
  }
  export default ExpenseItem;
  