import react, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const students = [
    { name: "Asad", rollNo: 2000 },
    { name: "Ibad", rollNo: 5000 },
    { name: "Zain", rollNo: 3000 },
    { name: "Google", rollNo: 4000 },
    { name: "Facebook", rollNo: 8000 },
    { name: "YouTube", rollNo: 9000 }
]

const Context = createContext(students);
export default Context;

export const ContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(Reducer, students);

    function removeStudents(object) {
        dispatch(
            {
                type: 'REMOVE',
                payload: state.pop()
            }
        )
    }
    /*
        [x] state is an array and we can apply different functions of an array
        [x] state.pop() will remove last element from state [] and safe this new array in state.
    */

    return (
        <Context.Provider value={ {
            students: state,
            removeStudents
        } }>
        { children }
        </Context.Provider>
    );
}