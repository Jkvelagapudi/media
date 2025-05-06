import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#2c3e50', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Weed News
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link>
          <Link to="/articles" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Articles</Link>
          <Link to="/updates" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Updates</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
