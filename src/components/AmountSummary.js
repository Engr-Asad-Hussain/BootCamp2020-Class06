import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const AmountSummary = () => {
    let { getIncome } = useContext(GlobalContext);
    let [ income, expense ] = getIncome();

    return (
        <div className="inc-exp-container">
            <div>
                <h4>INCOME</h4>
                <p className="money plus">${income.toFixed(2)}</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className="money minus">${expense.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default AmountSummary;