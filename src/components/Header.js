import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Header = () => {
    let { getIncome } = useContext(GlobalContext);
    let [ income, expense ] = getIncome();
    /*  
        [x] We have destucture getIncome() into an array because
            getIncome() is returns an array.
    */
    return (
        <div>
            <h2>Expense Tracker by Asad Hussain</h2>
            <br />
            <h4>CURRENT BALANCE</h4>
            <h1>${(income - expense).toFixed(2)}</h1>
        </div>
    );
}

export default Header;