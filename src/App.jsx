import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  // Check if the current path is a 404 page (or any undefined route that renders NotFound)
  // However, since NotFound is a catch-all, we can't easily know if it's a 404 just by path unless we match against known paths.
  // A better approach for the requirement "The 404 page... should not include the Header component" is to render Navbar only if the route is valid.
  // But React Router v6 makes this a bit tricky if we want a catch-all.
  // Alternatively, we can put Navbar inside the route elements or use a layout route.
  // Let's use a layout route for valid pages and a separate route for 404.
  
  return (
    <>
      {/* This layout approach might be complex with the 404 requirement. 
          Let's try checking if the path matches the 404 route? No, 404 is *any* other route.
          Let's use a wrapper component that renders Navbar only if we are not in a 404 state?
          Actually, the easiest way is to have a Layout component for valid routes and standalone for 404.
      */}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        {/* Route for Browse Books (All) */}
        <Route path="/books" element={<><Navbar /><BrowseBooks /></>} />
        {/* Route for Browse Books (Filtered by Category) */}
        <Route path="/books/:category" element={<><Navbar /><BrowseBooks /></>} />
        {/* Route for Book Details */}
        <Route path="/book/:id" element={<><Navbar /><BookDetails /></>} />
        {/* Route for Add Book Page */}
        <Route path="/add-book" element={<><Navbar /><AddBook /></>} />
        {/* Catch-all Route for 404 Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
