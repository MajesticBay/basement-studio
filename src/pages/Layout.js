import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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