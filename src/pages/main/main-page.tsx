import { Component, ReactNode } from 'react';
import { SearchBar } from '../../components/organisms/search-bar';
import { MainPageContent } from '../../components/organisms/main-page-content';
import { MainPageListContent } from '../../components/organisms/main-page-list-content';
import './main-page.css';

export class MainPage extends Component<{ props?: any }, { viewTiles: boolean }> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        viewTiles: true,
    };

    handleChange = (evt: any) => {
        if (evt.target.closest('.search-bar__buttons-list-btn')) {
            this.setState({
                viewTiles: false,
            });
        }
        if (evt.target.closest('.search-bar__buttons-tiles-btn')) {
            this.setState({
                viewTiles: true,
            })
        }
    }

    render(): ReactNode {
        if (this.state.viewTiles) {
            return (
                <main className='main__content-wrapper'>
                    <SearchBar onClick={this.handleChange} viewTiles={this.state.viewTiles} />
                    <MainPageContent />
                </main>
            )
        }
        return (
            <main className='main__content-wrapper'>
                <SearchBar onClick={this.handleChange} viewTiles={this.state.viewTiles} />
                <MainPageListContent />
            </main>
        )

    }
}

