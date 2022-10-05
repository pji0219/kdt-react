import Profile from './components/10-5/Profile';
import Board from './components/10-5/Board';
import { Routes, Route } from 'react-router-dom';
import Header from './components/10-5/Header';
import NotFound from './components/10-5/NotFound';
import BoardDetail from './components/10-5/BoardDetail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:boardID' element={<BoardDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
