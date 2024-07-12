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
- In pretended directory, type 'npx create-react-app@latest "ProjectName"' in cmd
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

- React Developer Tools (Google Chrome)
    - Download the 'React Developer Tools' extension in the Chrome Web Store page -> https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
    - Inspect elements in your webapp to find the 'Components' tab, which will help you understand the structure of the elements in the page and help you troubleshoot any problem you might come across!

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

```js
return <React.Fragment>...rest of the return </React.Fragment>;

// Shorthand

return <>...rest of the return</>;
```

- camelCase property naming convention
```js
return (
    <div tabIndex={1}>
        <button onClick = {myFunction}> Click Me </button>
        <label htmlFor = 'name'>Name</label>
        <input readOnly = {true} id = 'name'/>
    </div>
)
// in HTML
<div tabindex = "1">
    <button onclick = "myFunction()"> Click Me </button>
    <label for = "name">Name</label>
    <input readonly = "true" id = "name"/>
</div>
```

- className instead of class

```js
return <div className = 'someValue'>Hello</div>;
```

- close every element

```js
return <img />;
// or
return <input />;
```

### Nest Components
```js
const Greeting = () => {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
};

const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};
```

## Book list App

- Create a new react app with 'npx create-react-app@latest "booklist"'.
- In the app's directory, delete all files in the 'src folder, except for 'index.js'.
- Start the app with 'npm start' when in the app's directory.
- In 'index.js', write the following code:
```js
import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => <h2>Author</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
```

- In your search engine, type 'amazon best selling books'
- [Amazon Best Sellers] (https://www.amazon.com/Best-Sellers-Books/zgbs/books)
- DO NOT BUY ANYTHING !!!
- NOT AN AFFILIATE LINK !!!
- Choose a book
- Copy image, title and author

```js
const Image = () => <img src = "https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg" alt = "N1_Best_Seller"></img>;
const Title = () => <h4>Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)</h4>;
const Author =  () => <h4>Rebecca Yarros</h4>
```