import { Component, ReactNode } from "react";
import './list-card.css';

export interface Props {
    title: string;
    poster: string;
    author: string;
    year: string;
    children1: React.ReactNode;
    children2: React.ReactNode;
}

export class ListCard extends Component<Props> {

    render(): ReactNode {
        return (
            <div className="main-page__content-list-card" data-test-id='list-card'>
                <img src={this.props.poster} alt="book cover" className="main-page__content-list-card-img" />
                <div className="main-page__content-list-card-wrapper">
                    <h3 className="main-page__content-list-card-title">
                        {this.props.title}
                    </h3>
                    <p className="main-page__content-list-card-author">
                        {this.props.author} <span>{this.props.year}</span>
                    </p>
                    <div className="main-page__content-list-card-rating-btn-wrapper">
                        <div className="main-page__content-list-card-rating-wrapper">
                            {this.props.children1}
                        </div>
                        <div className="main-page__content-list-card-btn-wrapper">
                            {this.props.children2}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}