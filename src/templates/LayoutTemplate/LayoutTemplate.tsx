import { FC } from "react"
import { Outlet } from "react-router";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";


const LayoutTemplate: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayoutTemplate;
