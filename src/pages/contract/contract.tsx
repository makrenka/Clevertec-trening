import { Component, ReactNode } from "react";
import { ContractContent } from "../../components/organisms/contract-content";
import { SideBar } from "../../components/organisms/side-bar";
import './contract.css';

export class Contract extends Component {

    render(): ReactNode {
        return (
            <div className='container'>
                <div className='main__wrapper'>
                    <SideBar />
                    <main className='main__content-wrapper'>
                        <ContractContent />
                    </main>
                </div>
            </div>
        )
    }
}