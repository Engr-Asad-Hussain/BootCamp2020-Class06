const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STUDENTS': 
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_STUDENTS':
            return action.payload
        default:
            return state
    }
}

export default Reducer;