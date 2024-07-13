//Library assets
import React from 'react'
import ReactDOM from 'react-dom/client'

// Project assets
import './CSS/index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

// Elements with place holders
/*
const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title </h2>;
const Author = () => <h2>Author</h2>;
*/

// Elements with the proper data
//const Image = () => <img src = "https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg" alt = "N1_Best_Seller"></img>; Fetching external URL
const Image = () => <img src = './IMG/book-1.jpg' alt = "N1_Best_Seller"></img>
const Title = () => <h4>Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)</h4>;
// Add inline styling with JSX
const Author =  () => <h4 style = {{color: '#617d98', fontSize:'0.75', marginTop: '0.5rem'}} >Rebecca Yarros</h4>
// Alternative where the styling options are nested
/*  const Author = () => {
      const inLineHeadingStyles = {
          color: '#617d98',
          fontSize: '0.75rem',
          marginTop: '0.5rem',
      };
      return <h4 style = {inLineHeadingStyles}>Rebecca Yarros</h4>;
    };
   */

// Fetch root element in HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the component from the first layer
root.render(<BookList />);