import React, { useState } from 'react';
import styled from 'styled-components';
import OpcoesHeader from '../components/opcoes_header'



const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2F4F4F;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: space-between;
  }
`;

const PortalLink = styled.a`
  margin-left: 4.5%;
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 18px; 
    margin-left: 20px;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  display: none;
  

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: 1.25rem;
    font-size: 1.5rem;

  }
`;

const OpcoesContainer = styled.div`
  display: flex;
  margin-right:4.375rem;

  @media screen and (max-width: 768px) {
    display: ${props => (props.sidebar ? 'block' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: black;
    padding: 1.25rem;
    box-sizing: border-box;
  }
`;



function Header() {
  const  [sidebar, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!sidebar);
  };


  
  

  return (
    <HeaderContainer>
      <PortalLink href='/'>[KAYKY]</PortalLink>
      <MenuIcon className='botao'onClick={toggleMenu}>☰</MenuIcon>
      <OpcoesContainer sidebar={sidebar}>
        <OpcoesHeader />
      </OpcoesContainer>
    </HeaderContainer>
  );
}

export default Header;