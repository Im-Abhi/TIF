import styled from "styled-components";

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
`;

export const Navbarcontainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Navlogo = styled.a`
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 45vw;
  margin-right: 2rem;
  font-weight: bold;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  color: ${({ theme }) => theme.colors.Gray};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.VeryDarkViolet};
  }
`;
