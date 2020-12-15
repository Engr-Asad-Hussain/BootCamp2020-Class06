import React, { useContext } from 'react';
import Context from '../GlobalState/Context';

const ClassXA = () => {
    let { addStudents } = useContext(Context);
    /*console.log(studentBio)*/
    /* 
        We are requesting React, to useContext named as "Context"
        and take the values which was created in Context and
        save in values variable
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