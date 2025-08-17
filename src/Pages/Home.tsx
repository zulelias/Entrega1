// src/pages/Home.tsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '10px 20px',
          borderBottom: '1px solid #ccc',
        }}
      >
          <div style={{ position: 'absolute', top: 20, left: 20 }}>
          <Link to="/">
             <img
              src="/images/logo.jpg"
              alt="Logo"
              style={{ width: 60, cursor: 'pointer' }}
          />
        </Link>
   </div>
      </header>

      <main style={{ textAlign: 'center', marginTop: 40 }}>
        <h1>Bienvenid@ a la App de Música</h1>
        <p>Buena música, buenas experiencias</p>
        <Link to="/posts">Ver posts</Link>
      </main>
    </div>
  );
}

export default Home;