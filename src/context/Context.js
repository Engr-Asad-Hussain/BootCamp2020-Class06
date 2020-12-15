import react, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const students = [
    { name: "Asad", rollNo: 2000 },
    { name: "Ibad", rollNo: 5000 },
    { name: "Zain", rollNo: 3000 },
    { name: "Google", rollNo: 4000 },
    { name: "Facebook", rollNo: 8000 },
    { name: "YouTube", rollNo: 9030 },
    { name: "Instagram", rollNo: 5200 },
    { name: "Twitter", rollNo: 8500 },
    { name: "Intell", rollNo: 9200 }
]

const Context = createContext(students);
export default Context;

export const ContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(Reducer, students);
    
    function getIndex(index) {
        var newArray = [];
        for (var i=0; i<state.length; i++) {
            if ( i === index )
                continue;
            newArray.push(state[i])
        }
        /*console.log(newArray)*/
        /*This for loop will skip the particular index and append all elements of state in newArray */
        dispatch(
            {
                type: 'REMOVE',
                payload: newArray
            }
        )
    }

    return (
        <Context.Provider value={ {
            students: state,
            getIndex
        } }>
        { children }
        </Context.Provider>
    );
}