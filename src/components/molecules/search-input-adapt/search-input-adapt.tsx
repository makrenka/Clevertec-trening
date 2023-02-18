import classNames from "classnames";
import { Component, ReactNode } from "react";
import './search-input-adapt.css';

export interface Props {
    onClick: any;
    openSearchInput: any;
}

export class SearchInputAdapt extends Component<Props> {

    state = {
        searchInputAdapt: false,
    }

    static closeSearchInputAdapt(evt: any) {
        const inputGroup = document.querySelector('.search-bar__input-group-adapt')
        if (evt.target.closest('.search-bar__input-btn-icon-adapt')) {
            inputGroup?.classList.remove('inputgroup__active');
        }
    }

    componentDidMount() {
        document.addEventListener('click', SearchInputAdapt.closeSearchInputAdapt);
    }

    componentWillUnmount() {
        document.removeEventListener('click', SearchInputAdapt.closeSearchInputAdapt);
    }

    render(): ReactNode {
        return (
            <div
                className={classNames("search-bar__input-group-adapt", { inputgroup__active: this.props.onClick })}
                data-test-id='input-search'
            >
                <input
                    type="text"
                    name="text-search"
                    placeholder="Поиск книги или автора…"
                    className="search-bar__input-adapt"
                />
                <button
                    type="button"
                    className="search-bar__input-btn-adapt"
                    onClick={() => { this.props.openSearchInput(this.state.searchInputAdapt) }}
                    data-test-id='button-search-close'
                >
                    <svg width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="search-bar__input-btn-icon-adapt"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4711 3.52859C12.7314 3.78894 12.7314 4.21105 12.4711 4.4714L4.47108 12.4714C4.21073 12.7317 3.78862 12.7317 3.52827 12.4714C3.26792 12.2111 3.26792 11.7889 3.52827 11.5286L11.5283 3.52859C11.7886 3.26824 12.2107 3.26824 12.4711 3.52859Z" fill="url(#paint0_linear_16483_1048)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.52827 3.52859C3.78862 3.26824 4.21073 3.26824 4.47108 3.52859L12.4711 11.5286C12.7314 11.7889 12.7314 12.2111 12.4711 12.4714C12.2107 12.7317 11.7886 12.7317 11.5283 12.4714L3.52827 4.4714C3.26792 4.21105 3.26792 3.78894 3.52827 3.52859Z" fill="url(#paint1_linear_16483_1048)" />
                        <defs>
                            <linearGradient id="paint0_linear_16483_1048" x1="7.83158" y1="-14.0208" x2="-28.2403" y2="14.5878" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F83600" />
                                <stop offset="1" stopColor="#F9D423" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_16483_1048" x1="7.83158" y1="-14.0208" x2="-28.2403" y2="14.5878" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F83600" />
                                <stop offset="1" stopColor="#F9D423" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        )
    }
}