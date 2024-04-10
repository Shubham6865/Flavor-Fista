import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import RoutesConfig from './Components/AppRoutes/AppRoutes';
import Footer from './Pages/Footer/Footer';

const USER_TYPES = {
  PUBLIC_USER: 'Public User',
  NORMAL_USER: 'Normal User',
  ADMIN_USER: 'Admin User'
};

const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar currentUserType={CURRENT_USER_TYPE} />
        <RoutesConfig currentUserType={CURRENT_USER_TYPE} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
