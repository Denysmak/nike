import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Congratulations from './pages/Congratulations';
import Presents from './pages/Presents';
import Entrega from './pages/Entrega'
import useUTMPreserve from './useUTMPreserve';

function MainRoutes() {
  useUTMPreserve();
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/congratulations" element={<Congratulations />} />
      <Route path="/presents" element={<Presents />} />
      <Route path="/entrega" element={<Entrega />} />
    </Routes>
  )
}

export default MainRoutes