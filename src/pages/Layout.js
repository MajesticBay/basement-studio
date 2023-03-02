import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <main className="main">
            <Header/>
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout;