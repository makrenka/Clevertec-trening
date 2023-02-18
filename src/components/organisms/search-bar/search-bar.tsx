import { Component, ReactNode } from 'react';
import classNames from 'classnames';
import './search-bar.css';
import { HandySvg } from 'handy-svg';
import searchIcon from '../../../assets/images/icons/search-icon.svg';
import selectIcon from '../../../assets/images/icons/select-icon.svg';
import searchBtnAdapt from '../../../assets/images/icons/search-button-320.svg';
import filterBtnAdapt from '../../../assets/images/icons/filter-button-320.svg';
import { TilesButton } from '../../atoms/tiles-button';
import { ListButton } from '../../atoms/list-button';
import { SearchInputAdapt } from '../../molecules/search-input-adapt';

export interface Props {
    onClick: any;
    viewTiles: boolean;
}

export class SearchBar extends Component<Props, { searchInputAdapt: boolean }> {
    constructor(props: any) {
        super(props);
        this.openSearchInputAdapt = this.openSearchInputAdapt.bind(this);
        this.showSearchBar = this.showSearchBar.bind(this);
    }

    state = {
        searchInputAdapt: false,
    }

    openSearchInputAdapt() {
        this.setState(prevState => ({
            searchInputAdapt: !prevState.searchInputAdapt,
        }))
    }

    showSearchBar(value: string) {
        this.setState({ searchInputAdapt: Boolean(value) });
    }

    render(): ReactNode {
        return (
            <>
                <div className={classNames("search-bar", { searchbar__unactive: this.state.searchInputAdapt })}>
                    <div className='search-bar__input-wrapper'>
                        <div className='search-bar__text-unput-group'>
                            <button type='button' className='search-bar__text-unput-btn'>
                                <HandySvg
                                    src={searchIcon}
                                    className="search-bar__text-unput-btn-icon"
                                    width="16"
                                    height="16"
                                />
                            </button>
                            <input
                                type="text"
                                name="text-search"
                                placeholder="Поиск книги или автора…"
                                className="search-bar__text-input"
                            />
                        </div>
                        <button type='button' className='search-bar__select-btn'>
                            <HandySvg
                                src={selectIcon}
                                className="search-bar__select-btn-icon"
                                width="16"
                                height="16"
                            />
                            По рейтингу
                        </button>
                    </div>
                    <div className='search-bar__input-wrapper-adapt'>
                        <button
                            type='button'
                            className='search-bar__btn-adapt'
                            onClick={this.openSearchInputAdapt}
                            data-test-id='button-search-open'
                        >
                            <HandySvg
                                src={searchBtnAdapt}
                                className="search-bar__btn-adapt-icon"
                                width="32"
                                height="32"
                            />
                        </button>
                        <button type='button' className='search-bar__btn-adapt'>
                            <HandySvg
                                src={filterBtnAdapt}
                                className="search-bar__btn-adapt-icon"
                                width="32"
                                height="32"
                            />
                        </button>
                    </div>
                    <div className='search-bar__buttons-wrapper'>
                        <TilesButton onClick={this.props.onClick} viewTiles={this.props.viewTiles} />
                        <ListButton onClick={this.props.onClick} viewTiles={this.props.viewTiles} />
                    </div>
                </div>
                <SearchInputAdapt
                    onClick={this.state.searchInputAdapt}
                    openSearchInput={this.showSearchBar}
                />
            </>

        )
    }
}
