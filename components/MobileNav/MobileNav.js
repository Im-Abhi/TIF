import Link from "next/link";
import React from "react";
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from "./MobileNavStyled";

const Sidebar = ({ isOpen, mytoggleHandler }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={mytoggleHandler}>
                <SidebarWrapper>
                    <SidebarMenu>
                        <Link href={'/'}>
                            <SidebarLink onClick={mytoggleHandler}>
                                Features
                            </SidebarLink>
                        </Link>
                        <Link href={'/'}>
                            <SidebarLink onClick={mytoggleHandler}>
                                Pricing
                            </SidebarLink>
                        </Link>
                        <Link href={'/'}>
                            <SidebarLink onClick={mytoggleHandler}>
                                Resources
                            </SidebarLink>
                        </Link>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
