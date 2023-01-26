import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import './breadcrump.css';

export class Breadcrump extends Component {

    render(): ReactNode {
        return (
            <div className="book-page__breadcrump-wrapper">
                <div className="container">
                    <nav className="book-page__breadcrump">
                        <ul className="book-page__breadcrump-list">
                            <li className="book-page__breadcrump-item">
                                <Link to="/" className="book-page__breadcrump-link">
                                    Бизнес книги
                                </Link>
                                <p className="book-page__breadcrump-text-sep">/</p>
                            </li>
                            <li className="book-page__breadcrump-item">
                                <p className="book-page__breadcrump-text">
                                    Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}