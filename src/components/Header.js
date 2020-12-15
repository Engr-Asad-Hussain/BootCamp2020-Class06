import React, { useContext } from 'react';
import Context from '../context/Context';
import '../App.css';

const Header = () => {
    let { students, getIndex } = useContext(Context);

    return (
        <div>
            <h1>Context API and Reducer</h1>
            <p>List of students that are enrolled in ClassX</p>
            <ul>
                {students.map( (object, index) => {
                    return (
                        <div key={index} className="flex-dispay">
                            <li>Name: {object.name}, Roll No: {object.rollNo}</li>
                            <button onClick={
                                () => { getIndex(index) }
                            }>X</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Header;