import { Component, ReactNode } from "react";
import { ListCard } from '../../molecules/list-card';
import cardImage from '../../../assets/images/card-images/card-image.jpg';
import cardImageNone from '../../../assets/images/card-images/card-image-none.png';
import rating from '../../../assets/images/card-images/rating-stars.png';
import './main-page-list-content.css';

export class MainPageListContent extends Component {

    render(): ReactNode {
        return (
            <div className="main-page__list-content" data-test-id='main-page-content-list'>
                <ListCard
                    poster={cardImage}
                    title="Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих"
                    author="Адитья Бхаргава, "
                    year="2019"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <ListCard
                    poster={cardImage}
                    title="Программирование на JAVA"
                    author="Патрик Нимейер, Дэниэл Леук, "
                    year="2013"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <ListCard
                    poster={cardImage}
                    title="Как создать сайт. Комикс-путеводитель по HTML, CSS и WordPress"
                    author="Джи Ким, Нейт Купер, "
                    year="2019"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <ListCard
                    poster={cardImage}
                    title="HTML5 и CSS3. Разработка сайтов для любых браузеров и устройств"
                    author="Бен Фрейн, "
                    year="2014"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn-booked">
                            Забронирована
                        </button>
                    }
                />
                <ListCard
                    poster={cardImageNone}
                    title="Adobe Flash. Создание аркад, головоломок и других игр с помощью ActionScript"
                    author="Гэри Розенцвейг, "
                    year="2009"
                    children1={
                        <p className="main-page__content-list-card-rating-none">ещё нет оценок</p>
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <ListCard
                    poster={cardImage}
                    title="Грокаем алгоритмы. Иллюстрированное"
                    author=""
                    year="2013"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <ListCard
                    poster={cardImage}
                    title="HTML5. Разработка приложений для мобильных устройств"
                    author="Эстель Вейл, "
                    year="2015"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <ListCard
                    poster={cardImageNone}
                    title="Быстро и легко создаем, программируем и раскручиваем"
                    author="Олег Поломошнов, "
                    year="2011"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
                <ListCard
                    poster={cardImage}
                    title="Грокаем алгоритмы. Иллюстрированное "
                    author="Борис Пахомов, "
                    year="2014"
                    children1={
                        <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                    }
                    children2={
                        <button type="button" className="main-page__content-list-card-btn">
                            Забронировать
                        </button>
                    }
                />
            </div>
        )
    }
}