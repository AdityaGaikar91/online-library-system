import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books-page">
      <h1>Browse Books {category && `- ${category}`}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.coverUrl} alt={book.title} className="book-cover" />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
