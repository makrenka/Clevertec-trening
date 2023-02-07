import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import userAvatar from '../../../assets/images/user-avatar.jpg';
import './header.css';
import { HamburgerButton } from '../../atoms/hamburger';
import { MobileMenu } from '../mobile-menu';

export class Header extends Component<{ props?: any }, { mobileMenuActive: boolean }> {
    constructor(props: any) {
        super(props);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.userCkickOutside = this.userCkickOutside.bind(this);
    }

    state = {
        mobileMenuActive: false,
    }

    toggleMobileMenu() {
        this.setState(prevState => ({
            ...prevState,
            mobileMenuActive: !prevState.mobileMenuActive,
        }));
    }

    userCkickOutside(evt: any) {
        const mobileMenu = evt.target.closest('.mobile-menu');
        const hamburger = evt.target.closest('.header__hamburger');
        const refMobileMenu1 = evt.target.closest('.side-bar__pages-item a');
        const refMobileMenu2 = evt.target.closest('.side-bar__books-item a');
        const refMobileMenu3 = evt.target.closest('.mobile-menu__user-list-item a');
        const mobileMenuIcon = evt.target.closest('.mobile-menu__showcase-btn-icon');
        if (!mobileMenu && !hamburger && !mobileMenuIcon && this.state.mobileMenuActive || refMobileMenu1 || refMobileMenu2 || refMobileMenu3) {
            this.setState(prevState => ({
                ...prevState,
                mobileMenuActive: !prevState.mobileMenuActive,
            }))
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.userCkickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.userCkickOutside);
    }


    render(): ReactNode {
        return (
            <div className='container header__container'>
                <header className="header">
                    <div className='header__link'>
                        <Link to="/">
                            <img src={logo} alt="logo" className='header__logo' />
                        </Link>
                    </div>
                    <HamburgerButton onClick={this.toggleMobileMenu} mobileMenuActive={this.state.mobileMenuActive} />
                    <h1 className='header__heading'>Библиотека</h1>
                    <div className='header__user'>
                        <p className='header__user-text'>Привет, Иван!</p>
                        <img src={userAvatar} alt="avatar" className='header__user-avatar' />
                    </div>
                </header>
                <MobileMenu onOpen={this.state.mobileMenuActive} />
            </div>
        )
    }
} 