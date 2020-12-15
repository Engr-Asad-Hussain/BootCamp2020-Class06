import React, { useContext } from 'react';
import Context from '../context/Context';

const ClassXA = () => {
    let {addStudents} = useContext(Context);
    return (
        <div>
            <h1>Class X-A</h1>
            <button className="button" onClick={
                () => addStudents({
                    name: "Google",
                    rollNo: 2031
                })
            }>
                Add Students
            </button>
        </div>
    );
}

export default ClassXA;