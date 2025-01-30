import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/landingPage/LandingPage';
import ListPage from '@/pages/listPage/ListPage';
import MyPage from '@/pages/myPage/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
