import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/landingPage/LandingPage';
import ListPage from '@/pages/listPage/ListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
