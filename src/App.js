
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Home />} />
          <Route path='*' element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
