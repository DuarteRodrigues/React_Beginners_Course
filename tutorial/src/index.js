import React from 'react';
import ReactDOM from 'react-dom/client';

// Determine what is to be rendered inside the root element
// utilize this one rather than React.createElement, just so you're not calling functions inside functions
const Greeting = () => {
    return(
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
};

// Another way to render elements
/*const Greeting = () => {
    return React.createElement('h2', {}, 'Hello World')
};*/

// Fetch the element inside the document 
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the pre-determined elements inside the root element in the document
root.render(<Greeting />);