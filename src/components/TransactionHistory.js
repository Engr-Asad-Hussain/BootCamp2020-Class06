import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const TransactionHistory = () => {
    let { transactions, getIndex } = useContext(GlobalContext);

    return (
        <div>
            <h2 className="text-center">Transaction History</h2>
            <hr />
            <ul className="list">
                {transactions.map( (object, index)=>{
                    return (
                        <div key={index}>
                            <li className={object.amount > 0 ? 'plus' : 'minus'}>
                                {object.stringInfo}
                                <span>{object.amount}</span>
                                <button className="delete-btn" onClick={ ()=> getIndex(index) }>X</button>
                                </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default TransactionHistory;