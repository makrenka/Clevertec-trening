import React, { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import './tiles-card.css';

export interface Props {
    id: string;
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
                <Link to={this.props.id}>
                    <img src={this.props.poster} alt="book cover" className="main-page__content-tiles-card-img" />
                </Link>
                <div className="main-page__content-tiles-card-rating-wrapper">
                    {this.props.children1}
                </div>
                <Link to={this.props.id} className="main-page__content-tiles-card-title">
                    Грокаем алгоритмы. {this.props.title}
                </Link>
                <div className="main-page__content-tiles-card-author-wrapper">
                    <p className="main-page__content-tiles-card-author">
                        Адитья Бхаргава, {this.props.author} <span>2019</span>
                    </p>
                </div>
                <Link to={this.props.id} className="main-page__content-tiles-card-btn-wrapper">
                    {this.props.children2}
                </Link>
            </div>
        )
    }
}