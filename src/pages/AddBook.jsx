import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    coverUrl: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5) {
        newErrors.rating = 'Rating must be a number between 0 and 5';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook = {
      id: Date.now(), // Simple ID generation
      ...formData,
      rating: parseFloat(formData.rating),
      coverUrl: formData.coverUrl || `https://placehold.co/150x200?text=${encodeURIComponent(formData.title)}`,
    };

    dispatch(addBook(newBook));
    navigate('/books');
  };

  return (
    <div className="add-book-page">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Mystery">Mystery</option>
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>
        <div>
          <label>Cover Image URL (Optional):</label>
          <input type="text" name="coverUrl" value={formData.coverUrl} onChange={handleChange} placeholder="https://example.com/image.jpg" />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" name="rating" step="0.1" value={formData.rating} onChange={handleChange} />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
