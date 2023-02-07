import { Component, ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BookPage } from "../../../pages/book";
import { Contract } from "../../../pages/contract";
import { MainPage } from "../../../pages/main";
import { Terms } from "../../../pages/terms";
import { LayoutMainPage } from "../layout-main-page";

export class Layout extends Component {

    render(): ReactNode {
        return (
            <Routes>
                <Route path="/" element={<Navigate to='books/all' />} />
                <Route path="/*" element={<LayoutMainPage />} />
                <Route path="/books/:category/:id" element={<BookPage />} />
            </Routes>
        )
    }
}