import { createSlice } from '@reduxjs/toolkit';
import TGG from '../assets/img/TGG.jpg';
import Sapiens from '../assets/img/Sapiens.jpg';
import Dune from '../assets/img/Dune.jpg';
import TDVC from '../assets/img/TDVC.png';
import _1984 from '../assets/img/1984.jpg';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.',
      rating: 4.5,
      coverUrl: TGG,
    },
    {
      id: 2,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A book that explores the history of humankind from the Stone Age to the twenty-first century.',
      rating: 4.8,
      coverUrl: Sapiens,
    },
    {
      id: 3,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      description: 'A science fiction novel set in a distant future amidst a feudal interstellar society.',
      rating: 4.7,
      coverUrl: Dune,
    },
    {
      id: 4,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      category: 'Mystery',
      description: 'A mystery thriller novel that follows Robert Langdon as he investigates a murder in the Louvre.',
      rating: 4.2,
      coverUrl: TDVC,
    },
    {
      id: 5,
      title: '1984',
      author: 'George Orwell',
      category: 'Fiction',
      description: 'A dystopian social science fiction novel and cautionary tale.',
      rating: 4.9,
      coverUrl: _1984,
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Action to add a new book to the list
    addBook: (state, action) => {
      // Add the new book to the beginning of the array
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
