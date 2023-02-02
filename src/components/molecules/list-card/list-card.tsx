import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import rating from '../../../assets/images/card-images/rating-stars.png';
import './list-card.css';

export interface Props {
    id: string;
    title: string;
    poster: string;
    author: string;
    year: string;
    review: boolean;
    btnClass: string;
    btnText: string;
}

export class ListCard extends Component<Props> {

    render(): ReactNode {
        const isReview = this.props.review;
        if (isReview) {
            return (
                <div className="main-page__content-list-card" data-test-id='list-card'>
                    <Link to={this.props.id}>
                        <img src={this.props.poster} alt="book cover" className="main-page__content-list-card-img" />
                    </Link>
                    <div className="main-page__content-list-card-wrapper">
                        <Link to={this.props.id} className="main-page__content-list-card-title">
                            {this.props.title}
                        </Link>
                        <p className="main-page__content-list-card-author">
                            {this.props.author} <span>{this.props.year}</span>
                        </p>
                        <div className="main-page__content-list-card-rating-btn-wrapper">
                            <div className="main-page__content-list-card-rating-wrapper">
                                <img src={rating} alt="rating stars" className="main-page__content-list-card-rating" />
                            </div>
                            <Link to={this.props.id} className="main-page__content-list-card-btn-wrapper">
                                <button type="button" className={this.props.btnClass}>
                                    {this.props.btnText}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="main-page__content-list-card" data-test-id='list-card'>
                <Link to={this.props.id}>
                    <img src={this.props.poster} alt="book cover" className="main-page__content-list-card-img" />
                </Link>
                <div className="main-page__content-list-card-wrapper">
                    <Link to={this.props.id} className="main-page__content-list-card-title">
                        {this.props.title}
                    </Link>
                    <p className="main-page__content-list-card-author">
                        {this.props.author} <span>{this.props.year}</span>
                    </p>
                    <div className="main-page__content-list-card-rating-btn-wrapper">
                        <div className="main-page__content-list-card-rating-wrapper">
                            <p className="main-page__content-list-card-rating-none">ещё нет оценок</p>
                        </div>
                        <Link to={this.props.id} className="main-page__content-list-card-btn-wrapper">
                            <button type="button" className={this.props.btnClass}>
                                {this.props.btnText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}