import React, { useContext } from 'react';
import Context from '../GlobalState/Context';
import '../App.css';

const Header = () => {
    /*let values = useContext(Context);*/
    /*
        We are requesting React, to useContext named as "Context"
        and take the values which was created in Context and
        save in values variable
    */

    let {studentBio} = useContext(Context);
    /* 
        Here we have done destucturing. Means whatever is passed in <Context.Provider value={Here}>
        will be used as it is with same name.
    */ 
    /*
        [x] { } this is known as de-stucture
        [x] { studentBio } => studentBio was given as a key in <Context.Provider>
            extract that variable
        [x] similarly we can extract addStudent also, because this is also sent in <Context.Provider>  
    */
   
    /*console.log(studentBio);*/ 

    return (
        <div>
            <h1>Context API and Reducer</h1>
            <p>Following students were absent in the class</p>
            <ul className="list">
                {studentBio.map( (object, index)=> {
                    return (
                        <li key={index}>Name: {object.name}, Roll No: {object.rollNo}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Header;

/*
    [x]
    {values.map( (object, index)=> {
        return (
        <li key={index}>Name: {object.name}, Roll No: {object.rollNo}</li>
        )
    })}
    Here we are telling that; Array contains multiple object {}
    so, map that all {} one by one in <li>

    [x] Whenever we map() it returns indexes, so that we can give each <li> a unique index number
    [x] Therefore we use key={index}
    [x] If we don't use key={index} then browser will give warning: of key props.
*/