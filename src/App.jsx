import { Routes,Route } from 'react-router-dom';

//import './scss/reset.scss';
//import './scss/base.scss';

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;