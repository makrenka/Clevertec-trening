import { Component, ReactNode } from "react";
import { ListCard } from '../../molecules/list-card';
import cardImage from '../../../assets/images/card-images/card-image.jpg';
import cardImageNone from '../../../assets/images/card-images/card-image-none.png';
import './main-page-list-content.css';

export class MainPageListContent extends Component {

    state = {
        books: [
            {
                id: "/books/:category/1",
                title: "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих",
                poster: cardImage,
                author: "Адитья Бхаргава, ",
                year: "2019",
                review: true,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/2",
                title: "Программирование на JAVA",
                poster: cardImage,
                author: "Патрик Нимейер, Дэниэл Леук, ",
                year: "2013",
                review: true,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/3",
                title: "Как создать сайт. Комикс-путеводитель по HTML, CSS и WordPress",
                poster: cardImage,
                author: "Джи Ким, Нейт Купер, ",
                year: "2019",
                review: true,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/4",
                title: "HTML5 и CSS3. Разработка сайтов для любых браузеров и устройств",
                poster: cardImage,
                author: "Бен Фрейн, ",
                year: "2014",
                review: true,
                btnClass: "main-page__content-list-card-btn-booked",
                btnText: "Забронирована",
            },
            {
                id: "/books/:category/5",
                title: "Adobe Flash. Создание аркад, головоломок и других игр с помощью ActionScript",
                poster: cardImageNone,
                author: "Гэри Розенцвейг, ",
                year: "2009",
                review: false,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/6",
                title: "Грокаем алгоритмы. Иллюстрированное",
                poster: cardImage,
                author: "",
                year: "2013",
                review: true,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/7",
                title: "HTML5. Разработка приложений для мобильных устройств",
                poster: cardImage,
                author: "Эстель Вейл, ",
                year: "2015",
                review: true,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/8",
                title: "Быстро и легко создаем, программируем и раскручиваем",
                poster: cardImageNone,
                author: "Олег Поломошнов, ",
                year: "2011",
                review: true,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/9",
                title: "Грокаем алгоритмы. Иллюстрированное ",
                poster: cardImage,
                author: "Борис Пахомов, ",
                year: "2014",
                review: true,
                btnClass: "main-page__content-list-card-btn",
                btnText: "Забронировать",
            },
        ],
    }

    render(): ReactNode {
        return (
            <div className="main-page__list-content">
                {this.state.books.map(({ id, title, poster, author, year, review, btnClass, btnText }) =>
                    <ListCard
                        id={id}
                        key={id}
                        title={title}
                        poster={poster}
                        author={author}
                        year={year}
                        review={review}
                        btnClass={btnClass}
                        btnText={btnText}
                    />)}
            </div>
        )
    }
}