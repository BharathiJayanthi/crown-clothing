import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className="header">
    <Link className="logo-container" to='/'>
    <Logo className="logo" />
    </Link>
    <div className="options">
    <Link className="option" to='/shop'>Shop</Link>
    <Link className="option" to='/shop'>Contact</Link>
    <Link className="option" to='/signin'>SignIn</Link>
    </div>
    </div>

)

export default Header;