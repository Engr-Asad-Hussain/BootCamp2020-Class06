## getIndex(index)
- **View details in Header.js**
```
{students.map( (object, index) => {
    return(
        <div key={index}>
            <li>Name: {object.name}, Roll No: {object.rollNo}</li>
            <button onClick={
                () => getIndex(index)
            }>X</button>
        </div>
        )
})}
```
- We know that key={index} will map each <li> a unique key, so we are sending this index to getIndex(index) so that, particular index gets removed onClick.