import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return <div>Book not found! <Link to="/books">Back to Browse</Link></div>;
  }

  return (
    <div className="book-details-page">
      <div className="book-details-content">
        <img src={book.coverUrl} alt={book.title} className="book-cover-large" />
        <div className="book-info">
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Rating:</strong> {book.rating}</p>
          <Link to="/books" className="back-button">Back to Browse</Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
