import LogoWhite from "../../public/logo_white.svg";

import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

import {
    FooterTitle,
    FooterContainer,
    MainFooter,
    Btn,
    Head,
    Logo,
    FooterItems,
    FooterHead,
    FooterMenu1,
    FooterList,
    FooterLinks,
    LinksLogo,
    LinksContainer
} from "./FooterStyled";
import Image from "next/image";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTitle>
                <Head>Boost your links today</Head>
                <Btn>Get Started</Btn>
            </FooterTitle>
            <MainFooter>
                <LinksContainer>
                    <Logo>
                        <Image src={LogoWhite} alt='logo' height={40} />
                    </Logo>
                    <FooterLinks>
                        <LinksLogo>
                            <FaFacebookSquare />
                        </LinksLogo>
                        <LinksLogo>
                            <FaTwitter />
                        </LinksLogo>
                        <LinksLogo>
                            <FaPinterest />
                        </LinksLogo>
                        <LinksLogo>
                            <FaInstagram />
                        </LinksLogo>
                    </FooterLinks>
                </LinksContainer>
                <FooterItems>
                    <FooterMenu1>
                        <FooterHead>Features</FooterHead>
                        <FooterList>Link Shortning</FooterList>
                        <FooterList>Branded Links</FooterList>
                        <FooterList>Analytics</FooterList>
                    </FooterMenu1>
                    <FooterMenu1>
                        <FooterHead>Resources</FooterHead>
                        <FooterList>Blog</FooterList>
                        <FooterList>Developers</FooterList>
                        <FooterList>Support</FooterList>
                    </FooterMenu1>
                    <FooterMenu1>
                        <FooterHead>Company</FooterHead>
                        <FooterList>About</FooterList>
                        <FooterList>Our Team</FooterList>
                        <FooterList>Carrers</FooterList>
                        <FooterList>Contacts</FooterList>
                    </FooterMenu1>
                </FooterItems>
            </MainFooter>
        </FooterContainer>
    );
};

export default Footer;
