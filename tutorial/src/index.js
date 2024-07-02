import React from 'react';
import ReactDOM from 'react-dom/client';

// Determine what is to be rendered inside the root element
const Greeting = () => {
    return <h2>My first component</h2>
};

// Fetch the element inside the document 
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the pre-determined elements inside the root element in the document
root.render(<Greeting />);
