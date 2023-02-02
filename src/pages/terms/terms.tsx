import { Component, ReactNode } from "react";
import { SideBar } from "../../components/organisms/side-bar";
import { TermsContent } from "../../components/organisms/terms-content";
import './terms.css';

export class Terms extends Component {

    render(): ReactNode {
        return (
            <div className='container'>
                <div className='main__wrapper'>
                    <SideBar />
                    <main className='main__content-wrapper'>
                        <TermsContent />
                    </main>
                </div>
            </div>

        )
    }
}