import { Component, ReactNode } from 'react';
import './search-bar.css';
import { HandySvg } from 'handy-svg';
import searchIcon from '../../../assets/images/icons/search-icon.svg';
import selectIcon from '../../../assets/images/icons/select-icon.svg';
import tilesBtnActive from '../../../assets/images/icons/tiles-button-active.svg';
import listBtnUnactive from '../../../assets/images/icons/list-button-unactive.svg';
import tilesBtnUnactive from '../../../assets/images/icons/tiles-button-unactive.svg';
import listBtnActive from '../../../assets/images/icons/list-button-active.svg';

export class SearchBar extends Component {

    render(): ReactNode {
        return (
            <div className="search-bar" data-test-id="search-bar">
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
                    <div className='search-bar__select-group'>
                        <button type='button' className='search-bar__select-btn'>
                            <HandySvg
                                src={selectIcon}
                                className="search-bar__select-btn-icon"
                                width="16"
                                height="16"
                            />
                        </button>
                        <select name="select-search" id="books-select" className='search-bar__select'>
                            <option value="rating" className='search-bar__select-option'>По рейтингу</option>
                            <option value="date" className='search-bar__select-option'>По дате</option>
                            <option value="price" className='search-bar__select-option'>По цене</option>
                        </select>
                    </div>
                </div>
                <div className='search-bar__buttons-tiles-wrapper'>
                    <button type='button' className='search-bar__buttons-tiles-btn' data-test-id='button-menu-view-window'>
                        <HandySvg
                            src={tilesBtnActive}
                            className="search-bar__buttons-tiles-btn-icon"
                            width="46"
                            height="46"
                        />
                    </button>
                    <button type='button' className='search-bar__buttons-list-btn'>
                        <HandySvg
                            src={listBtnUnactive}
                            className="search-bar__buttons-list-btn-icon"
                            width="46"
                            height="46"
                        />
                    </button>
                </div>
                <div className='search-bar__buttons-list-wrapper'>
                    <button type='button' className='search-bar__buttons-tiles-btn' data-test-id='button-menu-view-window'>
                        <HandySvg
                            src={tilesBtnUnactive}
                            className="search-bar__buttons-tiles-btn-icon"
                            width="46"
                            height="46"
                        />
                    </button>
                    <button type='button' className='search-bar__buttons-list-btn'>
                        <HandySvg
                            src={listBtnActive}
                            className="search-bar__buttons-list-btn-icon"
                            width="46"
                            height="46"
                        />
                    </button>
                </div>
            </div>
        )
    }
}
