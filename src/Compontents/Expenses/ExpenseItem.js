import ExpenseDate from './ExpenseDate';
//import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import Card from '../Card/Card';


function ExpenseItem(props) {

const delteExpense=()=>{
 
 console.log('deletexpense');
 
}

    return (
      //<h2>Expense Item!</h2>
      <Card className='expense-item'>

    <ExpenseDate date ={props.date} />

    <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
    <button  onClick={delteExpense}>Delete Expesense</button>

      </Card>
    );
  }
  export default ExpenseItem;