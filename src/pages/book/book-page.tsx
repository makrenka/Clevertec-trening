import { Component, ReactNode } from "react";
import { Header } from '../../components/organisms/header';
import { Footer } from '../../components/organisms/footer';
import { Breadcrump } from '../../components/molecules/breadcrump';

export class BookPage extends Component {

    render(): ReactNode {
        return (
            <>
                <Header />
                <section className='book-page'>
                    <Breadcrump />
                </section>
                <Footer />
            </>
        )
    }
}
