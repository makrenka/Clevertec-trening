import { Component, ReactNode } from "react";
import { MainPage } from "../../../pages/main";
import { SideBar } from "../../organisms/side-bar";

export class LayoutMainPage extends Component {

    render(): ReactNode {
        return (
            <div className='container'>
                <div className='main__wrapper'>
                    <SideBar />
                    <MainPage />
                </div>
            </div>
        )
    }
}