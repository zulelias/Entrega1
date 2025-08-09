import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Pages/Home';
import Posts from './Pages/Posts';
import PostsDetail from './Pages/PostsDetail';
import CreateSong from './Pages/CreateSong';
import NavBar from './components/NavBar';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostsDetail />} />
            <Route path="/favoritos" element={<h1>Favoritos</h1>} />
            <Route path="/create-song" element={<CreateSong />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
