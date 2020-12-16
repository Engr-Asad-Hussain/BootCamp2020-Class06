import React, { useContext } from 'react';
import Context from '../context/Context';

const Header = () => {
    let { students } = useContext(Context);
    return (
        <div>
            <h1>Context API and Reducer</h1>
            <ul>
                {students.map( (object, index) => {
                    return(
                        <li key={index}>Name: {object.name}, Roll No: {object.rollNo}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Header;