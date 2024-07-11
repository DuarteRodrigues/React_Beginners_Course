import React from 'react';
import ReactDOM from 'react-dom/client';

// Determine what is to be rendered inside the root element
// utilize this one rather than React.createElement, just so you're not calling functions inside functions
/*const Greeting = () => {
    return (
    <div>
        <div>
            <h3>Hello people</h3>
            <ul>
                <li>
                    <a href="#">Hello World</a>
                </li>
            </ul>
        </div>
        <h2>Hello World</h2>
    </div>
    );
};*/

// This is the same as the above, but with JSX, removing the parent element from inspection
// In JSX, classes are declared via 'className = '' right after the element reference'
const Greeting = () => {
    return (
    <React.Fragment>
        <div className='someValue'> 
            <h3>Hello people</h3>
            <ul>
                <li>
                    <a href="#">Hello World</a>
                </li>
            </ul>
        </div>
        <h2>Hello World</h2>
    </React.Fragment>
    );
};

// Another way to render elements
/*const Greeting = () => {
    return React.createElement('h2', {}, 'Hello World')
};*/

// Fetch the element inside the document 
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the pre-determined elements inside the root element in the document
root.render(<Greeting />);
