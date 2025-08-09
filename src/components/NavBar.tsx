import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Se agrupan logo e ítems en un mismo contenedor flex */}
         <div className="navbar-links">
          <Link to="/">🏠 Home</Link>
          <Link to="/posts">🎵 Canciones</Link>
          <Link to="/favoritos">❤️ Favoritos</Link>
        </div>
      </nav>
  );
};

export default NavBar;