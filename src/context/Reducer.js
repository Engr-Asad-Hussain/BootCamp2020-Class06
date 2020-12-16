const Reducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE':
            return action.payload;
            /*
                action.payload will contains the newArray
            */
        default:
            return state;
    }
}

export default Reducer;