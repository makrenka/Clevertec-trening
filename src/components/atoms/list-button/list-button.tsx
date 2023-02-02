import { HandySvg } from "handy-svg";
import { Component, ReactNode } from "react";
import listBtnUnactive from '../../../assets/images/icons/list-button-unactive.svg';
import listBtnActive from '../../../assets/images/icons/list-button-active.svg';

export interface Props {
    onClick: any;
    viewTiles: boolean;
}

export class ListButton extends Component<Props> {

    render(): ReactNode {
        if (!this.props.viewTiles) {
            return (
                <button
                    type='button'
                    className='search-bar__buttons-list-btn'
                    data-test-id='button-menu-view-list'
                    onClick={this.props.onClick}
                >
                    <HandySvg
                        src={listBtnActive}
                        className="search-bar__buttons-list-btn-icon"
                        width="46"
                        height="46"
                    />
                </button>
            )
        }
        return (
            <button
                type='button'
                className='search-bar__buttons-list-btn'
                data-test-id='button-menu-view-list'
                onClick={this.props.onClick}
            >
                <HandySvg
                    src={listBtnUnactive}
                    className="search-bar__buttons-list-btn-icon"
                    width="46"
                    height="46"
                />
            </button>
        )
    }
}