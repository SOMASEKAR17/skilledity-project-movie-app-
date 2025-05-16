import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css'
import LandingPage from './pages/landing_page'
import MoviePage from './pages/movie_page'


createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </Router>
)
