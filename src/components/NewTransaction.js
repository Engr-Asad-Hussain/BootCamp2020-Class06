import React, { useState, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const NewTransaction = () => {
    let { addTransactions } = useContext(GlobalContext);
    let [des, setDes] = useState('');
    let [dollar, setDollar] = useState(0);

    function eventHandle(event) {
        event.preventDefault();

        addTransactions({
            stringInfo: des,
            amount: dollar
        });
        /* 
            This will reset the "des" on each submit so that 
            if someone double clicks it would not submit again the same transaction.
        */
        setDes('');
    }

    return (
        <div>
            <h3 className="text-center">Add Transaction</h3>
            <form className="form-description" onSubmit={eventHandle}>
                <div className="form-control">
                    <label htmlFor="details"><strong>Description</strong></label><br />
                    <input 
                        type="text"
                        id="details"
                        placeholder="Detail of Transaction"
                        value={des}
                        onChange={ (event)=> setDes(event.target.value)}
                        required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="cash"><strong>Transaction Amount</strong></label><br />
                    <input 
                        type="number"
                        id="cash"
                        placeholder="Dollar Value of Transaction"
                        value={dollar}
                        onChange={ (event)=> setDollar(Number(event.target.value))}
                        required="required"
                        /*
                            [x] Number() because by default if we input it takes it as a string.
                        */
                    />
                </div>
                <button className="btn" type="submit">Add transaction</button>
            </form>
        </div>
    );
}
export default NewTransaction;