import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const p1 = React.createElement("p", {id : "firstPara"}, "This is paragraph one");

//const li1 = React.createElement("li", null, "first item");
//const li2 = React.createElement("li", null, "second item");
//const myList = React.createElement("ul", null, [li1,li2]);

//const div = React.createElement("div", null, [p1, myList]);

const myName = "Anna";

const div = <div>
  <p style={{color : "#f00"}}> This is paragraph 1 </p>
  <p> Welcome {myName} </p>
  <p> two plus two = {2+2} </p>
  <ul className="SmallList">
    <li> First Item</li>
    <li>Second Item</li>
    </ul>
    <br />
    <input id="name" />
</div>;


ReactDOM.render(<App />, document.getElementById("root"));

/*
//
const names = ["Simon","Tom", "Sally","Emma"];
const moreNames = [...names, "Diane"];

//Destructing
type CustomerType = {name : string, age : number, email : string}
const customer1 : CustomerType = {name : "Simon", age : 23, email : "simon@nowhere.com"};
const {name, age, email} = customer1
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
