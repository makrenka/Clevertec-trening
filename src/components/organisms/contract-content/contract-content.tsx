import { Component, ReactNode } from "react";
import { TermsContentList } from "../../molecules/terms-content-list";
import './contract-content.css';

export class ContractContent extends Component {

    render(): ReactNode {
        return (
            <div className="contract-main__content">
                <h2 className="contract-main__content-heading">
                    Договор оферты
                </h2>
                <TermsContentList />
            </div>
        )
    }
}