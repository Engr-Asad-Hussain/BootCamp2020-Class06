import React, { useContext } from 'react';
import Context from '../context/Context';

const Header = () => {
    let {students, getIndex} = useContext(Context);
    return (
        <div>
            <h1>Context API and Reducer</h1>
            <ul className="list">
                {students.map( (object, index) => {
                    return(
                        <div key={index}>
                            <li>Name: {object.name}, Roll No: {object.rollNo}</li>
                            <button onClick={
                                () => getIndex(index)
                            }>X</button>
                        </div>
                        )
                })}
            </ul>
        </div>
    );
}

export default Header;