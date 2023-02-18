import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import './mobile-menu.css';

export interface Props {
    onOpen: boolean;
}

export class MobileMenu extends Component<Props, { openNavBar: boolean }, { props: any }> {
    constructor(props: any) {
        super(props);
        this.openCategories = this.openCategories.bind(this);
        this.updateActivePath = this.updateActivePath.bind(this);
    }

    state = {
        activePathName: window.location.href,
        openNavBar: false,
    }

    openCategories() {
        this.setState(prevState => ({
            ...prevState,
            openNavBar: !prevState.openNavBar,
        }))
    }

    updateActivePath() {
        this.setState(pervState => ({
            ...pervState,
            activePathName: window.location.href,
        }))
    }

    render(): ReactNode {
        return (
            <div
                className={classNames('mobile-menu', { mobilemenu__active: this.props.onOpen })}
                data-test-id='burger-navigation'
            >
                <nav className='side-bar__nav'>
                    <ul className="side-bar__pages-list mobile-menu__pages-list">
                        <li
                            className={classNames("side-bar__pages-item books-showcase mobile-menu__books-showcase", { showcase__active: this.state.activePathName.includes('/books/') })}
                            data-test-id='burger-showcase'
                        >
                            <NavLink
                                to="/books/all"
                                className={classNames("books-showcase-link", { active: this.state.activePathName.includes('/books/') })}
                                onClick={this.updateActivePath}
                            >Витрина книг</NavLink>
                            <button type="button" className="mobile-menu__showcase-btn" onClick={this.openCategories}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className={classNames("mobile-menu__showcase-btn-icon", { showcaseicon__active: this.state.openNavBar })}
                                >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="url(#paint0_linear_15603_2734)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_15603_2734" x1="11.7479" y1="-6.875" x2="-18.3724" y2="34.9297" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#F83600" />
                                            <stop offset="1" stopColor="#F9D423" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        </li>

                        <ul className={classNames("side-bar__books-list", { bookslist__active: this.state.openNavBar })}>
                            <li className="side-bar__books-item" data-test-id='burger-books'>
                                <NavLink
                                    to="/books/all"
                                    onClick={this.updateActivePath}
                                >Все книги</NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/business-books"
                                    onClick={this.updateActivePath}
                                >Бизнес-книги<span>14</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/detectives"
                                    onClick={this.updateActivePath}
                                >Детективы<span>8</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/children-books"
                                    onClick={this.updateActivePath}
                                >Детские книги<span>14</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/foreign-literature"
                                    onClick={this.updateActivePath}
                                >Зарубежная литература<span>2</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/history"
                                    onClick={this.updateActivePath}
                                >История<span>5</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/classic-literature"
                                    onClick={this.updateActivePath}
                                >Классическая литература<span>12</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/psychology-books"
                                    onClick={this.updateActivePath}
                                >Книги по психологии<span>11</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/computer-literature"
                                    onClick={this.updateActivePath}
                                >Компьютерная литература<span>54</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/culture-and-art"
                                    onClick={this.updateActivePath}
                                >Культура и искусство<span>5</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/science-and-education"
                                    onClick={this.updateActivePath}
                                >Наука и образование<span>2</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/nonfiction-literature"
                                    onClick={this.updateActivePath}
                                >Публицистическая литература<span>0</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/reference-books"
                                    onClick={this.updateActivePath}
                                >Справочники<span>10</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/fantasy"
                                    onClick={this.updateActivePath}
                                >Фантастика<span>12</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink
                                    to="/books/humorous-literature"
                                    onClick={this.updateActivePath}
                                >Юмористическая литература<span>8</span></NavLink>
                            </li>
                        </ul>

                        <li className="side-bar__pages-item" data-test-id='burger-terms'>
                            <NavLink
                                to="/terms"
                                onClick={this.updateActivePath}
                            >Правила пользования</NavLink>
                        </li>
                        <li className="side-bar__pages-item" data-test-id='burger-contract'>
                            <NavLink
                                to="/contract"
                                onClick={this.updateActivePath}
                            >Договор оферты</NavLink>
                        </li>
                    </ul>
                    <ul className="mobile-menu__user-list">
                        <li className="mobile-menu__user-list-item">
                            <NavLink
                                to="/profile"
                                onClick={this.updateActivePath}>
                                Профиль
                            </NavLink>
                        </li>
                        <li className="mobile-menu__user-list-item">
                            <NavLink
                                to="/"
                                onClick={this.updateActivePath}>
                                Выход
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}