import { useState } from "react";
import Footer from "./Footer/Footer";
import Sidebar from "./MobileNav/MobileNav";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState('');

    const mytoggleHandler = (e) => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar mytoggleHandler={mytoggleHandler} />
            <Sidebar isOpen={isOpen} />
            {children}
            <Footer />
        </>
    )
}

export default Layout;