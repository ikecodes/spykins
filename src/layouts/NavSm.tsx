import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import colors from '../constants/colors';
import menus from '../constants/menus';
const NavSm = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <>
      <OpenIcon onClick={() => setIsAnimating(true)}>
        <FiMenu role='button' size={40} color={colors.black} />
      </OpenIcon>
      <AnimatingContainer
        className={isAnimating ? 'clicked' : ''}
        onClick={(e) => setIsAnimating(false)}
      >
        <NavContainer onClick={(e) => e.stopPropagation()}>
          {menus.map((menu) => (
            <div className='ms-4' key={menu.id}>
              <Heading>
                <Link to={menu.path}>{menu.name}</Link>
              </Heading>
            </div>
          ))}
        </NavContainer>
      </AnimatingContainer>
    </>
  );
};

const OpenIcon = styled.span`
  position: absolute;
  top: 2.5rem;
  z-index: 100;
  font-weight: 700;
  right: 1rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const AnimatingContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background-color: rgb(0, 0, 0, 0.3);
  transform: translateX(100%);
  transition: all 0.3s ease-in;
  &.clicked {
    transform: translateX(0);
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${colors.white};
  position: absolute;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  transform: translateX(50%);
  gap: 2rem;
  & li {
    margin: 1rem 0;
  }
`;
const Heading = styled.h6`
  color: ${colors.color2};
  text-transform: capitalize;
  & a,
  a:link {
    color: ${colors.color2};
    text-decoration: none;
  }
  & a:hover {
    color: ${colors.color1};
  }
`;
export default NavSm;
