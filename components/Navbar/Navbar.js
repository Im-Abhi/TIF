import React from "react";
import ReactLogo from "../../public/logo.svg";
import Image from 'next/image';
import Link from 'next/link';

import { FaBars } from "react-icons/fa";
import {
    Nav,
    Navbarcontainer,
    Navlogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from "./NavbarStyled";

const Navbar = ({ mytoggleHandler }) => {
    return (
        <Nav>
            <Navbarcontainer>
                <Link href="/">
                    <Navlogo>
                        <Image
                            src={ReactLogo}
                            alt="react-logo"
                        />
                    </Navlogo>
                </Link>
                <NavMenu>
                    <NavItem>
                        <Link href={'/'}>
                            <NavLinks>Features</NavLinks>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href={'/'}>
                            <NavLinks>Pricing</NavLinks>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href={'/'}>
                            <NavLinks>Resources</NavLinks>
                        </Link>
                    </NavItem>
                </NavMenu>
                <MobileIcon onClick={mytoggleHandler}>
                    <FaBars />
                </MobileIcon>
            </Navbarcontainer>
        </Nav>
    );
};

export default Navbar;
