import { Component, ReactNode } from "react";
import { Footer } from "../../components/organisms/footer";
import { Header } from "../../components/organisms/header";
import { SideBar } from "../../components/organisms/side-bar";
import { TermsContent } from "../../components/organisms/terms-content";
import './terms.css';

export class Terms extends Component {

    render(): ReactNode {
        return (
            <div className='container'>
                <main className='main__content-wrapper'>
                    <TermsContent />
                </main>
            </div>
        )
    }
}