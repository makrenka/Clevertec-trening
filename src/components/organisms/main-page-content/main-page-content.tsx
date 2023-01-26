import { Component, ReactNode } from "react";
import { TilesCard } from '../../molecules/tiles-card';
import cardImage from '../../../assets/images/card-images/card-image.jpg';
import cardImageNone from '../../../assets/images/card-images/card-image-none.png';
import rating from '../../../assets/images/card-images/rating-stars.png';
import './main-page-content.css';

export class MainPageContent extends Component {

    render(): ReactNode {
        return (
            <div className="main-page__content" data-test-id='main-page-content-tiles'>
                <TilesCard
                    id="/book-page/1"
                    title="Иллюстрированное пособие для програ..."
                    poster={cardImage}
                    author=""
                    children1={
                        <p className="main-page__content-tiles-card-rating-none">ещё нет оценок</p>
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/2"
                    title="Иллюстрированное"
                    poster={cardImage}
                    author=""
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/3"
                    title=""
                    poster={cardImage}
                    author=""
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn-unavailable">
                            занята до 03.05
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/4"
                    title="Иллюстрированное пособие для програ..."
                    poster={cardImage}
                    author=""
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/5"
                    title="Иллюстрированное пособие для програ..."
                    poster={cardImage}
                    author="Патрик Нимейер,"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn-booked">
                            Забронирована
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/6"
                    title="Иллюстрированное"
                    poster={cardImageNone}
                    author="Патрик Нимейер,"
                    children1={
                        <p className="main-page__content-tiles-card-rating-none">ещё нет оценок</p>
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn-unavailable">
                            занята до 23.04
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/7"
                    title=""
                    poster={cardImage}
                    author="Патрик Нимейер,"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/8"
                    title="Иллюстрированное пособие для програ..."
                    poster={cardImage}
                    author="Патрик Нимейер,"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/9"
                    title="Иллюстрированное пособие для програ..."
                    poster={cardImage}
                    author=""
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <TilesCard
                    id="/book-page/10"
                    title="Иллюстрированное пособие для програ..."
                    poster={cardImageNone}
                    author=""
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-tiles-card-btn">
                            Забронировать
                        </button>
                    }
                />
            </div>
        )
    }
}