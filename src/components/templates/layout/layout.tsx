import { Component, ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BookPage } from "../../../pages/book";
import { MainPage } from "../../../pages/main";
import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/header";
import { LayoutMainPage } from "../layout-main-page";

export class Layout extends Component {

    render(): ReactNode {
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to='books/all' />} />
                    <Route element={<LayoutMainPage />}>
                        <Route path="books/:category" element={<MainPage />} />
                    </Route>
                    <Route path="/books/:category/:id" element={<BookPage />} />
                </Routes>
                <Footer />
            </>
        )
    }
}