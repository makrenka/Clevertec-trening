import { Component, ReactNode } from "react";
import { TermsContentList } from "../../molecules/terms-content-list";
import './terms-content.css';

export class TermsContent extends Component {

    render(): ReactNode {
        return (
            <div className="terms-main__content">
                <h2 className="terms-main__content-heading">
                    Правила пользования
                </h2>
                <TermsContentList />
            </div>

        )
    }
}