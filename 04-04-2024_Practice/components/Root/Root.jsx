import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;