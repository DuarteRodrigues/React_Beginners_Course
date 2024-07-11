# React Beginners Course

This repository is meant to store the code developed during the React Beginners Course taught in this video: https://www.youtube.com/watch?v=2-crBg6wpp0

For React documentation: https://reactjs.org/docs/getting-started.html

How to get the most out of this course? 

    - "The easy way is the hard way" 
        - Learn by doing 
        - Avoid "Tutorial Hell"
        - This isn't school

    - Spaced learning & repetition
        - Don't binge the course
        - Take frequent breaks
        - Re-watch past lessons

What you should already know

- HTML
- CSS
- JavaScript

Tools
- NodeJS

Instructor

- John Smilga: @CodingAddict
- Duration: 18h


## Creating a WebApp
- Install NodeJS
- In pretended directory, type 'npx create-react-app@latest "ProjectName" in cmd'
- After installation, cd to app directory and type 'npm start'

### Creating First Component
```js
function Greeting() {
    return <h2>My First Component</h2>;
}

// Arrow function also works

const Greeting = () => {
    return <h2>My First Component</h2>;
};
```

- Starts with capital letter
- Must return JSX (html)
- Always close tag <Greeting/>

### Typical Component
```js
// imports or logic
const Greeting = () => {
    // We want to start our components with capital letters
    return <h2>My First Component</h2>;
};
export default Greeting;
```
### Root Component (only one)

in index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

const Greeting = () => {
    // We want to start our components with capital letters
    return <h2>My First Component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
```

### Extensions

To get the most out of your environment when developing a react app, you might want to get the following VSC extensions:

 - Prettier: Used for formatting code
 - ES7 + React/Redux/React-Native snippets: snippets used to call already structured functions to use in the code.
    - React code snippets include:
        - rafce: ReactArrowFunctionExportComponent
        - rafc: ReactArrowFunctionComponent
        - rfce: ReactFunctionalExportComponent

### First Component in Detail

- Capital letter
- Must return something
- JSX syntax (return html)
    - To make our lives easier
    - Calling function under the hood

### JSX Rules

- Always return single element
- Use HTML semantics to taste, just make sure they are inside the parent component
- Or use fragments if you wish to not use semantic elements or '<div>' elements:

'''js
return <React.Fragment>...rest of the return </React.Fragment>;

// Shorthand

return <>...rest of the return</>