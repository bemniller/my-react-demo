import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from "./car.js";
var age = 100;

const showAge = <h2>{age}</h2>;

const fragment = (
  <>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </>
)

const myFirstElement = <h1>Hello React!</h1>

const myelement = (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </tbody>
  </table>
);

const combinedElement = (
  <div>
    {<Car/>}
    {fragment}
    {showAge}
    {myFirstElement}
    {myelement}
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(combinedElement)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
