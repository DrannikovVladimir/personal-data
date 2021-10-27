import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './icons/Logo';
import colors from '../constants/color';

const HeaderSection = styled.header`
  box-shadow: 0px 1px 0px ${colors.borderColor};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1366px;
  min-height: 76px;
  margin: 0 auto;
  padding: 24px 92px;

  @media (max-width: 1366px) {
    width: 900px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (max-width: 900px) {
    justify-content: space-between;
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 550px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 550px) {
    width: auto;
  }
`;

const Nav = styled.nav`
  margin-left: 470px;

  @media (max-width: 1366px) {
    margin-left: 270px;
  }

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 134px;
  margin: 0;
  padding: 0;

  list-style: none;
`;

const Item = styled.li`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${colors.labelColor};
`;

const LinkItem = styled(Link)`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: transparent;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-bottom-color: ${colors.labelColor};
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <a href="/">
          <Logo />
        </a>
        <Nav>
          <List>
            <Item>
              <LinkItem to="/">Форма</LinkItem>
            </Item>
            <Item>
              <LinkItem to="/preview">Превью</LinkItem>
            </Item>
          </List>
        </Nav>
      </HeaderContainer>
    </HeaderSection>
  )
};

export default Header;
