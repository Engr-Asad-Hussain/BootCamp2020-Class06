import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

let transactions = [
    { stringInfo: "Utility Bills", amount: -1250 },
    { stringInfo: "Salary", amount: 30000 }
]

const GlobalContext = createContext(transactions);
export default GlobalContext;

export const ContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(Reducer, transactions);

    function addTransactions(object) {
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: {
                stringInfo: object.stringInfo,
                amount: object.amount
            }
        })
    }

    function getIndex(index) {
        var newArray = [];
        for (var i=0; i<state.length; i++) {
            if (i === index)
                continue;
            newArray.push(state[i])
        }
        dispatch ({
            type: 'SUB_TRANSACTIONS',
            payload: newArray
        })
    }

    function getIncome() {
        var income = 0;
        var expense = 0;
        for (var i=0; i<state.length; i++) {
            if (state[i].amount > 0)
                income += state[i].amount;
            else
                expense += Math.abs(state[i].amount)
        }
        return [income, expense]
    }

    return (
        <GlobalContext.Provider value={
            { 
                transactions: state, 
                addTransactions,
                getIndex,
                getIncome,
            }
        }>
        { children }
        </GlobalContext.Provider>
    );
}
