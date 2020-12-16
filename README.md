## state.pop()
- **View details in Context.js**
- state is an array and we can apply different functions of an array
- state.pop() will remove last element from state [] and safe this new array in state.

## Context.Provider
```
<Context.Provider value={ {
    students: state,
    removeStudents
} }>
    { children }
</Context.Provider>
```
- Now students: state, and removeStudents are globally availbale, if someone wants to use it will destucture and used these updated values.
- Plus whenever there is any change in students or removeStudents, this will replicated to all its children as well.