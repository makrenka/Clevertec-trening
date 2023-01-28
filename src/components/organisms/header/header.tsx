import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import userAvatar from '../../../assets/images/user-avatar.jpg';
import './header.css';

export const Header = () => (
    <div className='container'>
        <header className="header" data-test-id="header">
            <div className='header__link'>
                <Link to="/">
                    <img src={logo} alt="logo" className='header__logo' />
                </Link>
            </div>
            <h1 className='header__heading'>Библиотека</h1>
            <div className='header__user'>
                <p className='header__user-text'>Привет, Иван!</p>
                <img src={userAvatar} alt="avatar" className='header__user-avatar' />
            </div>
        </header>
    </div>
)