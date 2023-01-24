import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main';
import { BookPage } from './pages/book';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/business-books' element={<MainPage />} />
        <Route path='/detectives' element={<MainPage />} />
        <Route path='/children-books' element={<MainPage />} />
        <Route path='/foreign-literature' element={<MainPage />} />
        <Route path='/history' element={<MainPage />} />
        <Route path='/classic-literature' element={<MainPage />} />
        <Route path='/psychology-books' element={<MainPage />} />
        <Route path='/computer-literature' element={<MainPage />} />
        <Route path='/culture-and-art' element={<MainPage />} />
        <Route path='/science-and-education' element={<MainPage />} />
        <Route path='/nonfiction-literature' element={<MainPage />} />
        <Route path='/reference-books' element={<MainPage />} />
        <Route path='/fantasy' element={<MainPage />} />
        <Route path='/humorous-literature' element={<MainPage />} />
        <Route path='/book-page' element={<BookPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
