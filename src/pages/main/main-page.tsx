import { Component, ReactNode } from 'react';
import { Header } from '../../components/organisms/header';
import { Footer } from '../../components/organisms/footer';
import { SideBar } from '../../components/organisms/side-bar';
import { SearchBar } from '../../components/organisms/search-bar';
import { MainPageContent } from '../../components/organisms/main-page-content';
import { MainPageListContent } from '../../components/organisms/main-page-list-content';
import './main-page.css';

export class MainPage extends Component {

    static onListContent(evt: Event) {
        const target = evt.target as HTMLButtonElement;
        const viewButton = target.closest('.search-bar__buttons-list-btn');
        const tilesContent = document.querySelector('.main-page__content');
        const listContent = document.querySelector('.main-page__list-content');
        const tilesButtons = document.querySelector('.search-bar__buttons-tiles-wrapper');
        const listButtons = document.querySelector('.search-bar__buttons-list-wrapper');
        if (viewButton) {
            tilesContent?.classList.add('main-page__content--unactive');
            listContent?.classList.add('main-page__list-content--active');
            tilesButtons?.classList.add('search-bar__buttons-tiles-wrapper--unactive');
            listButtons?.classList.add('search-bar__buttons-list-wrapper--active');
        }
    }

    static onTilesContent(evt: Event) {
        const target = evt.target as HTMLButtonElement;
        const viewButton = target.closest('.search-bar__buttons-tiles-btn');
        const tilesContent = document.querySelector('.main-page__content');
        const listContent = document.querySelector('.main-page__list-content');
        const tilesButtons = document.querySelector('.search-bar__buttons-tiles-wrapper');
        const listButtons = document.querySelector('.search-bar__buttons-list-wrapper');
        if (viewButton) {
            tilesContent?.classList.remove('main-page__content--unactive');
            listContent?.classList.remove('main-page__list-content--active');
            tilesButtons?.classList.remove('search-bar__buttons-tiles-wrapper--unactive');
            listButtons?.classList.remove('search-bar__buttons-list-wrapper--active');
        }
    }

    componentDidMount() {
        document.addEventListener('click', MainPage.onListContent)
        document.addEventListener('click', MainPage.onTilesContent)
    }

    render(): ReactNode {
        return (
            <>
                <Header />
                <section className='main-page'>
                    <div className='container'>
                        <div className='main__wrapper'>
                            <SideBar />
                            <div className='main__content-wrapper'>
                                <SearchBar />
                                <MainPageContent />
                                <MainPageListContent />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

