import './App.css';
import Images from './pages/Images';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Images />} />
      <Route exact path='/cart' element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
