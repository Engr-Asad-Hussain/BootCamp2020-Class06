import React, { useContext } from 'react';
import Context from '../GlobalState/Context';

const ClassXA = () => {
    let { addStudents } = useContext(Context);
    /*console.log(studentBio)*/
    /* 
        We are requesting React, to useContext named as "Context"
        and destucture it and use addStudents which was sent as a value in
        <Context.Provider>
    */
   
    return (
        <div>
            <h1>This is ClassX-A</h1>
            <button className="button" onClick={ ()=> {
                addStudents({
                    name: "Google",
                    rollNo: 1000
                })
            }}>
                Add Students
            </button>
        </div>
    );
}

export default ClassXA;