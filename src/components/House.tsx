import React from 'react';
import styled from 'styled-components';
import HouseImg from '../assets/images/bg-houses.png';
const House = () => {
  return (
    <Box>
      <Image src={HouseImg} alt='building' />
    </Box>
  );
};
const Box = styled.div`
  height: 40vh;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;
export default House;
