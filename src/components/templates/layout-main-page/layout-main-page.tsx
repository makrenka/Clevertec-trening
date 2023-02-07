import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { Contract } from "../../../pages/contract";
import { MainPage } from "../../../pages/main";
import { Terms } from "../../../pages/terms";
import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/header";
import { SideBar } from "../../organisms/side-bar";

export class LayoutMainPage extends Component {

    render(): ReactNode {
        return (
            <>
                <Header />
                <div className='container'>
                    <div className='main__wrapper'>
                        <SideBar />
                        <Routes>
                            <Route path="/books/:category" element={<MainPage />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/contract" element={<Contract />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}