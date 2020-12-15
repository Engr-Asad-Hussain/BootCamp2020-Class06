import React, { useContext, useState } from 'react';
import { TransContext } from './amountContext';
import './App.css';

function PresentLayer() {
    let { transactions, addTransaction } = useContext(TransContext);
    // transactions contains [{string, amount}, {string, amount}, {string, amount}]

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    let [del, setDel] = useState(0);

    const handledAddition = (event) => {    // By default handledAddition will bring some event with submit button
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("You have entered 0\nPlease enter valid Transaction");
        } else {
            addTransaction({
                stringInfo: newDesc,
                amount: Number(newAmount)
            })
        }
        setDesc('');
        setAmount(0);
    }

    const getIncome = () => {
        var income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount
            }
        }
        return income
    }

    const getExpense = () => {
        var expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount
            }
        }
        return expense
    }

    return (
        <div className="container">
            <div className="text-center">
                <h1>Expense Tracker</h1>
                <h4>CURRENT BALANCE</h4>
                <h1>${getIncome() + getExpense()}</h1>
            </div>
            <div className="amount-container">
                <h3>INCOME<br />${getIncome()}</h3>
                <h3>EXPENSE<br />${getExpense()}</h3>
            </div>
            <h3 className="text-center">Transaction Hisotry</h3>
            <hr />
            <ul className="history-form">
                {transactions.map((transObject, index) => {
                    return (
                        <li key={index}>
                            <span>{transObject.stringInfo}</span>
                            <span>{transObject.amount}</span>
                        </li>
                    )
                })}
            </ul>
            <h3 className="text-center">Add New Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handledAddition}>
                <label htmlFor="des"><strong>Description</strong></label><br />
                <input
                    type="text"
                    id="des"
                    value={newDesc}
                    placeholder="Detail of Transaction"
                    onChange={(event) => setDesc(event.target.value)}
                    required></input><br />
                <label htmlFor="trans"><strong>Transaction Amount</strong></label><br />
                <input
                    type="number"
                    id="trans"
                    value={newAmount}
                    placeholder="Dollar Value of Transaction"
                    onChange={(event) => setAmount(event.target.value)}
                    required></input><br />
                <input
                    type="submit"
                    value="Add Transaction"></input><br />
            </form>
        </div>
    );
}

export default PresentLayer;

/*
{transHistory.map((transObject, index)=>{
    <li>
        <span>{transObject.stringInfo}</span>
        <span>{transObject.amount}</span>
    </li>
})}
[x] .map() will print transHistory in <li>
[x] transObject contains {stringInfo, amount} present in transHistory
[x] Warning: Each child in a list should have a unique "key" prop; So index is used for
this error repmoval to uniquely identify each element of array. It is like a for loop for iteration.
[x] https://reactjs.org/docs/lists-and-keys.html#keys
[x] Humlogon main <li> sirf 1 hi banaya hai but web pr render 3 times hua hai tw usse har ek ke liye unique key chaihye hota hai jiss se wo usse identify kr saky
*/

/*
<input type="text" id="des" onChange={ (event)=> setDesc(event.target.value)} required></input>
What onChange will do? Jub bhi input change hoga, ek event chalega jo setDesc ko set krdega jo user ne input kari hogi value
*/