import React, { Component, ReactNode } from "react";
import './tiles-card.css';

export interface Props {
    title: string;
    poster: string;
    author: string;
    children1: React.ReactNode;
    children2: React.ReactNode;
}

export class TilesCard extends Component<Props> {

    render(): ReactNode {
        return (
            <div className="main-page__content-tiles-card" data-test-id='card'>
                <img src={this.props.poster} alt="book cover" className="main-page__content-tiles-card-img" />
                <div className="main-page__content-tiles-card-rating-wrapper">
                    {this.props.children1}
                </div>
                <h3 className="main-page__content-tiles-card-title">
                    Грокаем алгоритмы. {this.props.title}
                </h3>
                <div className="main-page__content-tiles-card-author-wrapper">
                    <p className="main-page__content-tiles-card-author">
                        Адитья Бхаргава, {this.props.author} <span>2019</span>
                    </p>
                </div>
                <div className="main-page__content-tiles-card-btn-wrapper">
                    {this.props.children2}
                </div>
            </div>
        )
    }
}