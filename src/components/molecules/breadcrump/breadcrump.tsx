import { HandySvg } from "handy-svg";
import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import chevronIcon from '../../../assets/images/icons/icon-chevron.svg';
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
                                <HandySvg
                                    src={chevronIcon}
                                    className="book-page__breadcrump-item-chevron-icon"
                                    width="24"
                                    height="24"
                                />
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