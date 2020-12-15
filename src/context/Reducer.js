const Reducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE':
            return [
                ...state
            ]
        default:
            return state;
    }
}

export default Reducer;