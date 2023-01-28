import { Component, ReactNode } from "react";
import bookPageImg from '../../../assets/images/book-page-images/book-cover.jpg';
import './book-description.css';

export class BookDescription extends Component {

    render(): ReactNode {
        return (
            <div className="container">
                <section className="book-page__description">
                    <img src={bookPageImg} alt="book cover" className="book-page__description-img" />
                    <div className="book-page__description-wrapper">
                        <h2 className="book-page__description-title">
                            Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
                        </h2>
                        <p className="book-page__description-author">Адитья Бхаргава, <span>2019</span></p>
                        <button className="book-page__description-btn" type="button">Забронировать</button>
                        <h3 className="book-page__description-title-about">О книге</h3>
                        <p className="book-page__description-text">
                            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
                            <br />
                            <br />
                            Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}