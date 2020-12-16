## ...state and payload:
- **View Details in Reducer.js**
- When this case call's make a new array [] which carries two elements
    1. action.payload {key, value} means whatever was dispatch in addStudents() 
    2. ...state: Previous state that carriers [{}, {}, {}] i-e, without new action.payload.
-  action.payload carries {stringInfo: newDes, amount: newAmount}
- ...state carries {stringInfo: "Cook", amount: 240}, {stringInfo: "Book", amount: 300}
- for more understanding use => console.log(action.payload) and console.log(...state)

## action
- **View Details in Reducer.js**
- action is nothing but just a javascript object i-e, { }

## { studentsBio }
- **View Details in Header.js**
- let { studentBio } = useContext(Context);
- Here we have done destucturing. Means whatever is passed in <Context.Provider value={Here}> will be used as it is with same name.
- { } this is known as de-stucture
- { studentBio } => studentBio was given as a key in <Context.Provider> extract that variable
- similarly we can extract addStudent also, because this is also sent in <Context.Provider>  

## values.map( (object, index)=>{} ) and key={index}
- **View Details in Header.js**
```
{values.map( (object, index)=> {
    return (
    <li key={index}>Name: {object.name}, Roll No: {object.rollNo}</li>
    )
})}
```

- Here we are telling that; Array contains multiple object {} so, map that all {} one by one in ```<li>```
- Whenever we map() it returns indexes, so that we can give each ```<li>``` a unique index number
- Therefore we use key={index}
- If we don't use key={index} then browser will give warning: of key props.

## let values = useContext(Context);
- We are requesting React, to useContext named as "Context" and take the values which was created in Context and save in values variable.

## let [state, dispatch] = useReducer(Reducer, studentBio);
- Now, If we want to add more values or remove values to our intialState (studentBio) then we have to use Reducer.
- Reducer is the one how has the access/permission to change something in Context. 
- So, if someone wants to change in globalContext will request to Reducer, and then Reducer will goto Context and change that value.

## { children }
- **View detials in Context.js**
- {children} is like a props. Means all the components will come at this place.
- like: ```<Header /> and <ClassXA />``` is a children for ```<ContextProvider>``` 
```
<ContextProvider>
    <Header />
    <ClassXA />
</ContextProvider>
```

## values={} in ContextProvider
- **View details in Contex.js**
```
value={[{
    name: "Game",
    rollNo: 1000
}]}
```
- Whatever is the value={} will go to Context like;
- const Context = createContext(value);