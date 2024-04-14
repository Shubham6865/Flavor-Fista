import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import FoodGallary from '../../Pages/FoodGallary/FoodGallary';
import About from '../../Pages/About/About';
import User from '../../Pages/User/User';
import Admin from '../../Pages/Admin/Admin';
import PopUp from '../PopUp/PopUp';
import Cart from '../Cart/Cart';

const RoutesConfig = ({ currentUserType }) => (
    <Routes>
        <Route path="/" element={<PublicElement><Home /></PublicElement>} />
        <Route path="/foodgallary" element={<PublicElement><FoodGallary /></PublicElement>} />
        <Route path="/about" element={<PublicElement><About /></PublicElement>} />
        <Route path="/user" element={<UserElement currentUserType={currentUserType}><User /></UserElement>} />
        <Route path="/cart" element={<UserElement currentUserType={currentUserType}><Cart /></UserElement>} />
        <Route path="/admin" element={<AdminElement currentUserType={currentUserType}><Admin /></AdminElement>} />
        <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
);

function PublicElement({ children }) {
    return <>{children}</>;
}

function UserElement({ children, currentUserType }) {


    if (currentUserType === 'Admin User' || currentUserType === 'Normal User') {
        return <>{children}</>;
    } else {
        return (
            <PopUp />
        );
    }
}

function AdminElement({ children, currentUserType }) {
    if (currentUserType === 'Admin User') {
        return <>{children}</>;
    } else {
        return <PopUp />;
    }
}

export default RoutesConfig;
