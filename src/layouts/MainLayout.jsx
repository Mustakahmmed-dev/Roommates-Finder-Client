import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/Loader";

const MainLayout = () => {
    const {loading } = use(AuthContext);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                {loading ? <Loader></Loader> : <Outlet> </Outlet>}
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default MainLayout;