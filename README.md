# Online Library System

This is a React application for an Online Library System, built with Vite and Redux Toolkit.

## Project Repo
https://github.com/AdityaGaikar91/online-library-system

## Features

- **Home Page**: Welcome message, book categories, and popular books.
- **Browse Books**: View all books, filter by category, and search by title or author.
- **Book Details**: View detailed information about a specific book.
- **Add Book**: Add a new book to the library (managed by Redux).
- **404 Page**: Custom error page for invalid URLs.

## Technologies Used

- React
- Vite
- Redux Toolkit (State Management)
- React Router DOM (Routing)
- CSS (Styling)

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

- `src/components`: Reusable components like Navbar.
- `src/pages`: Page components (Home, BrowseBooks, BookDetails, AddBook, NotFound).
- `src/redux`: Redux store and slices.
- `src/App.jsx`: Main application component with routing configuration.
- `src/main.jsx`: Entry point rendering the App wrapped in Redux Provider.
