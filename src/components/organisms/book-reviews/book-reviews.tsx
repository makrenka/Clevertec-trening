import classNames from "classnames";
import { Component, ReactNode } from "react";
import { BookReviewCard } from "../../molecules/book-review-card";
import './book-reviews.css';

export class BookReviews extends Component<{ props?: any }, { openReviews: boolean }> {
    constructor(props: any) {
        super(props);
        this.toggleReviews = this.toggleReviews.bind(this);
    }

    state = {
        openReviews: true,
    }

    toggleReviews(evt: any) {
        if (evt.target.closest('.book-page__reviews-title-arrow-icon')) {
            this.setState(prevState => ({
                openReviews: !prevState.openReviews,
            }))
        }
    }

    render(): ReactNode {
        return (
            <div className="container">
                <section className="book-page__reviews">
                    <div className="book-page__reviews-title-wrapper">
                        <h3 className="book-page__reviews-title">Отзывы<span>2</span></h3>
                        <button
                            type="button"
                            className="book-page__reviews-title-arrow-btn"
                            onClick={this.toggleReviews}
                            data-test-id='button-hide-reviews'
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={classNames("book-page__reviews-title-arrow-icon", { reviewsarrow__active: !this.state.openReviews })}
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" fill="#363636" />
                            </svg>
                        </button>
                    </div>
                    <div className={classNames("book-page__reviews-cards-wrapper", { cards__unactive: !this.state.openReviews })}>
                        <BookReviewCard
                            name="Иван Иванов"
                            date="5 января 2019"
                            text=""
                        />
                        <BookReviewCard
                            name="Николай Качков"
                            date="20 июня 2018"
                            text="Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."
                        />
                        <BookReviewCard
                            name="Екатерина Беляева"
                            date="18 февраля 2018"
                            text=""
                        />
                    </div>
                    <button
                        type="button"
                        className="book-page__reviews-btn"
                        data-test-id='button-rating'
                    >
                        оценить книгу
                    </button>
                </section>
            </div>

        )
    }
}