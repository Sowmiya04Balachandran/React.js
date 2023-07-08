import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import Card from '../Card/Card';
import  React , {useState} from 'react';


function ExpenseItem(props) {
   const [title,setTitle]=useState(props.title)
const titleUpdate=()=>{
  setTitle('updated');
   console.log(title);
 
}
const[amount,setAmount]=useState(props.amount)
const amountUpdate=()=>{
  setAmount('100$');
  console.log(amount);
}

    return (
      //<h2>Expense Item!</h2>
      <Card className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={amount}/>
 <button onClick={amountUpdate}>Update Amount</button> 
  <ExpenseDetails location={props.location} />  <ExpenseDetails title={title} />
<button  onClick={titleUpdate}>change title</button>

  </Card>
      
    );
  }
  export default ExpenseItem;