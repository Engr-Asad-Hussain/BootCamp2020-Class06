/*
    [x] When this case call's make a new array [] which carries two elements
        1. action.payload {key, value} means whatever was dispatch in addStudents() 
        2. ...state: Previous state that carriers [{}, {}, {}] i-e, without new action.payload.
    [x] action.payload carries {stringInfo: newDes, amount: newAmount}
    [x] ...state carries {stringInfo: "Cook", amount: 240}, {stringInfo: "Book", amount: 300}
    [x] for more understanding use => console.log(action.payload) and console.log(...state)
*/
/*  
    [x] action is nothing but just a javascript object i-e, { }
*/

const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_STUDENTS':
            return [
                ...state,
                action.payload
            ]
            /*
            [...state, action.payload]. This value will saved in "state" after the calling of this case.
            */
        default: 
            return state;
    }
}
export default Reducer;


