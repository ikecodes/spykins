import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import NavItemLg from './NavItemLg';
import menus from '../constants/menus';

const NavbarLg = () => {
  return (
    <NavContainer className='px-2'>
      <div className='container'>
        <div className='row p-0 m-0 py-3 align-items-center'>
          <div className='col-lg-4 d-flex'>
            <Link to='/'>
              <Image src={Logo} />
            </Link>
            <LogoHeader className='ms-2 text-uppercase'>
              barbe & cimon notaires
            </LogoHeader>
          </div>
          <div className='col-lg-8 align-self-center'>
            <NavMenu>
              <ul className='d-flex  gap-5 align-items-center justify-content-end'>
                {menus.map((menu) => (
                  <NavItemLg key={menu.id} menu={menu} />
                ))}
              </ul>
            </NavMenu>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  z-index: 90;
`;
const NavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogoHeader = styled.h5`
  word-wrap: break-word;
`;
const Image = styled.img`
  height: auto;
  width: 0.9rem;
`;

export default NavbarLg;
