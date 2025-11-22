import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page <code>{location.pathname}</code> does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
