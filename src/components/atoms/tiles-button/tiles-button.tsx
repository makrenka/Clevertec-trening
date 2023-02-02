import { HandySvg } from "handy-svg";
import { Component, ReactNode } from "react";
import tilesBtnActive from '../../../assets/images/icons/tiles-button-active.svg';
import tilesBtnUnactive from '../../../assets/images/icons/tiles-button-unactive.svg';

export interface Props {
    onClick: any;
    viewTiles: boolean;
}

export class TilesButton extends Component<Props> {

    render(): ReactNode {
        if (this.props.viewTiles) {
            return (
                <button
                    type='button'
                    className='search-bar__buttons-tiles-btn'
                    data-test-id='button-menu-view-window'
                    onClick={this.props.onClick}
                >
                    <HandySvg
                        src={tilesBtnActive}
                        className="search-bar__buttons-tiles-btn-icon"
                        width="46"
                        height="46"
                    />
                </button>
            )
        }
        return (
            <button
                type='button'
                className='search-bar__buttons-tiles-btn'
                data-test-id='button-menu-view-window'
                onClick={this.props.onClick}
            >
                <HandySvg
                    src={tilesBtnUnactive}
                    className="search-bar__buttons-tiles-btn-icon"
                    width="46"
                    height="46"
                />
            </button>
        )
    }
}