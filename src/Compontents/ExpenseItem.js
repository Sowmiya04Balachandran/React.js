import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate=new Date(2023,2,28);
    const expenseTitle='Car Insurance';
    const expenseAmount=294.89;
    const locationOfExpenditure='garge';
    return (
      //<h2>Expense Item!</h2>
      <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
          <h2 >{expenseTitle}</h2>
          <div className='expense-item__carprice'>${expenseAmount}</div></div>
          <br></br>
          <div className='expense-item__location'>{locationOfExpenditure}</div>
          {/* <div>May 28th 2023</div>
          <div className='expense-item__description'>
          <h2>Food</h2>
          <div className='expense-item__foodprice'>Rs 10</div></div>
          <div>May 28th 2023</div>
          <div className='expense-item__description'>
          <h2>Petrol</h2>
          <div className='expense-item__petrolprice'>Rs 100</div></div>
          <div>May 28th 2023</div>
          <div className='expense-item__description'>
          <h2>Movies</h2>
          <div className='expense-item__movieprice'>Rs200</div>
          </div>  */}
          
      </div>
    );
  }
  export default ExpenseItem;
  