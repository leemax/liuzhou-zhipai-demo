import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Play from './pages/Play';
import Review from './pages/Review';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}
