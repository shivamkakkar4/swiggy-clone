import styled from "styled-components";

export const Logo = styled.img`
  height: 50px;
  float: left;
  transition: 0.5s;
  margin: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Location = styled.p`
  float: left;
  margin: 1.5rem 1.3rem;
`;

export const NavBar = {
  height: "100%",
};

export const NavItem = {
  width: "16%",
  margin: "auto 0",
};

export const NavLink = styled.a`
  &:hover {
    color: #fc8420;
  }
  color: #545660;
`;

export const SVG = styled.svg`
  margin: auto;
  transition: fill 0.25s;
  ${NavLink}:hover & {
    fill: #fc8420;
  }
`;

export const Menu = styled.span`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
`;
