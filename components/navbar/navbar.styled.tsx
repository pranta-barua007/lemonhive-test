import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: rgb(255, 255, 255);
  padding: 0;
  z-index: 1;
  position: sticky;
  top: 0;

  @media screen and (max-width: 800px) {
    height: auto;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px 0 25px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: auto;
    padding: 0px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-transform: capitalize;
`;