import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];
  const books = useSelector((state) => state.books.books);
  
  // Let's assume the first 3 books are "popular" for now, or we could sort by rating.
  // Sorting by rating descending and taking top 3
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="home-page">
      <h1>Welcome to the Online Library</h1>
      <section className="categories-section">
        <h2>Book Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/books/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="popular-books-section">
        <h2>Popular Books</h2>
        <p>Check out our collection of popular books!</p>
        <div className="book-list">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.coverUrl} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
            <Link to="/books" className="view-all-link">View All Books</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
