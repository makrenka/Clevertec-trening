import { Component, ReactNode } from 'react';
import './search-bar.css';
import { HandySvg } from 'handy-svg';
import searchIcon from '../../../assets/images/icons/search-icon.svg';
import selectIcon from '../../../assets/images/icons/select-icon.svg';
import searchBtnAdapt from '../../../assets/images/icons/search-button-320.svg';
import filterBtnAdapt from '../../../assets/images/icons/filter-button-320.svg';
import { TilesButton } from '../../atoms/tiles-button';
import { ListButton } from '../../atoms/list-button';

export interface Props {
    onClick: any;
    viewTiles: boolean;
}

export class SearchBar extends Component<Props> {


    render(): ReactNode {

        return (
            <div className="search-bar">
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
                    <button type='button' className='search-bar__btn-adapt'>
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
        )
    }
}
