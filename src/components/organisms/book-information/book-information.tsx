import { Component, ReactNode } from "react";
import rating from '../../../assets/images/book-page-images/rating.png';
import rating320 from '../../../assets/images/book-page-images/rating-320.png';
import './book-information.css';

export class BookInformation extends Component {

    render(): ReactNode {
        return (
            <div className="container">
                <section className="book-page__information">
                    <div className="book-page__information-rating">
                        <h3 className="book-page__information-rating-title">Рейтинг</h3>
                        <div className="book-page__information-rating-wrapper">
                            <img src={rating} alt="rating stars" className="book-page__information-rating-stars" />
                            <img src={rating320} alt="rating stars" className="book-page__information-rating-stars-320" />
                            <p className="book-page__information-rating-value">4.3</p>
                        </div>
                    </div>
                    <div className="book-page__information-detail">
                        <h3 className="book-page__information-detail-title">Подробная информация</h3>
                        <div className="book-page__information-detail-tables">
                            <table className="book-page__information-detail-table">
                                <colgroup>
                                    <col className="book-page__information-detail-table-first-col" />
                                    <col className="book-page__information-detail-table-second-col" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>Издательство</th>
                                        <td>Питер</td>
                                    </tr>
                                    <tr>
                                        <th>Год издания</th>
                                        <td>2019</td>
                                    </tr>
                                    <tr>
                                        <th>Страниц</th>
                                        <td>288</td>
                                    </tr>
                                    <tr>
                                        <th>Переплёт</th>
                                        <td>Мягкая обложка</td>
                                    </tr>
                                    <tr>
                                        <th>Формат</th>
                                        <td>70х100</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="book-page__information-detail-table">
                                <colgroup>
                                    <col className="book-page__information-detail-table-first-col" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>Жанр</th>
                                        <td>Компьютерная литература</td>
                                    </tr>
                                    <tr>
                                        <th>Вес</th>
                                        <td>370 г</td>
                                    </tr>
                                    <tr>
                                        <th>ISBN</th>
                                        <td>978-5-4461-0923-4</td>
                                    </tr>
                                    <tr>
                                        <th>Изготовитель</th>
                                        <td>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}