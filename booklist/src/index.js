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
const Author =  () => <h4>Rebecca Yarros</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);