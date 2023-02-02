import { Component, ReactNode } from "react";
import { BookReviewCard } from "../../molecules/book-review-card";
import './book-reviews.css';

export class BookReviews extends Component {

    render(): ReactNode {
        return (
            <div className="container">
                <section className="book-page__reviews">
                    <h3 className="book-page__reviews-title">Отзывы<span>2</span></h3>
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
                    <button type="button" className="book-page__reviews-btn">
                        оценить книгу
                    </button>
                </section>
            </div>

        )
    }
}