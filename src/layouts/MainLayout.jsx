import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default MainLayout;