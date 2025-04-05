import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import StopPage from './StopPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stop/:id" element={<StopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
