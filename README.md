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
    return <h2>My First Component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
```