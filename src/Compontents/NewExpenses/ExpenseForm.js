import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
   
    const [entertedTitle,setTitle]=useState('');
    const [entertedAmount,setAmount]=useState('');
    const [entertedDate,setDate]=useState('');

    // const [userInput,setUserInput]=useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate: '',

    // })


    const titleHandler=(event)=>{
        setTitle(event.target.value)
        

    }
    const amountHandler=(event)=>{
        setAmount(event.target.value)
        // setUserInput(()=>{
        //     return {...userInput,enteredAmount:event.target.value}
        // })
    }
    const dateHandler=(event)=>{
       setDate(event.target.value)
    //    setUserInput(()=>{
    //     return {...userInput,enteredDate:event.target.value
    //        // console.log(enteredDate)
    //     }
       
    //})
              



    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:entertedTitle,
            amount:+entertedAmount,
            date:new Date(entertedDate),
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

    }




    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    value={entertedTitle}
                     onChange={titleHandler}/>

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                     min='0.01' step='0.01'
                      value={entertedAmount} 
                       onChange={amountHandler}/>
                    
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                     min='2019-01-01'
                      max='2023-12-10'
                       value={entertedDate}
                        onChange={dateHandler} />
                    
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        
    )
}
export default ExpenseForm;