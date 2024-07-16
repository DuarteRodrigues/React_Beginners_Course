//Library assets
import React from 'react'
import ReactDOM from 'react-dom/client'

// Project assets
import './CSS/index.css'

// Props
/// Individual Props
/*
const img = './IMG/book-1.jpg';
const title = 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)';
const author = 'Rebecca Yarros';
*/

/// Structures of props
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

// Parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
// Call
someFunc('job', 'developer'); // Output: Hello World

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

function BookList() {
  return (
    <section className='booklist'>
      <Book 
          img = {firstBook.img} 
          title = {firstBook.title} 
          author = {firstBook.author.toUpperCase()}
        /> 
      <Book
          img = {secondBook.img} 
          title = {secondBook.title} 
          author = {secondBook.author.toUpperCase()}
        />
      <Book />
      <Book />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  // Create the 'const' type objects inside the function when using props
  const Image = () => <img src= {props.img} alt = {props.title}></img>
  const Title = () => <h2>{props.title}</h2>;
  // Add inline styling with JSX
  const Author = () => {
    const inLineHeadingStyles = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
    };
    return <h4 style = {inLineHeadingStyles}>{props.author}</h4>;
  };
  // Call for all the elements to be from the book to be shown
  return (
    <article className='book'>
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
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the component from the first layer
root.render(<BookList />);