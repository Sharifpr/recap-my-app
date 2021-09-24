import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
            </div>
            <div>
                <nav className="nav-bar">
                    <a href="/shop">Shop</a>
                    <a href="/Order Review">Order Review</a>
                    <a href="/Manage Inventory here">Manage Inventory here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;