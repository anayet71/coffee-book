import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import NavBar from "../componets/NavBar";


const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <NavBar></NavBar>
            {/* Dynamic section */}
            <div className="min-h-[calc(100vh-232px)] py-12 ">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;