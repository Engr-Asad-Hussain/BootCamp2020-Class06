const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':         //Here action is 'ADD_TRANSACTION'
            return [action.payload, ...state];
        /*
        [x] When this case call's make another payload {key, value} and whatever is in state. This combination will make new object
        [x] action.payload carries {stringInfo: newDes, amount: newAmount}
        [x] state carries [ {stringInfo: "Cook", amount: 240}, {stringInfo: "Book", amount: 300},}]
        [x] ...state carries {stringInfo: "Cook", amount: 240}, {stringInfo: "Book", amount: 300}
        [x] for more understanding use => console.log(action.payload) and console.log(...state)
        */
       default:
           return state;
    }
});

export default TransactionReducer;

/*
------------------------------------------------------------------------
    PAYLOAD and ACTION and TYPE
------------------------------------------------------------------------
"Payload" is what is keyed ( the key value pairs ) in your actions and passed around between reducers in your redux application. For example -
An action is an object that contains two keys and their values.

const someAction = {
  type: "Test",
  payload: {user: "Test User", age: 25},
}
The payload can be any valid JS type ( array , object, etc )
*/

/* 
------------------------------------------------------------------------
    SPREAD OPERATOR
------------------------------------------------------------------------
In javaScript [] and {} works on reference
Example,
    var a=[20, 30, 40]
    var b=a
    console.log(a)  [20, 30, 40]
    console.log(b)  [20, 30, 40]
Now, Here comes a problme, It changes in b as well.
    a[0]=50
    console.log(a)  [50, 30, 40]
    console.log(b)  [50, 30, 40]
Now, To avoid this we use spread operator. This makes a separate copy instead to making reference.
    var a=[20, 30, 40]
    var b=...a
    a[0]=50
    console.log(a)  [50, 30, 40]
    console.log(b)  [20, 30, 40]
*/