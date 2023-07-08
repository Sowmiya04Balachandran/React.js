import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=>{
    const [entertedTitle,setTitle]=useState('');
    const [entertedAmount,setAmount]=useState('');
    const [entertedDate,setDate]=useState('');


    const titleHandler=(event)=>{
        setTitle(event.target.value)
    }
    const amountHandler=(event)=>{
        setAmount(event.target.value)
    }
    const dateHandler=(event)=>{
        setDate(event.target.value)
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'  onChange={titleHandler}/>

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'  onChange={amountHandler}/>
                    
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-10' onChange={dateHandler} />
                    
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        
    )
}
export default ExpenseForm;