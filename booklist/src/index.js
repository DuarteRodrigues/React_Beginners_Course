//Library assets
import React from "react";
import ReactDOM from "react-dom/client";

// Project assets
import "./CSS/index.css";

// Props
/// Individual Props
/*
const img = './IMG/book-1.jpg';
const title = 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)';
const author = 'Rebecca Yarros';
*/

/// Structures of props
/*
const firstBook = {
  img: './IMG/book-1.jpg',
  title: 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)',
  author: 'Rebecca Yarros'
}

const secondBook = {
  img: './IMG/book-2.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}
*/

/// List of props
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

// Parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};

// Call
someFunc("job", "developer"); // Output: Hello World

// Elements with place holders
/*
const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title </h2>;
const Author = () => <h2>Author</h2>;
*/

// Elements with the proper data
/*
const Image = () => <img src = "https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg" alt = "N1_Best_Seller"></img>; Fetching external URL
const Image = () => <img src = {img} alt = {title}></img> <- Using  variables with the intended values
const Title = () => <h2>{title}</h2>;
*/

// Add inline styling with JSX
//const Author =  () => <h4 style = {{color: '#617d98', fontSize:'0.75', marginTop: '0.5rem'}}>{author.toUpperCase()}</h4>

// Alternative where the styling options are nested
/*  
const Author = () => {
  const inLineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75',
    marginTop: '0.5rem',
  };
  return <h4 style = {inLineHeadingStyles}>Rebecca Yarros</h4>;
};
*/

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
  const handleFormInput = (e) => {
    // console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form input");
  };

  const handleButtonInput = () => {
    alert("handle button input");
  };

  const HandleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={HandleFormSubmission}>
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

// Book element
const Book = (props) => {
  // Check if values were passed correctly
  console.log(props);

  // Setup deconstruction
  const { img, title, author } = props;

  // Create the 'const' type objects inside the function when using props
  const Image = () => <img src={img} alt={title}></img>;
  const Title = () => <h2>{title}</h2>;
  // Add inline styling with JSX
  const Author = () => {
    const inLineHeadingStyles = {
      color: "#617d98",
      fontSize: "0.75rem",
      marginTop: "0.5rem",
    };
    return <h4 style={inLineHeadingStyles}>{author}</h4>;
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

//Using JSX to render elements
/*
const Book = () => {
  const Title = "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)"; <- These values can be declared outside the function
  const Author = "Rebecca Yarros";
  return (
    <article className='book'>
      <Image />
      <h2>{Title}</h2>
      <h4>{Author.toUpperCase()}</h4>
    </article>
  );
};
*/

// Fetch root element in HTML file
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component from the first layer
root.render(<BookList />);
