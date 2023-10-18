import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;