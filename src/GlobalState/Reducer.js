/*
    [x] When this case call's make another payload {key, value} and whatever is in state. This combination will make new object
    [x] action.payload carries {stringInfo: newDes, amount: newAmount}
    [x] state carries [ {stringInfo: "Cook", amount: 240}, {stringInfo: "Book", amount: 300},}]
    [x] ...state carries {stringInfo: "Cook", amount: 240}, {stringInfo: "Book", amount: 300}
    [x] for more understanding use => console.log(action.payload) and console.log(...state)
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


