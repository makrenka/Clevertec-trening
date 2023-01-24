import { Header } from '../../components/organisms/header';
import { Footer } from '../../components/organisms/footer';
import { SideBar } from '../../components/organisms/side-bar';
import { SearchBar } from '../../components/organisms/search-bar';
import { MainPageContent } from '../../components/organisms/main-page-content';
import './main-page.css';

export const MainPage = () => (
    <>
        <Header />
        <section className='main-page'>
            <div className='container'>
                <div className='main__wrapper'>
                    <SideBar />
                    <div className='main__content-wrapper'>
                        <SearchBar />
                        <MainPageContent />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
);
