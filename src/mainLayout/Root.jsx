import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h2 className="text-5xl">hello</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;