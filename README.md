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
import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  // We want to start our components with capital letters
  return <h2>My First Component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

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

- ClassName instead of class

```js
return <div className="someValue">Hello</div>;
```

- Close every element

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

### App Structure

```js
import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

- In your search engine, type 'amazon best selling books'
- [Amazon Best Sellers] (https://www.amazon.com/Best-Sellers-Books/zgbs/books)
- DO NOT BUY ANYTHING !!!
- NOT AN AFFILIATE LINK !!!
- Choose a book
- Copy image, title and author

```js
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg"
    alt="N1_Best_Seller"
  ></img>
);
const Title = () => (
  <h4>Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)</h4>
);
const Author = () => <h4>Rebecca Yarros</h4>;
```

### CSS

- To style the React app, create a css file named 'index.css' in the 'src' folder

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f1f5f8;
  color: #222;
}
```

- Import the '.css' file to the '.js' file

```js
import "./index.css";
```

- Complete the '.css' file

```css
.booklist {
  display: grid;
  gap: 2rem;
  margin: 5rem auto;
  max-width: 1170px;
  width: 90vw;
}

.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.book img {
  object-fit: cover;
  width: 100%;
}

.book h2 {
  font-size: 1rem;
  margin-top: 1rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Local Images (Public Folder)

- External images (hosted on a different server) - jsut need an url
- Local images (public folder) - less performant
- Local images (src folder) - better solution for assets, since they get optimized 'under the hood'.
- Save image (Save Image As...)
- Create images folder in public
- Copy/paste image
- Rename(Optional)
- Replace url in the src - './images/imageName.extension'
- './' because assets are on the same server

### JSX - CSS (inline styles)

- Style prop
- {} in JSX means going back to JS Land
- Value is an object with key/value pairs - capitalized and with ''

```js
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75", marginTop: "0.5rem" }}>
    Rebecca Yarros
  </h4>
);
```

- CSS rules still apply (inline vs external css)

```css
.book h4 {
  /* won't work <- This one actually works lol*/
  color: red;
  /* will work */
  letter-spacing: 2px;
}
```

- External libraries use inline css, so if you want to make some changes, reference the library docs and elements tabs

- Alternative option

```js
const Author = () => {
  const inLineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inLineHeadingStyles}>Jordan Moore</h4>;
};
```

- For the most part, multiple approaches are available, so pick the one you think is best
- As long as the result is the same, the approaches come down to personal preference~

### JSX - Javascript

- refactor to single book component (personal preference)
- remove inline CSS

```js
const Book = () => {
  return (
    <article className="book">
      <img src="./IMG/book-1.png" alt="N1_Best_Seller" />
      <h2>Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)</h2>
      <h4>Rebecca Yarros</h4>
    </article>
  );
};
```

```css
.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  letter-spacing: 2px;
}
```

- {} in JSX means going back to JS Land
- Value inside must be an expression (return value), can't be a statement

```js
const Book = () => {
  const Title = "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)"; //<- These values can be declared outside the function
  const Author = "Rebecca Yarros";
  return (
    <article className="book">
      <Image />
      <h2>{Title}</h2>
      <h4>{Author}</h4>
    </article>
  );
};
```

### Props - Initial Setup

- Refractor/clean up

```js
const author = "Rebecca Yarros";
const title = "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)";
const img = "./IMG/book-1.jpg";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
```

- Test the values to put in the elements before sending them

```js
// Parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
// Call
someFunc("Hello", "World"); // Output: Hello World
```

- Utilize props to call different values to the elements

```js
// Declare prop values
const img = "./IMG/book-1.jpg";
const title = "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)";
const author = "Rebecca Yarros";

// Declare the props for each element
function BookList() {
  return (
    <section className="booklist">
      <Book img={img} title={title} author={author.toUpperCase()} />
      <Book img={img} title={title} author={author.toUpperCase()} />
      <Book />
      <Book />
    </section>
  );
}

// Declare what props are used on what elements
const Book = (props) => {
  console.log(props);
  // Create the 'const' type objects inside the function when using props
  const Image = () => <img src={props.img} alt={props.title}></img>;
  const Title = () => <h2>{title}</h2>;
  // Add inline styling with JSX
  const Author = () => {
    const inLineHeadingStyles = {
      color: "#617d98",
      fontSize: "0.75rem",
      marginTop: "0.5rem",
    };
    return <h4 style={inLineHeadingStyles}>{props.author}</h4>;
  };
  // Call for all the elements to be from the book to be shown
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
```

### Props - More Dynamic Setup

- Setup an object
- Refactor vars to properties
- Copy/paste and rename
- Get values for second book
- Setup Props

```js
const firstBook = {
  img: "./IMG/book-1.jpg",
  title: "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)",
  author: "Rebecca Yarros",
};

const secondBook = {
  img: "./IMG/book-2.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author.toUpperCase()}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author.toUpperCase()}
      />
    </section>
  );
}
```

### Props - Multiple Approaches

- The approaches are up to choice and the project you wish to develop
- Destructuring in Vanilla JS
- Saves time/typing
- Pull out the properties
- Don't need to reference objects anymore

```js
const someObject = {
  name: "john",
  job: "developer",
  location: "florida",
};

// Instead of doing this
console.log(someObject.name);

// Do this
const { name, job, location } = someObject;
console.log(job);
```

- No need for all the 'props.propName'
- Destructure inside component

For our case, we will use the following deconstruction:

```js
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
```

### Children Prop

- Everything we render between component tags
- During the course we will mostly use children props for Context API
- Special prop, has to be "children"
- Can be placed anywhere in JSX

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author.toUpperCase()}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button>Click me!</button>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author.toUpperCase()}
      ></Book>
    </section>
  );
}
```

Set it up as one of the props

```js
// Book element
const Book = (props) => {
  // Setup deconstruction
  const { img, title, author, children } = props;

  // ...

  // Call for all the elements to be from the book to be shown
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      {children}
    </article>
  );
};
```

### Simple List

- Refactor

```js
const books = [
  {
    img: "./IMG/book-1.jpg",
    title: "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)",
    author: "Rebecca Yarros",
  },
  {
    img: "./IMG/book-2.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
];
```

- Map - creates a new array from calling a function for every array element.

```js
const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});

function BookList() {
  return <section className="booklist">{newNames}</section>;
}
```

### Proper List

- Remove names and newNames

```js
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);

        //return 'hello';
        return (
          <div>
            <h2>{book.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
```

### Key Prop

- Typically, it will be an ID

```js
const books = [
  {
    id: 1,
    img: "./IMG/book-1.jpg",
    title: "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)",
    author: "Rebecca Yarros",
  },
  {
    id: 2,
    img: "./IMG/book-2.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
];
```

- Typically, you'll see 'list.map((element, index) => {' frequently in other people's code, however, it is not advised to use that technique

### Events - Fundamentals

- Vanilla JS

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // access event object
  // do something when event starts
});
```

- Similar approach
- Element, event, function
- Again camelCase

```js
const Eventexamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- [React Events] (https://reactjs.org/docs/events.html)
- There is no need to memorize React Events
- Most common
  - onClick (click events)
  - onSubmit (submit form)
  - onChange (input change)

```js
// Mapping values inside an array
function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        console.log(book);
        const { id, img, title, author } = book;
        return (
          <Book
            img={img}
            title={title}
            author={author.toUpperCase()}
            key={id}
          ></Book>
        );
      })}
    </section>
  );
}

//Event Element
const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonInput = () => {
    alert("handle button input");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>
      </form>
      <button onClick={handleButtonInput}>click me</button>
    </section>
  );
};
```

### Events - Object and Form Submission

This allows us to retrieve the data from the form

```js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name: ${e.target.name}`);
    console.log(`Input Value: ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/*add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>
      </form>
      <button onClick={handleButtonInput}>click me</button>
    </section>
  );
};
```

### Events - Form Gotcha

- OnSubmit is reserved for 'form' tags and onClick is reserved for clickable elements

```js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name: ${e.target.name}`);
    console.log(`Input Value: ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/*add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonInput}>click me</button>
    </section>
  );
};
```

- Alternative approach

```js
  <button type='submit' onClick={handleFormSubmission}>
  submit form
  </button>
```