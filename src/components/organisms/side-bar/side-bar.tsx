import { Component, MouseEventHandler, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './side-bar.css';

export class SideBar extends Component {

    static onShowcase(evt: MouseEvent) {
        const target = evt.target as HTMLElement;
        const itemLink = target.closest('.side-bar__books-item');
        const showcaseLink = document.querySelector('.books-showcase-link');
        if (itemLink) {
            showcaseLink?.classList.add('active');
        }
    }

    componentDidMount() {
        document.addEventListener('click', SideBar.onShowcase)
    }

    render(): ReactNode {
        return (
            <aside className="side-bar">
                <nav className='side-bar__nav'>
                    <ul className="side-bar__pages-list">
                        <li className="side-bar__pages-item books-showcase">
                            <NavLink to="/books/all" className="books-showcase-link">Витрина книг</NavLink>
                        </li>

                        <ul className="side-bar__books-list">
                            <li className="side-bar__books-item">
                                <NavLink to="/books/all">Все книги</NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/business-books">Бизнес-книги<span>14</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/detectives">Детективы<span>8</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/children-books">Детские книги<span>14</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/foreign-literature">Зарубежная литература<span>2</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/history">История<span>5</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/classic-literature">Классическая литература<span>12</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/psychology-books">Книги по психологии<span>11</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/computer-literature">Компьютерная литература<span>54</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/culture-and-art">Культура и искусство<span>5</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/science-and-education">Наука и образование<span>2</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/nonfiction-literature">Публицистическая литература<span>0</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/reference-books">Справочники<span>10</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/fantasy">Фантастика<span>12</span></NavLink>
                            </li>
                            <li className="side-bar__books-item">
                                <NavLink to="/books/humorous-literature">Юмористическая литература<span>8</span></NavLink>
                            </li>
                        </ul>

                        <li className="side-bar__pages-item">
                            <NavLink to="/terms">Правила пользования</NavLink>
                        </li>
                        <li className="side-bar__pages-item">
                            <NavLink to="/contract">Договор оферты</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}
