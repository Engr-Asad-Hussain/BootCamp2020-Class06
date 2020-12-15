import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

let students = [
    { name: "Asad", rollNo: 2003 },
    { name: "Ibad", rollNo: 2123 },
    { name: "Saad", rollNo: 2253 },
    { name: "Ilsa", rollNo: 2033 },
    { name: "Shan", rollNo: 2203 },
]

const Context = createContext(students);
export default Context;

export const ContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(Reducer, students);

    function addStudents(Object) {
        dispatch(
            {
                type: 'ADD_STUDENTS',
                payload: {
                    name: Object.name,
                    rollNo: Object.rollNo
                }
            }
        )
    }

    function getIndex(index) {
        var newArray = [];
        for (var i=0; i<state.length; i++)  {
            if (i === index)
                continue;
            newArray.push(state[i])
        }
        dispatch (
            {
                type: 'REMOVE_STUDENTS',
                payload: newArray
            }
        )
    }

    return (
        <Context.Provider value={
            {   students: state, 
                addStudents,
                getIndex
            }
        }>
            { children }
        </Context.Provider>
    );
}