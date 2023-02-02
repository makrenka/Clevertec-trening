import { HandySvg } from 'handy-svg';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import userAvatar from '../../../assets/images/user-avatar.jpg';
import hamburger from '../../../assets/images/icons/hamburger.svg';
import './header.css';

export const Header = () => (
    <div className='container'>
        <header className="header">
            <div className='header__link'>
                <Link to="/">
                    <img src={logo} alt="logo" className='header__logo' />
                </Link>
            </div>
            <HandySvg
                src={hamburger}
                className="header__hamburger"
                width="32"
                height="32"
            />
            <h1 className='header__heading'>Библиотека</h1>
            <div className='header__user'>
                <p className='header__user-text'>Привет, Иван!</p>
                <img src={userAvatar} alt="avatar" className='header__user-avatar' />
            </div>
        </header>
    </div>
)