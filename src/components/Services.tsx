import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <Container>
      <div className='container'>
        <h6 className='m-0'>nos</h6>
        <h1>services</h1>
        <div className='row mt-5'>
          <ServiceCard title='copropriété' color={colors.box1} />
          <ServiceCard title='planification familiale' color={colors.box2} />
          <ServiceCard title='immobilier' color={colors.box3} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 0;
  & h6,
  h1 {
    text-transform: uppercase;
    color: ${colors.box1};
  }
`;
export default Services;
