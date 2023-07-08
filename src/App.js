// import logo from './logo.svg';
 import './App.css';
import React from  'react';
import Expenses from "./Compontents/expenses/Expenses";
import NewExpenses from './Compontents/NewExpenses/NewExpenses'

function App() {
  const expenses = [
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
  return (
   <div>
    <NewExpenses />
    <Expenses items={expenses} />
   </div>

   
  );
}

export default App;
