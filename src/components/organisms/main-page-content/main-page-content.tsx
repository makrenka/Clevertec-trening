import { Component, ReactNode } from "react";
import { TilesCard } from '../../molecules/tiles-card';
import cardImage from '../../../assets/images/card-images/card-image.jpg';
import cardImageNone from '../../../assets/images/card-images/card-image-none.png';
import './main-page-content.css';

export class MainPageContent extends Component {

    state = {
        books: [
            {
                id: "/books/:category/1",
                title: "Иллюстрированное пособие для програ...",
                poster: cardImage,
                author: "",
                review: false,
                btnClass: "main-page__content-tiles-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/2",
                title: "Иллюстрированное",
                poster: cardImage,
                author: "",
                review: true,
                btnClass: "main-page__content-tiles-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/3",
                title: "",
                poster: cardImage,
                author: "",
                review: true,
                btnClass: "main-page__content-tiles-card-btn-unavailable",
                btnText: "занята до 03.05",
            },
            {
                id: "/books/:category/4",
                title: "Иллюстрированное пособие для програ...",
                poster: cardImage,
                author: "",
                review: true,
                btnClass: "main-page__content-tiles-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/5",
                title: "Иллюстрированное пособие для програ...",
                poster: cardImage,
                author: "Патрик Нимейер,",
                review: true,
                btnClass: "main-page__content-tiles-card-btn-booked",
                btnText: "Забронирована",
            },
            {
                id: "/books/:category/6",
                title: "Иллюстрированное",
                poster: cardImageNone,
                author: "Патрик Нимейер,",
                review: false,
                btnClass: "main-page__content-tiles-card-btn-unavailable",
                btnText: "занята до 03.05",
            },
            {
                id: "/books/:category/7",
                title: "",
                poster: cardImage,
                author: "Патрик Нимейер,",
                review: true,
                btnClass: "main-page__content-tiles-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/8",
                title: "Иллюстрированное пособие для програ...",
                poster: cardImage,
                author: "Патрик Нимейер,",
                review: true,
                btnClass: "main-page__content-tiles-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/9",
                title: "Иллюстрированное пособие для програ...",
                poster: cardImage,
                author: "",
                review: true,
                btnClass: "main-page__content-tiles-card-btn",
                btnText: "Забронировать",
            },
            {
                id: "/books/:category/10",
                title: "Иллюстрированное пособие для програ...",
                poster: cardImageNone,
                author: "",
                review: true,
                btnClass: "main-page__content-tiles-card-btn",
                btnText: "Забронировать",
            },
        ],
    }

    render(): ReactNode {
        return (
            <div className="main-page__content">
                {this.state.books.map(({ id, title, poster, author, review, btnClass, btnText }) =>
                    <TilesCard
                        id={id}
                        key={id}
                        title={title}
                        poster={poster}
                        author={author}
                        review={review}
                        btnClass={btnClass}
                        btnText={btnText}
                    />)}
            </div>
        )
    }
}