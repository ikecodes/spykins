import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';

const ArticleCard = () => {
  return (
    <div className='col-lg-3 col-md-6 mb-5'>
      <CardContainer className='shadow py-2 px-2 text-dark'>
        <Card className='bg-transparent border-0'>
          <Card.Body>
            <Title className='text-dark fw-bold'>Titre de l'article</Title>
            <p className='fw-light mt-2'>
              18 mars 2021 •{' '}
              <span className='text-decoration-underline'>Immobilier</span>
            </p>
            <p className='fw-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              corporis dipisicing elit.
            </p>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  color: ${colors.white};
  & p,
  span {
    font-size: 0.7rem;
  }
`;
const Title = styled.h6`
  font-weight: 0.9rem;
  margin: 0;
`;
export default ArticleCard;
