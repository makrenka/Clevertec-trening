import React, { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import rating from "../../../assets/images/card-images/rating-stars.png";
import './tiles-card.css';

export interface Props {
    id: string;
    title: string;
    poster: string;
    author: string;
    review: boolean;
    btnClass: string;
    btnText: string;
}

export class TilesCard extends Component<Props> {

    render(): ReactNode {
        const isReview = this.props.review;
        if (isReview) {
            return (
                <div className="main-page__content-tiles-card" data-test-id='card'>
                    <div className="main-page__content-tiles-card-img-wrapper">
                        <Link to={this.props.id}>
                            <img src={this.props.poster} alt="book cover" className="main-page__content-tiles-card-img" />
                        </Link>
                    </div>
                    <div className="main-page__content-tiles-card-rating-wrapper">
                        <img src={rating} alt="rating stars" className="main-page__content-tiles-card-rating" />
                    </div>
                    <Link to={this.props.id} className="main-page__content-tiles-card-title">
                        Грокаем алгоритмы. {this.props.title}
                    </Link>
                    <div className="main-page__content-tiles-card-author-wrapper">
                        <p className="main-page__content-tiles-card-author">
                            Адитья Бхаргава, {this.props.author} <span>2019</span>
                        </p>
                    </div>
                    <div className="main-page__content-tiles-card-btn-wrapper">
                        <Link to={this.props.id}>
                            <button type="button" className={this.props.btnClass}>
                                {this.props.btnText}
                            </button>
                        </Link>
                    </div>
                </div>
            )
        }
        return (
            <div className="main-page__content-tiles-card" data-test-id='card'>
                <div className="main-page__content-tiles-card-img-wrapper">
                    <Link to={this.props.id}>
                        <img src={this.props.poster} alt="book cover" className="main-page__content-tiles-card-img" />
                    </Link>
                </div>
                <div className="main-page__content-tiles-card-rating-wrapper">
                    <p className="main-page__content-tiles-card-rating-none" > ещё нет оценок</p>
                </div>
                <Link to={this.props.id} className="main-page__content-tiles-card-title">
                    Грокаем алгоритмы. {this.props.title}
                </Link>
                <div className="main-page__content-tiles-card-author-wrapper">
                    <p className="main-page__content-tiles-card-author">
                        Адитья Бхаргава, {this.props.author} <span>2019</span>
                    </p>
                </div>
                <div className="main-page__content-tiles-card-btn-wrapper">
                    <Link to={this.props.id}>
                        <button type="button" className={this.props.btnClass}>
                            {this.props.btnText}
                        </button>
                    </Link>
                </div>
            </div>
        )

    }
}