# Expense Tracker Application
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class06

Surge: http://tightfisted-organization12345.surge.sh/

## Pre-requistes:
#### Example: Add Elements in Global Context
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class06/tree/pre-requisite-01

Surge: http://cuddly-jump123.surge.sh/
#### Example: Remove Elements from the list at the end
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class06/tree/pre-requisite-02

Surge: http://dark-interest123.surge.sh/
#### Example: Remove Elements from a List by ID 
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class06/tree/pre-requisite-03

Surge: http://abnormal-glove123.surge.sh/
#### Example: Add and Remove List items
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class06/tree/pre-requisite-04

Surge: pretty-music1234.surge.sh

Note: Explanation is present in each file.
----------------------------------------------------------

## let [ income, expense ] = getIncome();
- **View details in Header.js**
- We have destucture getIncome() into an array because getIncome() is returns an array.

## ```<h1>${(income - expense).toFixed(2)}</h1>```
- toFixed(2) is used to fixed digits after decimal number.
- This will fixed 2 digits after decimal.

## ```<li className={object.amount > 0 ? 'plus' : 'minus'}>```
- This is an ternary operator ? :
- Means if object.amount is greater than 0 className="plus" else className="minus"

## ```<form onSubmit={eventHandle}>```
- This means when someone submit this form, it runs eventHandle function. By default it returns an event.
```
function eventHandle(event) {
    event.preventDefault();

    addTransactions({
        stringInfo: des,
        amount: dollar
    });
    setDes('');
}
```
- If someone submit this form, the page gets reload again, to avoid this we use event.preventDefault();
- setDes('') This will reset the "des" on each submit so that if someone double clicks it would not submit again the same transaction.

## ```<label> and <input>```
- **View details in NewTransaction.js**
```
<label htmlFor="details"><strong>Description</strong></label><br />
<input 
    type="text"
    id="details"
    placeholder="Detail of Transaction"
    value={des}
    onChange={ (event)=> setDes(event.target.value)}
    required="required"
/>
```
- input="text" => we can only write text
- id="detail" => to match the label. We have assign same text in ```<label>``` htmlFor="details"
- placeholder="Detail of Transaction" => this is text that we se by default.
- value={des} => value means it assigns value equals to des. This is used to reset the text.
- onChange={} => is used whenever there is change in input field it saves that in "event.target.value"
- required => means this field is required till then the form will not submit.

## onChange={ (event)=> setDollar(Number(event.target.value))}
- Number() because by default if we input it takes it as a string.