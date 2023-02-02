import { Component, ReactNode } from "react";
import userAvatar from '../../../assets/images/book-page-images/user-review-avatar.jpg';
import rating from '../../../assets/images/book-page-images/rating.png';
import './book-review-card.css';

export interface Props {
    name: string;
    date: string;
    text: string;
}

export class BookReviewCard extends Component<Props> {

    render(): ReactNode {
        return (
            <div className="book-page__reviews-card">
                <div className="book-page__reviews-card-user">
                    <img src={userAvatar} alt="user avatar" className="book-page__reviews-card-user-avatar" />
                    <div className="book-page__reviews-card-user-name-wrapper">
                        <h4 className="book-page__reviews-card-user-name">{this.props.name}</h4>
                        <p className="book-page__reviews-card-user-date">{this.props.date}</p>
                    </div>
                </div>
                <img src={rating} alt="rating stars" className="book-page__reviews-card-rating" />
                <p className="book-page__reviews-card-text">{this.props.text}</p>
            </div>
        )
    }
}