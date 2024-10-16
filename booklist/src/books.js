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

//import values from directory
import img1 from './IMG/book-1.jpg';
import img2 from './IMG/book-2.jpg';
import img3 from './IMG/book-3.jpg';

// List of props
// Apply the "export" kw for const to be used in other pages
export const books = [
  {
    id: 1,
    img: img1,
    title: "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)",
    author: "Rebecca Yarros",
  },
  {
    id: 2,
    img: img2,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 3,
    img: img3,
    title: "War",
    author: "Bob Woodward",
  },
];
