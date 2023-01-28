import { Component, ReactNode } from "react";
import { Breadcrump } from '../../components/molecules/breadcrump';
import { BookDescription } from "../../components/organisms/book-description";
import { BookInformation } from "../../components/organisms/book-information";
import './book-page.css';

export class BookPage extends Component {

    render(): ReactNode {
        return (
            <main className="book-page">
                <Breadcrump />
                <BookDescription />
                <BookInformation />
            </main>
        )
    }
}
