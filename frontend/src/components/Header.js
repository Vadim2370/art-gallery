import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';
import Avatar from './Avatar';

function Header({ loggedIn, handleLogOut, userName }) {
  const location = useLocation();

  function HeaderLink() {
    return (
      <Link
        to={location.pathname === '/sign-in' ? '/sign-up' : '/sign-in'}
        className="header__button"
      >
        {location.pathname === '/sign-in' ? 'Регистрация' : 'Войти'}
      </Link>
    );
  }

  function HeaderNav() {
    return (
      <nav className="header__nav">
        <p className="header__email">{userName}</p>
        <button className="header__exit-button" onClick={handleLogOut}>
          Выйти
        </button>
      </nav>
    );
  }

  return (
    <><header className="header page__section">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      {loggedIn ? <HeaderNav /> : <HeaderLink />}
    </header>
    <section className='main__title'>
    {loggedIn ? <Avatar /> : null}
        <h1 className='main__title_text'>Картины и рисунки Шадриной Екатерины</h1>
      </section></>
  );
}

export default Header;
