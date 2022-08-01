import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #3b3054;
  align-items: center;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  display: block;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "15% !important" : "-100%")};
  
  @media screen and (min-width: 769px) {
    display: none;
  }

`;

export const SidebarWrapper = styled.div`
  transform: translateY(10rem);
`;

export const SidebarMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 50px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 70px);
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  list-style: none;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #bfbfbf;
  }
`;
