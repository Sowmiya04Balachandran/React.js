// import logo from './logo.svg';
 import './App.css';
import React  , { useState } from  'react';
import Expenses from "./Compontents/Expense/Expenses";
import NewExpenses from './Compontents/NewExpenses/NewExpenses';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Super Market ",
  },
  {
     id: "e2", 
     title: "New TV",
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      location:'Electronic Shop' ,
    },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location:'WorkShop' ,
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location:'FurnitureShop' ,
  }
];

const App=()=> {
 const[expenses,setExpenses]=useState(DUMMY_EXPENSES); 

const addExpenseHandler=(expense)=>{
 
  setExpenses((prevExpenses)=>{
  return[expense,  ...prevExpenses];
  });
};


  return (
   <div>
    <NewExpenses onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
   </div>

   
  );
}

export default App;
