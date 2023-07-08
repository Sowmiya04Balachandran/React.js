import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=>{
   
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
          const submitHandler=(event)=>{
            event.preventDefault();

            const ExpenseData={
                title:entertedTitle,
                amount:entertedAmount,
                 date:new date(entertedDate)
            };
            console.log(ExpenseData);
          };
          



    }
    return(
        <form onSubmit={submitHandler}>
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