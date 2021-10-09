import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import logo from "../assets/logo.svg";

const Wrap = styled.header`
  background: #0d2663;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
`;

const MenuItem = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

const Logo = styled.img`
  position: absolute;
  left: 50px;
  top: 27px;
`;

const Header = () => {
  return (
    <Wrap>
      <Logo src={logo} />

      <Menu>
        <NavLink to="/addSet">
          <MenuItem>+ Добавить датасет</MenuItem>
        </NavLink>
        <MenuItem>Пункт меню</MenuItem>
        <MenuItem>Пункт меню</MenuItem>
        <MenuItem>Пункт меню</MenuItem>
      </Menu>
    </Wrap>
  );
};

export default Header;
