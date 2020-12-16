import React, { useContext } from 'react';
import Context from '../context/Context';
import '../App.css';

const ClassXA = () => {
    let { removeStudents } = useContext(Context);

    return (
        <div>
            <h1>Class X </h1>
            <button className="button" onClick={()=>{
                removeStudents()
            }}>Remove Students</button>
        </div>
    );
}

export default ClassXA;