import { Component, ReactNode } from "react";
import { ContractContent } from "../../components/organisms/contract-content";
import { Footer } from "../../components/organisms/footer";
import { Header } from "../../components/organisms/header";
import { SideBar } from "../../components/organisms/side-bar";
import './contract.css';

export class Contract extends Component {

    render(): ReactNode {
        return (
            <div className='container'>
                <main className='main__content-wrapper'>
                    <ContractContent />
                </main>
            </div>
        )
    }
}