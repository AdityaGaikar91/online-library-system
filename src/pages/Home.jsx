import { Link } from 'react-router-dom';

const Home = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];

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
        <Link to="/books">View All Books</Link>
      </section>
    </div>
  );
};

export default Home;
