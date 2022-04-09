import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import NavLg from '../layouts/NavLg';
import NavSm from '../layouts/NavSm';
import HeroImg from '../assets/images/pen.png';
import { MdArrowForwardIos } from 'react-icons/md';
const Hero = () => {
  return (
    <Container className='position-relative'>
      <NavSm />
      <NavLg />
      <div className='container'>
        <HeroBox className='row p-0 m-0 align-items-center'>
          <div className='col-lg-6'>
            <h6 className='m-0'>nous valorisons la</h6>
            <div className='d-flex align-items-center'>
              <h1>clarté</h1>
              <MdArrowForwardIos color='#b91c1c' size={20} className='ms-1' />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              recusandae, corrupti voluptas, repudiandae nemo repellendus nobis
              quod atque unde nesciunt facere tempore libero veritatis
              praesentium dolore cupiditate aliquid assumenda incidunt?
            </p>
            <Button className='mt-2'>En savoir plus</Button>
          </div>
          <div className='col-lg-6 justify-self-end'>
            <Image src={HeroImg} alt='' />
          </div>
        </HeroBox>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: ${colors.bgGradient};
  z-index: 1;
`;
const HeroBox = styled.div`
  height: 90vh;
  & h6,
  h1 {
    text-transform: uppercase;
    color: ${colors.color2};
  }
  & h1 {
    font-size: 3.2rem;
  }
  /* @media (max-width: 992px) {
    height: 80vh;
  } */
`;

const Image = styled.img`
  width: 35rem;
  height: auto;
  position: absolute;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
  @media (max-width: 992px) {
    top: 75%;
    margin-bottom: 10rem;
  }
  @media (max-width: 576px) {
    width: 20rem;
  }
`;

const Button = styled.button`
  color: ${colors.color2};
  background: transparent;
  padding: 0.5rem 2rem;
  border: 1px solid ${colors.color2};
`;
export default Hero;
