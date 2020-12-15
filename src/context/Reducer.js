const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTIONS':
            return [
                action.payload,
                ...state
            ];
        case 'SUB_TRANSACTIONS':
            return action.payload;
        default:
            return state;
    }
}
export default Reducer;