import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const studentBio = [
    { name: "Asad", rollNo: 1001 },
    { name: "Ibad", rollNo: 1002 },
    { name: "Saad", rollNo: 1003 },
    { name: "Zain", rollNo: 1004 },
    { name: "Ilsa", rollNo: 1005 },
    { name: "Shan", rollNo: 1006 }
]
/*console.log(studentBio);*/

/*
    Context will just store values, and if someone wants to use
    these values will request to Context and useContext make them 
    able to use it.
*/

const Context = createContext(studentBio);
export default Context;

/*
    [x] Now, If we want to add more values or remove values to our
        intialState (studentBio) then we have to use Reducer.
    [x] Reducer is the one how has the access/permission to change something in Context. 
    [x] So, if someone wants to change in globalContext will request to
        Reducer, and then Reducer will goto Context and change that value.
*/

/*
    [x] Usually we make Context.Provider at the App.js.
    [x] We have to make provider over here because Provider carriers initial values vaue={}
        if we make provider at App.js then we don't have initial values there.
*/
export const ContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(Reducer, studentBio);

    function addStudents(object) {
        dispatch(
            {
                type: 'ADD_STUDENTS',
                payload: {
                    name: object.name,
                    rollNo: object.rollNo
                }
            }
        );
    }
    return (
        <Context.Provider value={{
            studentBio: state, 
            addStudents
        }}>
            { children }
        </Context.Provider>
    )
}

/*
[x] {children} is like a props. Means all the components will come at this place.
*/
/*
value={[{
    name: "Game",
    rollNo: 1000
}]}
Whatever is the value={} will go to Context like;
const Context = createContext(value);
*/