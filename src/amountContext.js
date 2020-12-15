import React, { createContext, useReducer } from 'react';
import TransactionReducer from './amountReducer';

let initialTrans = [
    { stringInfo: "Cook", amount: 240 },
];

export const TransContext = createContext(initialTrans);

//let [state, dispatch] = useReducer(TransactionReducer, transHistory);
export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTrans);
    // We always call [state, dispatch]... in Provider. So, place inside it automatically.

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                stringInfo: transObj.stringInfo,
                amount: transObj.amount
            }
        });
    }
    // Whenever this addTransaction() triggers it will add new transaction {} to initialTras object
    return (
        <TransContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            { children }
        </TransContext.Provider>
    )
}