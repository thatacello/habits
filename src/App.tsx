import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Interesses from './pages/Interesses';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/interesses" element={<Interesses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
