import { Component, ReactNode } from "react";
import rating from '../../../assets/images/card-images/rating-stars.png';
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
                            <p className="book-page__information-rating-value">4.3</p>
                        </div>
                    </div>
                    <div className="book-page__information-detail">
                        <h3 className="book-page__information-detail-title">Подробная информация</h3>
                        <table className="book-page__information-detail-table">
                            <tr>
                                <th>Издательство</th>
                                <td>Питер</td>
                                <th>Жанр</th>
                                <td>Компьютерная литература</td>
                            </tr>
                            <tr>
                                <th>Год издания</th>
                                <td>2019</td>
                                <th>Вес</th>
                                <td>370 г</td>
                            </tr>
                            <tr>
                                <th>Страниц</th>
                                <td>288</td>
                                <th>ISBN</th>
                                <td>978-5-4461-0923-4</td>
                            </tr>
                            <tr>
                                <th>Переплёт</th>
                                <td>Мягкая обложка</td>
                                <th>Изготовитель</th>
                                <td>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</td>
                            </tr>
                            <tr>
                                <th>Формат</th>
                                <td>70х100</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>

        )
    }
}