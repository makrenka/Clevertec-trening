import classNames from "classnames";
import { Component, ReactNode } from "react";
import './hamburger.css';

export interface Props {
    onClick: any;
    mobileMenuActive: boolean;
}

export class HamburgerButton extends Component<Props> {

    render(): ReactNode {
        return (
            <button
                type="button"
                onClick={this.props.onClick}
                className={classNames('header__hamburger', { hamburger__active: this.props.mobileMenuActive })}
            >
                <span>{' '}</span>
                <span>{' '}</span>
                <span>{' '}</span>
            </button>
        )
    }
}