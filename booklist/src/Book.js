// Book element
const Book = (props) => {
  // Check if values were passed correctly
  // console.log(props);

  // Setup deconstruction
  const { img, title, author, getBook, id } = props;

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

  // Add event to display the title of the books, use it in 'onClick' action to a button
  const displayTitle = () => {
    console.log(title);
  };

  // Setup wrapper to add to the 'onClick' event
  const getSingleBook = () => {
    getBook(id);
  };

  // Call for all the elements to be from the book to be shown
  // Place "<button onClick={getSingleBook}>display book</button>" below "<Title/>" when using the display book data functionality
  return (
    <article className="book">
      <Image />
      <Title />
      <button onClick={getSingleBook}>display book</button>
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
export default Book;
