import { Component, ReactNode } from 'react';
import './side-bar.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props { }
export interface State {
    activePath: string;
}

export class SideBar extends Component<Props, State> {
    state: State = {
        activePath: window.location.pathname,
    }

    isActiveLink(path: string) {
        return this.state.activePath === path ? "active-link" : "";
    }

    render(): ReactNode {
        return (
            <aside className="side-bar" data-test-id="side-bar">
                <h2 className="side-bar__heading">Витрина книг</h2>
                <ul className="side-bar__books-list">
                    <li className="side-bar__books-item">
                        <a href="/" className={this.isActiveLink('/')}>Все книги</a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/business-books" className={this.isActiveLink('/business-books')}>Бизнес-книги<span>14</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/detectives" className={this.isActiveLink('/detectives')}>Детективы<span>8</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/children-books" className={this.isActiveLink('/children-books')}>Детские книги<span>14</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/foreign-literature" className={this.isActiveLink('/foreign-literature')}>Зарубежная литература<span>2</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/history" className={this.isActiveLink('/history')}>История<span>5</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/classic-literature" className={this.isActiveLink('/classic-literature')}>Классическая литература<span>12</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/psychology-books" className={this.isActiveLink('/psychology-books')}>Книги по психологии<span>11</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/computer-literature" className={this.isActiveLink('/computer-literature')}>Компьютерная литература<span>54</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/culture-and-art" className={this.isActiveLink('/culture-and-art')}>Культура и искусство<span>5</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/science-and-education" className={this.isActiveLink('/science-and-education')}>Наука и образование<span>2</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/nonfiction-literature" className={this.isActiveLink('/nonfiction-literature')}>Публицистическая литература<span>0</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/reference-books" className={this.isActiveLink('/reference-books')}>Справочники<span>10</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/fantasy" className={this.isActiveLink('/fantasy')}>Фантастика<span>12</span></a>
                    </li>
                    <li className="side-bar__books-item">
                        <a href="/humorous-literature" className={this.isActiveLink('/humorous-literature')}>Юмористическая литература<span>8</span></a>
                    </li>
                </ul>
                <ul className="side-bar__pages-list">
                    <li className="side-bar__pages-item">Правила пользования</li>
                    <li className="side-bar__pages-item">Договор оферты</li>
                </ul>
            </aside>
        )
    }
}
