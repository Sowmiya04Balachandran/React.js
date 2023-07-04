import './ExpenseItem.css';

function ExpenseItem(props) {
    
    return (
      //<h2>Expense Item!</h2>
      <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
          <h2 >{props.title}</h2>
          <div className='expense-item__carprice'>${props.amount}</div></div>
          
          <div className='expense-item__location'>{props.locationOfExpenditure}</div>
          
      </div>
    );
  }
  export default ExpenseItem;
  